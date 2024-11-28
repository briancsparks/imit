 
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { initAider } = require('./src/tools/aider');

const command = process.argv[2];

if (!command) {
    console.error('Please specify a command (e.g., "imit aider")');
    process.exit(1);
}

switch (command) {
    case 'aider':
        initAider();
        break;
    default:
        console.error(`Unknown command: ${command}`);
        process.exit(1);
}
