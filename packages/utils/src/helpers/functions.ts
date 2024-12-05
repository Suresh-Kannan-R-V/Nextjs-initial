export function isOdd(number: number): boolean {
	return number % 2 !== 0;
}

export function slugToPascalCase(slug: string): string {
	const words: string[] = slug.split('-');
	const pascalCase: string = words
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' '); // Add space here
	return pascalCase;
}

export function isBrowser() {
	return (
		typeof window !== 'undefined' && typeof window.document !== 'undefined'
	);
}

export function decodeJwtToken(token: string) {
	const base64Url = token.split('.')[1];
	const base64 = base64Url?.replace(/-/g, '+').replace(/_/g, '/');
	const decodedPayload = atob(base64!);
	return JSON.parse(decodedPayload);
}

export function generateSlug(text: string) {
	const slug = text
		.toLowerCase() // Convert to lowercase
		.replace(/\s+/g, '-') // Replace whitespace with dashes
		.replace(/[^\w-]+/g, '') // Remove non-word characters (excluding dashes)
		.replace(/--+/g, '-') // Replace multiple dashes with a single dash
		.replace(/^-+|-+$/g, ''); // Remove dashes from the beginning or end of the slug
	return slug;
}

export function isValidHttpUrl(url: string): boolean {
	// Regular expression to match HTTP and HTTPS URLs
	const urlPattern = /^(https?):\/\/[^\s/$.?#].[^\s]*$/i;

	// Test if the provided string matches the URL pattern
	return urlPattern.test(url);
}

export function replaceUrl(inputString: string): string {
	// Replace "https://www." with "www"
	const result = inputString.replace(/https:\/\/www\./g, 'www.');

	// Replace "https://" with "www"
	return result.replace(/https:\/\//g, 'www.');
}

export function normalizeCase(str: string): string {
	return str
		.replace(/[-_]/g, ' ') // Replace hyphens and underscores with spaces
		.split(' ') // Split into words
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // Capitalize each word
		.join(' '); // Join words with spaces
}

export function convertSnakeCaseToNormalText(snakeCase: string): string {
	// If the string contains underscores, treat it as snake case
	if (snakeCase.includes('_')) {
		// Split the snake case string into an array of words
		const words = snakeCase.split('_');

		// Capitalize the first letter of each word and join them with a space
		const normalText = words
			.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
			.join(' ');

		return normalText;
	}
	// If it's a single word, simply capitalize the first letter
	return snakeCase.charAt(0).toUpperCase() + snakeCase.slice(1);
}
