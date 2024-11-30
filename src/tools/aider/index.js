 
const fs = require('fs');
const path = require('path');
const { walkDir } = require('../../utils');

function initAider(projectDir) {
    const templatePath = path.join(__dirname, '../../templates/aider/.aider.conf.yml');
    const baseDir = projectDir || process.cwd();
    const targetPath = path.join(baseDir, '.aider.conf.yml');

    // Check if config already exists
    if (fs.existsSync(targetPath)) {
        console.log('.aider.conf.yml already exists');
        return;
    }

    try {
        // Read template
        const template = fs.readFileSync(templatePath, 'utf8');
        
        // Write to project directory
        fs.writeFileSync(targetPath, template);
        
        console.log('Created .aider.conf.yml');
        
        // Get all existing files
        const existingFiles = walkDir(baseDir);
        
        // Verify required files exist
        const requiredFiles = ['README.md', 'docs/CONVENTIONS.md', 'docs/project-description.md'];
        
        for (const file of requiredFiles) {
            // Normalize path separators for comparison
            const normalizedFile = file.replace(/\//g, path.sep);
            if (!existingFiles.includes(normalizedFile)) {
                console.warn(`Warning: ${file} does not exist`);
            }
        }
    } catch (error) {
        console.error('Error initializing aider:', error.message);
        process.exit(1);
    }
}

module.exports = { initAider };
