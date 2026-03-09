# SleekFlow Growth Widget

A hosted chat widget with fully configurable spacing, sizing, and channel settings. Drop two script tags into any HTML page and you're live.

## Quick Start

Paste this into your HTML **before** `</body>`:

```html
<!-- Optional: widget configuration -->
<script>
window.SleekFlowWidgetSpacingConfig = {
  channels: {
    whatsapp: {
      phoneNumber: '+1234567890',
      displayName: 'WhatsApp Support',
      message: "Hi! I'm interested in your services",
    }
  }
};
</script>

<!-- Widget -->
<script
  src="https://jabircode.github.io/growth-widget/widget.js"
  data-companyid="YOUR_COMPANY_ID"
  data-location="eastasia"
  data-widgetid="YOUR_WIDGET_ID"
  type="module"
  async>
</script>
```

That's it. The widget loads from GitHub Pages — no npm, no build step.

---

## Configuration

All configuration lives in a single global object set **before** the widget script loads.

```html
<script>
window.SleekFlowWidgetSpacingConfig = { /* ... */ };
</script>
```

See [`config.example.js`](config.example.js) for the full annotated reference. Below is a summary of every option.

### Container

Position of the outermost widget wrapper (fixed, bottom-right by default).

```js
container: {
  mobile:  { bottom: '100px', right: '0px'  },
  desktop: { bottom: '100px', right: '32px' },
}
```

### Button

Position and size of the circular toggle button.

```js
button: {
  mobile:  { bottom: '16px', right: '16px' },
  desktop: { bottom: '0px',  right: '0px'  },
  size: '56px',   // diameter — icon scales proportionally (default: 56px)
}
```

### Welcome Message

Position and width of the bubble that appears next to the button.

```js
welcome: {
  mobile:  { bottom: '84px', right: '16px' },
  desktop: { bottom: '68px', right: '0px'  },
  width: '260px', // default: 260px
}
```

### Chatbox

Desktop dimensions and height margins. On mobile the chatbox is always full-screen.

```js
chatbox: {
  marginVertical: '32px', // breathing room for max-height calculation
  marginOffset:   '56px', // additional height offset
  width:  '420px',        // desktop width  (default: 420px)
  height: '680px',        // desktop height (default: 680px)
}
```

### Channels

Configure which messaging channels appear in the widget. Omit a channel block to hide it, or set it to `null` to disable it explicitly.

```js
channels: {
  whatsapp: {
    phoneNumber: '+1234567890',    // include country code
    displayName: 'WhatsApp Support',
    message: 'Hi!',               // pre-filled message (optional)
    qrCode: {
      foregroundColor: '25D366',  // hex without #
      backgroundColor: 'FFFFFF',
      size: 256,
    },
  },
  telegram: {
    username: 'yourusername',
    deeplink: null,               // or full URL e.g. 'https://t.me/user'
    displayName: 'Telegram',
    message: null,
    qrCode: { foregroundColor: '0088CC', backgroundColor: 'FFFFFF', size: 256 },
  },
  facebook: {
    pageId: null,
    displayName: 'Facebook Messenger',
    message: null,
    qrCode: { foregroundColor: '0084FF', backgroundColor: 'FFFFFF', size: 256 },
  },
  instagram: {
    username: null,
    displayName: 'Instagram',
    qrCode: { foregroundColor: 'E4405F', backgroundColor: 'FFFFFF', size: 256 },
  },
  // telegram: null,  // disable a channel
}
```

---

## Responsive Breakpoints

| Breakpoint | Width    | Chatbox         |
|------------|----------|-----------------|
| Mobile     | < 640px  | Full-screen     |
| Desktop    | ≥ 640px  | Configurable    |

---

## CSS Variable Reference

For advanced overrides you can set these CSS variables directly on your page:

```css
/* Container position */
--sf-widget-container-bottom-mobile
--sf-widget-container-bottom-desktop
--sf-widget-container-right-mobile
--sf-widget-container-right-desktop

/* Button position & size */
--sf-widget-button-bottom-mobile
--sf-widget-button-bottom-desktop
--sf-widget-button-right-mobile
--sf-widget-button-right-desktop
--sf-widget-button-size          /* diameter */
--sf-widget-button-icon-size     /* icon inside button (auto: button-size × 0.5) */

/* Welcome message */
--sf-widget-welcome-bottom-mobile
--sf-widget-welcome-bottom-desktop
--sf-widget-welcome-right-mobile
--sf-widget-welcome-right-desktop
--sf-widget-welcome-width

/* Chatbox */
--sf-widget-chatbox-margin-vertical
--sf-widget-chatbox-margin-offset
--sf-widget-chatbox-width-desktop
--sf-widget-chatbox-height-desktop
```

---

## File Structure

```
growth-widget/
├── widget.js              # Main widget bundle
├── widget.css             # Styles & CSS variable defaults
├── config.example.js      # Annotated configuration reference
├── landing-page.js        # Landing page component (lazy-loaded)
├── chat-window.js         # Chat interface component (lazy-loaded)
├── channel-detail.js      # Channel detail component (lazy-loaded)
└── README.md
```

---

## Deployment

The widget is served via **GitHub Pages** — no server required.

| File | URL |
|------|-----|
| `widget.js` | `https://jabircode.github.io/growth-widget/widget.js` |
| `widget.css` | `https://jabircode.github.io/growth-widget/widget.css` |

Push to `main` and GitHub Pages deploys automatically within ~60 seconds.

### First-time GitHub Pages setup

1. Go to **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: **main**, folder: **/ (root)**
4. Click **Save**

---

## Troubleshooting

**Widget not appearing**
- Check the browser console for errors
- Confirm `data-companyid` and `data-widgetid` are correct

**Spacing / size not applying**
- Make sure the config script runs **before** `widget.js`
- All values must include a unit: `'16px'` not `16`
- Inspect `#sleekflow-widget-app` in DevTools → check inline CSS variables

**Overlapping other elements**
- Adjust `container.bottom` / `container.right`
- The widget z-index is `9000` by default
