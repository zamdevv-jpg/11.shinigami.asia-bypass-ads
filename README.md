# ⚡ SHINIGAMI // INSTANT SKIP

**A lightweight experimental userscript for Shinigami chapter timer interception.**

<p align="center">

  **DEVELOPED BY [zams.dev](https://github.com/zamdevv-jpg)**

  `JavaScript` `Tampermonkey` `Userscript`

</p>

---

## ✨ Features

- ⚡ Intercepts the configured 8010ms JavaScript timer.
- 🎨 Stylish developer console interface.
- 🖥️ Real-time timer interception logs.
- 🔧 Lightweight userscript with no external dependencies.
- 🧩 Compatible with Tampermonkey.

## 📸 Console Preview

```text
[SHINIGAMI] BOOT       Initializing system...
[SHINIGAMI] CORE       JavaScript runtime detected
[SHINIGAMI] HOOK       Preparing timer interception

[SHINIGAMI] SYSTEM ONLINE

[SHINIGAMI BYPASS] SUCCES BYPASS ADS
[SHINIGAMI BYPASS] Author : zams.dev
```

*The bypass messages appear when the configured timer is intercepted.*

## 📥 Installation

1. Install the Tampermonkey browser extension.
2. Open the Tampermonkey dashboard.
3. Create a new userscript.
4. Copy the contents of `shinigami.user.js`.
5. Paste the code into the editor.
6. Save the script.
7. Open a supported Shinigami chapter page.

## ⚙️ Configuration

The timer target can be configured inside the script:

```javascript
const CONFIG = {
    TARGET_DELAY: 8010,
    DEBUG: true
};
```

| Option | Description |
|---|---|
| `TARGET_DELAY` | Timer duration to intercept, in milliseconds |
| `DEBUG` | Enables or disables diagnostic logging |

## 📂 Project Structure

```text
SHINIGAMI-INSTANT-SKIP/
│
├── shinigami.user.js
└── README.md
└── LICENSE
```

## ⚠️ Disclaimer

- This is an experimental, community-made userscript.
- This project is not affiliated with or endorsed by Shinigami.
- Website updates may cause the script to stop working.
- Timer interception does not guarantee that all advertisement mechanisms are bypassed.
- Use responsibly and respect the website's terms of service.

## 👨‍💻 Developer

**zams.dev**

Independent developer | JavaScript enthusiast

---

<p align="center">

  **SHINIGAMI // INSTANT SKIP**

  *Built with curiosity. Crafted with code.*

</p>
