import { execSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createLogger, format, transports } from 'winston';

// Configuration
const CONFIG_FILE = 'link-config.json';
const RESULTS_FILE = 'link-results.json';

// Setup
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Load configuration
let config;
try {
	config = JSON.parse(readFileSync(join(__dirname, CONFIG_FILE), 'utf8'));
} catch (error) {
	console.error(`Error reading config file: ${error.message}`);
	process.exit(1);
}

const { externalPackages, logLevel } = config;

// Setup logger
const logger = createLogger({
	level: logLevel || 'info',
	format: format.combine(
		format.timestamp(),
		format.printf(({ timestamp, level, message }) => {
			return `${timestamp} [${level}]: ${message}`;
		}),
	),
	transports: [new transports.Console()],
});

function runCommand(command, cwd) {
	try {
		return execSync(command, { cwd, stdio: 'pipe' }).toString().trim();
	} catch (error) {
		logger.error(`Error executing command: ${command} in ${cwd}`);
		logger.error(error.message);
		return null;
	}
}

function isPackageLinked(packageName) {
	const result = runCommand(
		`npm ls -g ${packageName} --depth=0 --link=true`,
		__dirname,
	);
	return result && !result.includes('(empty)');
}

async function linkPackages() {
	logger.info('Starting package linking process');

	const results = [];

	for (const pkg of externalPackages) {
		logger.info(`Checking ${pkg}...`);
		const packagePath = join(__dirname, '..', 'packages', pkg.split('/')[1]);

		if (!existsSync(packagePath)) {
			logger.error(`Package directory not found: ${packagePath}`);
			results.push({
				package: pkg,
				status: 'error',
				message: 'Directory not found',
			});
			continue;
		}

		if (isPackageLinked(pkg)) {
			logger.info(`${pkg} is already linked globally.`);
			results.push({
				package: pkg,
				status: 'skipped',
				message: 'Already linked',
			});
		} else {
			logger.info(`Linking ${pkg}...`);
			const result = runCommand('npm link', packagePath);
			if (result !== null) {
				logger.info(`Successfully linked ${pkg}`);
				results.push({
					package: pkg,
					status: 'success',
					message: 'Linked successfully',
				});
			} else {
				logger.error(`Failed to link ${pkg}`);
				results.push({
					package: pkg,
					status: 'error',
					message: 'Linking failed',
				});
			}
		}
	}

	return results;
}

async function verifyLinks() {
	logger.info('Verifying global links:');
	const results = [];
	for (const pkg of externalPackages) {
		const verifyCommand = `npm ls -g ${pkg} --depth=0 --link=true`;
		logger.info(`Verifying ${pkg}:`);
		const result = runCommand(verifyCommand, __dirname);
		if (result) {
			logger.info(result);
			results.push({ package: pkg, status: 'verified', message: result });
		} else {
			logger.error(`Failed to verify ${pkg}`);
			results.push({
				package: pkg,
				status: 'verification_failed',
				message: 'Verification failed',
			});
		}
	}
	return results;
}

// Main execution
(async () => {
	try {
		const linkResults = await linkPackages();
		const verificationResults = await verifyLinks();

		const finalResults = {
			linkingResults: linkResults,
			verificationResults: verificationResults,
		};

		// Generate summary
		const summary = linkResults.reduce((acc, result) => {
			acc[result.status] = (acc[result.status] || 0) + 1;
			return acc;
		}, {});

		// Save results to a file
		const resultFilePath = join(__dirname, RESULTS_FILE);
		writeFileSync(resultFilePath, JSON.stringify(finalResults, null, 2));
		logger.info(`Detailed results saved to ${resultFilePath}`);

		// Log summary
		logger.info('Process Summary:');
		logger.info('Linking Summary:', summary);
		logger.info(`Verification: ${verificationResults.length} packages checked`);
	} catch (error) {
		logger.error('An unexpected error occurred:', error);
		process.exit(1);
	}
})();
