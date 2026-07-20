# Windows install fix

The previous package lock was generated with an internal registry URL. This build uses the public npm registry.

Run these commands from the project folder in PowerShell:

```powershell
npm config set registry https://registry.npmjs.org/

# Stop any running dev server first, then clean the failed install:
if (Test-Path node_modules) { Remove-Item -Recurse -Force node_modules }
if (Test-Path .next) { Remove-Item -Recurse -Force .next }

npm cache verify
npm install
npm run dev
```

If Windows still throws EPERM, close VS Code and all terminals opened inside the project, then run PowerShell as Administrator and repeat the cleanup commands. Windows Defender or a stuck Node process can lock files in `node_modules`.
