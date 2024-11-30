const fs = require('fs');
const path = require('path');

function initProject(projectDir) {
    const templatePath = path.join(__dirname, '../../templates/project');
    const baseDir = projectDir || process.cwd();

    try {
        // Create docs directory if it doesn't exist
        const docsDir = path.join(baseDir, 'docs');
        if (!fs.existsSync(docsDir)) {
            fs.mkdirSync(docsDir, { recursive: true });
        }

        // Copy template files
        const files = ['docs/CONVENTIONS.md', 'docs/project-description.md'];
        
        for (const file of files) {
            const sourcePath = path.join(templatePath, file);
            const targetPath = path.join(baseDir, file);
            
            if (!fs.existsSync(targetPath)) {
                const content = fs.readFileSync(sourcePath, 'utf8');
                fs.writeFileSync(targetPath, content);
                console.log(`Created ${file}`);
            } else {
                console.log(`${file} already exists`);
            }
        }
    } catch (error) {
        console.error('Error initializing project:', error.message);
        process.exit(1);
    }
}

module.exports = { initProject };
