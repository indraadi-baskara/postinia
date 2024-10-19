const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'dist');
const targetDir = path.join(__dirname, '..', 'cordova', 'www');

// Function to recursively copy files and directories
function copyRecursive(source, target) {
  // Create target directory if it doesn't exist
  if (!fs.existsSync(target)) {
    fs.mkdirSync(target, { recursive: true });
  }

  // Read source directory
  const files = fs.readdirSync(source);

  files.forEach(file => {
    const sourcePath = path.join(source, file);
    const targetPath = path.join(target, file);

    if (fs.lstatSync(sourcePath).isDirectory()) {
      // Recursively copy subdirectories
      copyRecursive(sourcePath, targetPath);
    } else {
      // Copy file
      fs.copyFileSync(sourcePath, targetPath);
    }
  });
}

// Function to remove directory and its contents
function removeDirectory(dir) {
  if (fs.existsSync(dir)) {
    fs.readdirSync(dir).forEach(file => {
      const currentPath = path.join(dir, file);
      if (fs.lstatSync(currentPath).isDirectory()) {
        removeDirectory(currentPath);
      } else {
        fs.unlinkSync(currentPath);
      }
    });
    fs.rmdirSync(dir);
  }
}

// Main execution
console.log('Moving files from dist to cordova/www...');

// Remove existing cordova/www directory if it exists
removeDirectory(targetDir);

// Copy files from dist to cordova/www
copyRecursive(sourceDir, targetDir);

console.log('Files moved successfully!');

