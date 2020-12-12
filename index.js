const { app, BrowserWindow } = require('electron')

if (require('electron-squirrel-startup')) return app.quit()

function createWindow () {
  const win = new BrowserWindow({
    width: 500,
    height: 500,
    show: false,
    webPreferences: { devTools: false }
  })
  win.once('ready-to-show', win.show)
  win.removeMenu()
  win.loadURL('https://www.familiars.io/')
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'electron') app.quit()
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})
