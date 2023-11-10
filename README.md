### Cookie Samesite 问题

- https://developers.google.com/search/blog/2020/01/get-ready-for-new-samesitenone-secure?hl=zh-cn
- https://www.chromium.org/updates/same-site/
- https://github.com/GoogleChromeLabs/samesite-examples
- https://releases.electronjs.org/releases/stable?version=14

Chrome 94 版本不再放行，无法再携带 Cookies，也就是 Electron v14 之后的版本无法通过 `webSecurity: false` 来禁用这些问题。

新版本(v27)，通过复写 `onHeadersReceived` 实现。
