const { app, BrowserWindow, Menu, shell } = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ width: 1200, height: 800, icon: __dirname + 'assets/images/wings.icns' })

  // and load the index.html of the app.
  win.loadFile('index.html')

  // Open the DevTools. 
  // win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
const nativeMenus = [
  {
        label: 'Menu',
            submenu: [
            {
                label: 'About Icarus Dashboard',
                click() { 
                    openAboutWindow()
                } 
            },
            {
                label: 'Version 1.0.0',
                enabled: false
            },
            { type: 'separator' },
            { role: 'services' },
            { type: 'separator' },
            {
                label: 'Icarus Labs',
                click() { 
                    shell.openExternal('https://icaruslabs.io/')
                } 
            }, 
            { type: 'separator' },
            {
                label: 'Support',
                click() { 
                    shell.openExternal('https://icaruslabs.io/contact#support')
                } 
            },
            { type: 'separator' },
            {
                label: 'Quit', 
                click() { 
                    app.quit() 
                },
                accelerator: 'Cmd+Q'
            }
        ]
    },
    {
      label: 'Edit',
      submenu: [
         {
            role: 'undo'
         },
         {
            role: 'redo'
         },
         {
            type: 'separator'
         },
         {
            role: 'cut'
         },
         {
            role: 'copy'
         },
         {
            role: 'paste'
         }
      ]
   },
   
   {
      label: 'View',
      submenu: [
         {
            role: 'reload'
         },
         {
            role: 'toggledevtools'
         },
         {
            type: 'separator'
         },
         {
            role: 'resetzoom'
         },
         {
            role: 'zoomin'
         },
         {
            role: 'zoomout'
         },
         {
            type: 'separator'
         },
         {
            role: 'togglefullscreen'
         }
      ]
   },
   
   {
      role: 'window',
      submenu: [
         {
            role: 'minimize'
         },
         {
            role: 'close'
         }
      ]
   },
   
   {
      role: 'help',
      submenu: [
         {
            label: 'Learn More'
         }
      ]
   }
]

const menu = Menu.buildFromTemplate(nativeMenus)
Menu.setApplicationMenu(menu)

var newWindow = null

function openAboutWindow() {
  if (newWindow) {
    newWindow.focus()
    return
  }

  newWindow = new BrowserWindow({
    height: 185,
    resizable: false,
    width: 270,
    title: '',
    minimizable: false,
    fullscreenable: false
  })

  newWindow.loadURL('file://' + __dirname + '/pages/about.html')

  newWindow.on('closed', function() {
    newWindow = null
  })
}