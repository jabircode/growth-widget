/**
 * SleekFlow Widget Configuration Example
 *
 * Copy this file to config.js (or paste the script inline in your HTML) and
 * customise the values. All spacing values accept any valid CSS unit.
 *
 * Quick start — paste this into your HTML before the widget script:
 *
 *   <script>
 *     window.SleekFlowWidgetSpacingConfig = { ... };
 *   </script>
 *   <script src="https://jabircode.github.io/growth-widget/widget.js"
 *     data-companyid="YOUR_COMPANY_ID"
 *     data-location="eastasia"
 *     data-widgetid="YOUR_WIDGET_ID"
 *     type="module" async>
 *   </script>
 */
window.SleekFlowWidgetSpacingConfig = {

  // ─── Container ───────────────────────────────────────────────────────────────
  // Position of the outermost widget wrapper (fixed, bottom-right by default)
  container: {
    mobile:  { bottom: '100px', right: '0px'  },
    desktop: { bottom: '100px', right: '32px' },
  },

  // ─── Button ──────────────────────────────────────────────────────────────────
  // Position of the toggle button (relative to the container)
  // `size` controls the diameter of the circular button (default: 56px)
  button: {
    mobile:  { bottom: '16px', right: '16px' },
    desktop: { bottom: '0px',  right: '0px'  },
    size: '56px',
  },

  // ─── Welcome Message ─────────────────────────────────────────────────────────
  // Position of the welcome bubble that appears next to the button
  // `width` controls the bubble width (default: 260px)
  welcome: {
    mobile:  { bottom: '84px', right: '16px' },
    desktop: { bottom: '68px', right: '0px'  },
    width: '260px',
  },

  // ─── Chatbox ─────────────────────────────────────────────────────────────────
  // `width` / `height` apply on desktop only (≥640px).
  // On mobile the chatbox is always full-screen.
  chatbox: {
    marginVertical: '32px', // vertical breathing room for height calculation
    marginOffset:   '56px', // additional height offset
    width:  '420px',        // desktop width  (default: 420px)
    height: '680px',        // desktop height (default: 680px)
  },

  // ─── Channels ────────────────────────────────────────────────────────────────
  // Override the messaging channels shown in the widget.
  // Remove any channel block to hide that channel.
  // Set a channel to `null` to explicitly disable it.
  channels: {
    whatsapp: {
      phoneNumber: '+1234567890',       // include country code
      displayName: 'WhatsApp Support',
      message: "Hi! I'm interested in your services", // pre-filled message (optional)
      qrCode: {
        foregroundColor: '25D366',      // hex without #
        backgroundColor: 'FFFFFF',
        size: 256,
      },
    },
    telegram: {
      username: 'yourusername',         // or provide `deeplink`
      deeplink: null,                   // e.g. 'https://t.me/yourusername'
      displayName: 'Telegram',
      message: null,
      qrCode: {
        foregroundColor: '0088CC',
        backgroundColor: 'FFFFFF',
        size: 256,
      },
    },
    facebook: {
      pageId: null,                     // Facebook Page ID
      displayName: 'Facebook Messenger',
      message: null,
      qrCode: {
        foregroundColor: '0084FF',
        backgroundColor: 'FFFFFF',
        size: 256,
      },
    },
    instagram: {
      username: null,                   // Instagram username
      displayName: 'Instagram',
      qrCode: {
        foregroundColor: 'E4405F',
        backgroundColor: 'FFFFFF',
        size: 256,
      },
    },
    // Disable a channel by setting it to null:
    // telegram: null,
  },
};
