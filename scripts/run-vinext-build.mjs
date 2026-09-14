// Let pending native callbacks finish before Node exits on Windows.
// Preserve Vinext's exit status so build failures still fail the deployment.
if (process.platform === 'win32') {
  process.exit = (code = 0) => { process.exitCode = code; };
}

await import('../node_modules/vinext/dist/cli.js');
