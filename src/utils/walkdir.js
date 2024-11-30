/**
 * utils
 */
const fs = require('fs');
const path = require('path');

/**
 * Recursively walks a directory tree and returns a sorted list of all file paths
 * relative to the input directory
 * @param {string} dirPath - The directory to walk
 * @returns {string[]} - Sorted array of relative file paths
 */
function walkDir(dirPath) {
    const files = [];
    
    function walk(currentPath, relativeTo) {
        const items = fs.readdirSync(currentPath);
        
        for (const item of items) {
            const fullPath = path.join(currentPath, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                walk(fullPath, relativeTo);
            } else {
                const relativePath = path.relative(relativeTo, fullPath);
                files.push(relativePath);
            }
        }
    }
    
    walk(dirPath, dirPath);
    return files.sort();
}

module.exports = {
    walkDir
};
