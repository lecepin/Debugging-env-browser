const { app, BrowserWindow, session } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      webSecurity: false,
    },
  });

  win.loadURL("https://github.com/lecepin");
  win.webContents.openDevTools();
}

function disableSamesiteCookies(filter = ["*://*/*"]) {
  session.defaultSession.webRequest.onHeadersReceived(
    { urls: filter },
    (details, callback) => {
      const newCookies = [];

      details?.responseHeaders?.["set-cookie"]?.map((item) =>
        newCookies.push(item.split("; ")[0] + "; Secure; SameSite=None")
      );
      details.responseHeaders["set-cookie"] = cookies;

      callback({ cancel: false, responseHeaders: details.responseHeaders });
    }
  );
}

app.whenReady().then(() => {
  createWindow();
  disableSamesiteCookies();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
