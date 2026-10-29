'use strict';

const { spawnSync } = require('child_process');

const result = spawnSync('npx', ['jest', ...process.argv.slice(2)], {
  stdio: 'inherit',
  env: { ...process.env, SOLUTIONS: '1' },
  shell: process.platform === 'win32',
});

process.exit(result.status === null ? 1 : result.status);
