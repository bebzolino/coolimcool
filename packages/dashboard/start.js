const { spawn } = require('node:child_process');

const port = /^\d+$/.test(process.env.PORT || '') ? process.env.PORT : '3000';
const nextBin = require.resolve('next/dist/bin/next');
const child = spawn(process.execPath, [nextBin, 'start', '-p', port], {
  stdio: 'inherit',
});

child.on('exit', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});
