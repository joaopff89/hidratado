const {app, Menu, Tray, Notification} = require('electron');
const path = require('path');
const messages = require('./messages');

let tray = undefined;

app.dock.hide();

app.on('ready', () => {
  createTray();
});

app.on('window-all-closed', () => {
  app.quit();
});

const createTray = () => {
  tray = new Tray(path.join(__dirname, 'assets/dropTemplate.png'));
  const contextMenu = Menu.buildFromTemplate([
    { label: 'Sobre', 
      click () {
        require('electron').shell.openExternalSync('https://github.com/xxgicoxx/hidratado')
      }
    },
    { type: 'separator' },
    { label: 'Sair', 
      click () {
        app.quit();
      }
    }
  ]);

  tray.setToolTip("Se hidrate");
  tray.setContextMenu(contextMenu);
}

const sendNotification = () => {
  let notification = new Notification({
    title: 'Se hidrate', 
    body: (messages.get(Math.floor(Math.random() * 11)))
  });

  notification.show();
}

const time = 600000;
setInterval(sendNotification, time);