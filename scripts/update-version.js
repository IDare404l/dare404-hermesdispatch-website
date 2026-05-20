const fs = require('fs');
const { execSync } = require('child_process');

const getGitInfo = () => {
  try {
    const commit = execSync('git rev-parse HEAD', { encoding: 'utf-8' }).trim();
    const build = execSync('git rev-list --count HEAD', { encoding: 'utf-8' }).trim();
    return {
      build: `#${build}`,
      commit: commit.slice(0, 12),
      timestamp: new Date().toISOString()
    };
  } catch (e) {
    return {
      build: 'DEV',
      commit: 'local',
      timestamp: new Date().toISOString()
    };
  }
};

const versionData = getGitInfo();

fs.writeFileSync(
  './src/config/version.json',
  JSON.stringify(versionData, null, 2)
);

console.log('Version updated:', versionData);