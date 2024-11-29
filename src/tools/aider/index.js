 
const fs = require('fs');
const path = require('path');

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
        
        // Verify required files exist
        const requiredFiles = ['README.md', 'docs/CONVENTIONS.md', 'docs/project-description.md'];
        
        for (const file of requiredFiles) {
            const filePath = path.join(baseDir, file);
            if (!fs.existsSync(filePath)) {
                console.warn(`Warning: ${file} does not exist`);
            }
        }
    } catch (error) {
        console.error('Error initializing aider:', error.message);
        process.exit(1);
    }
}

module.exports = { initAider };
