/**
 * Utility function to get the correct path for assets with the PUBLIC_URL prefix
 * @param path - The relative path to the asset
 * @returns The full path with PUBLIC_URL prefix
 */
export const getAssetPath = (path: string): string => {
    // If the path is already a full URL (starts with http or https), return it as is
    if (path.startsWith('http://') || path.startsWith('https://')) {
        return path;
    }

    // Otherwise, prepend the PUBLIC_URL
    return `${process.env.PUBLIC_URL}${path}`;
};