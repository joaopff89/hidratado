const {app, Menu, Tray, Notification} = require('electron');
const electronStore = require('electron-store');
const store = new electronStore();
const path = require('path');
const messages = require('./messages');

let tray = undefined;

app.dock.hide();

app.setLoginItemSettings({
  openAtLogin: true
});

app.on('ready', () => {
  createTray();
});

app.on('window-all-closed', () => {
  app.quit();
});

const createTray = () => {
  tray = new Tray(path.join(__dirname, 'assets/waterTemplate.png'));
  const contextMenu = Menu.buildFromTemplate([
    { label: '10 Minutos', type: 'radio', checked: (store.get('notification-time', 1) === 1),
      click () {
        store.set('notification-time', 1);
      }
    },
    { label: '20 Minutos', type: 'radio', checked: (store.get('notification-time', 1) === 2),
      click () {
        store.set('notification-time', 2);
      }
    },
    { label: '30 Minutos', type: 'radio', checked: (store.get('notification-time', 1) === 3),
      click () {
        store.set('notification-time', 3);
      }
    },
    { label: '40 Minutos', type: 'radio', checked: (store.get('notification-time', 1) === 4),
      click () {
        store.set('notification-time', 4);
      }
    },
    { label: '50 Minutos', type: 'radio', checked: (store.get('notification-time', 1) === 5),
      click () {
        store.set('notification-time', 5);
      }
    },
    { label: '1 Hora', type: 'radio', checked: (store.get('notification-time', 1) === 6),
      click () {
        store.set('notification-time', 6);
      }
    },
    { label: '2 Horas', type: 'radio', checked: (store.get('notification-time', 1) === 12),
      click () {
        store.set('notification-time', 12);
      }
    },
    { label: '3 Horas', type: 'radio', checked: (store.get('notification-time', 1) === 18),
      click () {
        store.set('notification-time', 18);
      }
    },
    { type: 'separator' },
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
    body: (messages.get(Math.floor(Math.random() * 9)))
  });

  notification.show();
}

const time = 600000 * (store.get('notification-time', 1));
setInterval(sendNotification, time);