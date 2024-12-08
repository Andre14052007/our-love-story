import { execSync } from 'child_process';

// Run npm install with platform-specific dependencies
try {
  console.log('Installing dependencies...');
  execSync('npm install', { stdio: 'inherit' });
  
  console.log('Installing platform-specific dependencies...');
  execSync('npm install @esbuild/linux-x64 @rollup/rollup-linux-x64-gnu', { stdio: 'inherit' });
  
  console.log('Running build...');
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
