const fs = require('fs');
const path = require('path');
const { walkDir } = require('../../utils');

function initProject(projectDir) {
    const templatePath = path.join(__dirname, '../../templates/project');
    const baseDir = projectDir || process.cwd();

    try {
        // Create docs directory if it doesn't exist
        const docsDir = path.join(baseDir, 'docs');
        if (!fs.existsSync(docsDir)) {
            fs.mkdirSync(docsDir, { recursive: true });
        }

        // Get template files
        const templateFiles = walkDir(templatePath);
        // Get existing files in target directory
        const existingFiles = walkDir(baseDir);
        
        for (const file of templateFiles) {
            // Skip if file already exists in target
            if (existingFiles.includes(file)) {
                console.log(`${file} already exists`);
                continue;
            }
            
            const sourcePath = path.join(templatePath, file);
            const targetPath = path.join(baseDir, file);
            
            // Ensure target directory exists
            const targetDir = path.dirname(targetPath);
            if (!fs.existsSync(targetDir)) {
                fs.mkdirSync(targetDir, { recursive: true });
            }
            
            const content = fs.readFileSync(sourcePath, 'utf8');
            fs.writeFileSync(targetPath, content);
            console.log(`Created ${file}`);
        }
    } catch (error) {
        console.error('Error initializing project:', error.message);
        process.exit(1);
    }
}

module.exports = { initProject };
