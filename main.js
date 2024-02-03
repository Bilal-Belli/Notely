const { app, BrowserWindow, shell, Menu } = require('electron');
const path = require('path');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    icon: path.join(__dirname, 'icons/logo.ico'),
    webPreferences: {
      nodeIntegration: true
    }
  });

  // Open links externally
  mainWindow.webContents.on('will-navigate', (event, url) => {
    event.preventDefault();
    shell.openExternal(url);
  });

  mainWindow.maximize();
  mainWindow.loadFile('index.html');

  // Custom menu
  const template = [
    {
      label: 'Window',
      submenu: [
        {
          label: 'New',
          click: () => {
            // Create a new window when 'New' is clicked
            const newWindow = new BrowserWindow({
              icon: path.join(__dirname, 'icons/logo.ico'),
              webPreferences: {
                nodeIntegration: true
              }
            });
            newWindow.maximize();
            newWindow.loadFile('index.html');
          },
        },
        {
          label: 'Restart',
          click: () => {
            // Restart the application
            app.relaunch();
            app.quit();
          },
        },
        {
          label: 'Switch Lighting Mode',
          click: toggleTheme,
        },
        {
          label: 'Exit',
          role: 'quit',
        },
      ],
    },
    {
      label: 'Actions',
      submenu: [
        {
          label: 'Cut',
          role: 'cut',
        },
        {
          label: 'Copy',
          role: 'copy',
        },
        {
          label: 'Paste',
          role: 'paste',
        },
      ],
    },
    {
      label: 'Tools',
      submenu: [
        {
          label: 'Ask AI',
          submenu: [
            {
              label: 'ChatGPT',
              click: () => {
                const newWindow = new BrowserWindow({
                  icon: path.join(__dirname, 'icons/logo.ico'),
                  webPreferences: {
                    nodeIntegration: true,
                  },
                });
                newWindow.loadURL('https://chat.openai.com/');
                newWindow.webContents.on('new-window', (event, url) => {
                  event.preventDefault();
                  shell.openExternal(url);
                });
                newWindow.maximize();
              },
            },
            {
              label: 'BardAI',
              click: () => {
                const newWindow = new BrowserWindow({
                  icon: path.join(__dirname, 'icons/logo.ico'),
                  webPreferences: {
                    nodeIntegration: true,
                  },
                });
                newWindow.loadURL('https://bard.google.com/chat');
                newWindow.webContents.on('new-window', (event, url) => {
                  event.preventDefault();
                  shell.openExternal(url);
                });
                newWindow.maximize();
              },
            },
            {
              label: 'CloudAI',
              click: () => {
                const newWindow = new BrowserWindow({
                  icon: path.join(__dirname, 'icons/logo.ico'),
                  webPreferences: {
                    nodeIntegration: true,
                  },
                });
                newWindow.loadURL('https://claude.ai/chats');
                newWindow.webContents.on('new-window', (event, url) => {
                  event.preventDefault();
                  shell.openExternal(url);
                });
                newWindow.maximize();
              },
            },
            {
              label: 'YOU',
              click: () => {
                const newWindow = new BrowserWindow({
                  icon: path.join(__dirname, 'icons/logo.ico'),
                  webPreferences: {
                    nodeIntegration: true,
                  },
                });
                newWindow.loadURL('you.com');
                newWindow.webContents.on('new-window', (event, url) => {
                  event.preventDefault();
                  shell.openExternal(url);
                });
                newWindow.maximize();
              },
            },
          ],
        },
        {
          label: 'Browser',
          submenu: [
            {
              label: 'Google',
              click: () => {
                const newWindow = new BrowserWindow({
                  icon: path.join(__dirname, 'icons/logo.ico'),
                  webPreferences: {
                    nodeIntegration: true,
                  },
                });
                newWindow.loadURL('https://www.google.com/');
                newWindow.webContents.on('new-window', (event, url) => {
                  event.preventDefault();
                  shell.openExternal(url);
                });
                newWindow.maximize();
              },
            },
            {
              label: 'Yandex',
              click: () => {
                const newWindow = new BrowserWindow({
                  icon: path.join(__dirname, 'icons/logo.ico'),
                  webPreferences: {
                    nodeIntegration: true,
                  },
                });
                newWindow.loadURL('https://yandex.com/');
                newWindow.webContents.on('new-window', (event, url) => {
                  event.preventDefault();
                  shell.openExternal(url);
                });
                newWindow.maximize();
              },
            },
            {
              label: 'DuckDuckgo',
              click: () => {
                const newWindow = new BrowserWindow({
                  icon: path.join(__dirname, 'icons/logo.ico'),
                  webPreferences: {
                    nodeIntegration: true,
                  },
                });
                newWindow.loadURL('https://duckduckgo.com/');
                newWindow.webContents.on('new-window', (event, url) => {
                  event.preventDefault();
                  shell.openExternal(url);
                });
                newWindow.maximize();
              },
            },
          ],
        },
        {
          label: 'Draw Diagram',
          submenu: [
            {
              label: 'DrawIO',
              click: () => {
                const newWindow = new BrowserWindow({
                  icon: path.join(__dirname, 'icons/logo.ico'),
                  webPreferences: {
                    nodeIntegration: true,
                  },
                });
                newWindow.loadURL('https://app.diagrams.net/');
                newWindow.webContents.on('new-window', (event, url) => {
                  event.preventDefault();
                  shell.openExternal(url);
                });
                newWindow.maximize();
              },
            },
            {
              label: 'TLdraw',
              click: () => {
                const newWindow = new BrowserWindow({
                  icon: path.join(__dirname, 'icons/logo.ico'),
                  webPreferences: {
                    nodeIntegration: true,
                  },
                });
                newWindow.loadURL('https://tldraw.com/');
                newWindow.webContents.on('new-window', (event, url) => {
                  event.preventDefault();
                  shell.openExternal(url);
                });
                newWindow.maximize();
              },
            },
            {
              label: 'Canva',
              click: () => {
                const newWindow = new BrowserWindow({
                  icon: path.join(__dirname, 'icons/logo.ico'),
                  webPreferences: {
                    nodeIntegration: true,
                  },
                });
                newWindow.loadURL('https://www.canva.com');
                newWindow.webContents.on('new-window', (event, url) => {
                  event.preventDefault();
                  shell.openExternal(url);
                });
                newWindow.maximize();
              },
            },
          ],
        },
        {
          label: 'Google Stuff',
          submenu: [
            {
              label: 'Gmail',
              click: () => {
                const newWindow = new BrowserWindow({
                  icon: path.join(__dirname, 'icons/logo.ico'),
                  webPreferences: {
                    nodeIntegration: true,
                  },
                });
                newWindow.loadURL('https://mail.google.com/');
                newWindow.webContents.on('new-window', (event, url) => {
                  event.preventDefault();
                  shell.openExternal(url);
                });
                newWindow.maximize();
              },
            },
            {
              label: 'Drive',
              click: () => {
                const newWindow = new BrowserWindow({
                  icon: path.join(__dirname, 'icons/logo.ico'),
                  webPreferences: {
                    nodeIntegration: true,
                  },
                });
                newWindow.loadURL('https://drive.google.com/drive/home');
                newWindow.webContents.on('new-window', (event, url) => {
                  event.preventDefault();
                  shell.openExternal(url);
                });
                newWindow.maximize();
              },
            },
            {
              label: 'Docs',
              click: () => {
                const newWindow = new BrowserWindow({
                  icon: path.join(__dirname, 'icons/logo.ico'),
                  webPreferences: {
                    nodeIntegration: true,
                  },
                });
                newWindow.loadURL('docs.google.com');
                newWindow.webContents.on('new-window', (event, url) => {
                  event.preventDefault();
                  shell.openExternal(url);
                });
                newWindow.maximize();
              },
            },
            {
              label: 'Slides',
              click: () => {
                const newWindow = new BrowserWindow({
                  icon: path.join(__dirname, 'icons/logo.ico'),
                  webPreferences: {
                    nodeIntegration: true,
                  },
                });
                newWindow.loadURL('https://docs.google.com/presentation/u/1/');
                newWindow.webContents.on('new-window', (event, url) => {
                  event.preventDefault();
                  shell.openExternal(url);
                });
                newWindow.maximize();
              },
            },
            {
              label: 'Sheet',
              click: () => {
                const newWindow = new BrowserWindow({
                  icon: path.join(__dirname, 'icons/logo.ico'),
                  webPreferences: {
                    nodeIntegration: true,
                  },
                });
                newWindow.loadURL('https://docs.google.com/spreadsheets/u/1/');
                newWindow.webContents.on('new-window', (event, url) => {
                  event.preventDefault();
                  shell.openExternal(url);
                });
                newWindow.maximize();
              },
            },
          ],
        },
      ],
    },
    {
      label: 'About Us',
      click: () => {
        const aboutUsWindow = new BrowserWindow({
          icon: path.join(__dirname, 'icons/logo.ico'),
          webPreferences: {
            nodeIntegration: true,
          },
        });
        aboutUsWindow.loadURL('https://github.com/Bilal-Belli/Notely');
        aboutUsWindow.webContents.on('new-window', (event, url) => {
          event.preventDefault();
          shell.openExternal(url);
        });
        aboutUsWindow.maximize();
      },
    },
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  mainWindow.on('closed', function () {
    mainWindow = null;
  });
}

let isDarkMode = false;
function toggleTheme() {
  isDarkMode = !isDarkMode;
  const themeClass = isDarkMode ? 'dark-mode' : '';
  mainWindow.webContents.executeJavaScript(`document.body.className = '${themeClass}'`);
}

app.whenReady().then(createWindow);

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
  if (mainWindow === null) createWindow();
});