const { app, BrowserWindow } = require('electron');
const path = require('path');

const iconExtension = 
    process.platform === 'win32'  ? 'ico' 
  : process.platform === 'darwin' ? 'icns'
  : 'png';

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, 'assets', `AppIcon.${iconExtension}`),
    // webPreferences: {
    //   preload: path.join(__dirname, 'preload.js')
    // }
  });

  win.loadFile('index.html');
}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  })
});

app.on('window-all-closed', () => {
  // if (process.platform !== 'darwin') {
    app.quit()
  // }
});
