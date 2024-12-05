import { execSync } from 'node:child_process';
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { createLogger, format, transports } from 'winston';

// Configuration
const CONFIG_FILE = 'link-config.json';
const RESULTS_FILE = 'unlink-results.json';

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

async function unlinkPackages() {
	logger.info('Starting package unlinking process');

	const results = [];

	// Global unlink for each package
	for (const pkg of externalPackages) {
		const packagePath = join(__dirname, '..', 'packages', pkg.split('/')[1]);

		if (!existsSync(packagePath)) {
			logger.error(`Package directory not found: ${packagePath}`);
			results.push({
				package: pkg,
				status: 'error',
				message: 'Directory not found for global unlink',
			});
			continue;
		}

		logger.info(`Unlinking ${pkg} globally...`);
		const globalResult = runCommand('npm unlink -g', packagePath);
		if (globalResult !== null) {
			logger.info(`Successfully unlinked ${pkg} globally`);
			results.push({
				package: pkg,
				status: 'success',
				message: 'Unlinked globally successfully',
			});
		} else {
			logger.error(`Failed to unlink ${pkg} globally`);
			results.push({
				package: pkg,
				status: 'error',
				message: 'Unlinking globally failed',
			});
		}
	}

	return results;
}

// Main execution
(async () => {
	try {
		const unlinkResults = await unlinkPackages();

		// Generate summary
		const summary = unlinkResults.reduce((acc, result) => {
			acc[result.status] = (acc[result.status] || 0) + 1;
			return acc;
		}, {});

		// Save results to a file
		const resultFilePath = join(__dirname, RESULTS_FILE);
		writeFileSync(resultFilePath, JSON.stringify(unlinkResults, null, 2));
		logger.info(`Detailed results saved to ${resultFilePath}`);

		// Log summary
		logger.info('Process Summary:');
		logger.info('Unlinking Summary:', summary);
		logger.info(
			'All packages unlinked. Remember to run npm install to restore packages from npm.',
		);
	} catch (error) {
		logger.error('An unexpected error occurred:', error);
		process.exit(1);
	}
})();
