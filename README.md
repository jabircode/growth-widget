#  Widget - Decoupled Spacing Configuration

A customizable chat widget with independently configurable spacing for all components. Perfect for integrating into any website without layout conflicts.

## 🚀 Features

- **Decoupled Component Spacing** - Independently configure spacing for container, button, welcome message, and chatbox
- **Responsive Design** - Separate configurations for mobile and desktop breakpoints
- **Easy Configuration** - Simple JavaScript config file, no CSS knowledge required
- **CSS Variable Support** - Advanced customization via CSS variables
- **Zero Visual Regression** - Maintains original appearance by default
- **Fully Compatible** - Works alongside existing widgets without conflicts

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Configuration](#configuration)
- [Customization Examples](#customization-examples)
- [CSS Variable Reference](#css-variable-reference)
- [Architecture](#architecture)
- [Browser Support](#browser-support)
- [Contributing](#contributing)

## 🎯 Quick Start

### 1. Include the Widget

Add these scripts to your HTML:

```html
<!-- Optional: Inline Spacing Configuration -->
<script>
  window.SleekFlowWidgetSpacingConfig = {
    container: {
      mobile: { bottom: '100px', right: '0px' },
      desktop: { bottom: '100px', right: '32px' }
    },
    channels: {
      whatsapp: {
        phoneNumber: '+1234567890',
        displayName: 'WhatsApp',
        message: "Hi! I'm interested in your services",
        qrCode: {
          foregroundColor: '25D366',
          backgroundColor: 'FFFFFF',
          size: 256
        }
      }
    }
  };
</script>

<!-- Widget Script -->
<script
  src="https://jabircode.github.io/growth-widget/widget.js"
  data-companyid="your-company-id"
  data-location="eastasia"
  data-widgetid="your-widget-id"
  type="module"
  async>
</script>
```

### 2. Customize Spacing (Optional)

Edit `config.js` to adjust spacing:

```javascript
window.WidgetSpacingConfig = {
  container: {
    mobile: { bottom: '8px', right: '0px' },
    desktop: { bottom: '8px', right: '32px' }
  },
  button: {
    mobile: { bottom: '16px', right: '16px' },
    desktop: { bottom: '0px', right: '0px' }
  }
  // ... more config
};
```

## ⚙️ Configuration

### Configuration Structure

The `config.js` file exports a global configuration object with the following structure:

```javascript
window.WidgetSpacingConfig = {
  // Main widget container positioning
  container: {
    mobile: {
      bottom: '8px',    // Distance from bottom edge
      right: '0px'      // Distance from right edge
    },
    desktop: {
      bottom: '8px',    // Desktop (≥640px) bottom spacing
      right: '32px'     // Desktop (≥640px) right spacing
    }
  },

  // Toggle button positioning (relative to container)
  button: {
    mobile: {
      bottom: '16px',
      right: '16px'
    },
    desktop: {
      bottom: '0px',
      right: '0px'
    }
  },

  // Welcome message popup positioning
  welcome: {
    mobile: {
      bottom: '84px',
      right: '16px'
    },
    desktop: {
      bottom: '68px',
      right: '0px'
    }
  },

  // Chatbox dimensions and margins
  chatbox: {
    marginVertical: '32px',  // Vertical margin for height calculation
    marginOffset: '56px'     // Additional height offset
  }
};
```

### Supported CSS Units

All spacing values support standard CSS units:
- `px` - Pixels (e.g., `'16px'`)
- `rem` - Root em units (e.g., `'1rem'`)
- `em` - Em units (e.g., `'1.5em'`)
- `%` - Percentage (e.g., `'50%'`)
- `vh`/`vw` - Viewport units (e.g., `'10vh'`)
- `auto` - Automatic positioning

## 💡 Customization Examples

### Example 1: Position Widget Top-Right

```javascript
container: {
  desktop: {
    top: '20px',     // Use top instead of bottom
    bottom: 'auto',  // Disable bottom positioning
    right: '20px'
  }
}
```

### Example 2: Stack Multiple Widgets

```javascript
// First widget (bottom position)
container: {
  desktop: { bottom: '8px', right: '32px' }
}

// Second widget (positioned above)
container: {
  desktop: { bottom: '120px', right: '32px' }
}
```

### Example 3: Increase Mobile Spacing

```javascript
container: {
  mobile: {
    bottom: '16px',  // More space from bottom
    right: '16px'    // More space from right
  }
},
button: {
  mobile: {
    bottom: '24px',  // Larger button offset
    right: '24px'
  }
}
```

### Example 4: Center Welcome Message

```javascript
welcome: {
  mobile: {
    bottom: '100px',
    left: '50%',
    right: 'auto',
    transform: 'translateX(-50%)'
  }
}
```

### Example 5: Position Widget Bottom-Left

```javascript
container: {
  desktop: {
    bottom: '20px',
    left: '20px',
    right: 'auto'
  }
}
```

## 🎨 CSS Variable Reference

For advanced customization, you can override CSS variables directly:

### Available CSS Variables

```css
/* Widget Container */
--sf-widget-container-bottom-mobile: 8px;
--sf-widget-container-bottom-desktop: 8px;
--sf-widget-container-right-mobile: 0px;
--sf-widget-container-right-desktop: 32px;

/* Button */
--sf-widget-button-bottom-mobile: 16px;
--sf-widget-button-bottom-desktop: 0px;
--sf-widget-button-right-mobile: 16px;
--sf-widget-button-right-desktop: 0px;

/* Welcome Message */
--sf-widget-welcome-bottom-mobile: 84px;
--sf-widget-welcome-bottom-desktop: 68px;
--sf-widget-welcome-right-mobile: 16px;
--sf-widget-welcome-right-desktop: 0px;

/* Chatbox */
--sf-widget-chatbox-margin-vertical: 32px;
--sf-widget-chatbox-margin-offset: 56px;
```

### Using CSS Variables

Add to your stylesheet or `<style>` tag:

```css
:root {
  /* Override specific variables */
  --sf-widget-container-right-desktop: 50px;
  --sf-widget-button-bottom-mobile: 24px;
}
```

## 🏗️ Architecture

### Component Structure

```
Widget Container (#-widget-app)
├── Chatbox Window (conditionally rendered)
├── Toggle Button
└── Welcome Message Popup (conditionally rendered)

Media Carousel (overlay)
```

### Spacing System

1. **CSS Variables** - Defined in `widget.css` with default values
2. **Config.js** - Optional JavaScript configuration overrides
3. **Runtime Injection** - Config values injected as inline styles
4. **CSS Classes** - Responsive classes apply spacing from variables

### File Structure

```
growth-widget/
├── widget.js           # Main widget bundle (compiled)
├── widget.css          # Widget styles with spacing system
├── config.js           # Spacing configuration (optional)
├── index.html          # Demo/test page
└── README.md           # This file
```

## 🌐 Browser Support

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Responsive Breakpoints

- **Mobile**: `< 640px` - Uses mobile spacing config
- **Desktop**: `≥ 640px` - Uses desktop spacing config

## 🔧 Advanced Usage

### Disable Configuration

To revert to CSS-only defaults:

```javascript
// Option 1: Set config to null
window.WidgetSpacingConfig = null;

// Option 2: Remove config.js script from HTML
```

### Conditional Configuration

```javascript
// Apply different spacing based on page
const isHomePage = window.location.pathname === '/';

window.WidgetSpacingConfig = {
  container: {
    desktop: {
      bottom: '8px',
      right: isHomePage ? '50px' : '32px'  // More space on homepage
    }
  }
};
```

### Dynamic Updates

```javascript
// Update spacing after widget loads
window.WidgetSpacingConfig.container.desktop.right = '100px';
// Note: Requires widget refresh to take effect
```

## 📝 Verification

### Visual Testing

1. Open `index.html` in a browser
2. Verify widget appears in the configured position
3. Resize viewport across 640px breakpoint
4. Confirm spacing adjusts correctly

### Browser DevTools Testing

```javascript
// Inspect computed styles
const container = document.getElementById('-widget-app');
getComputedStyle(container).bottom;  // Should match config
getComputedStyle(container).right;   // Should match config
```

## 🚀 Deployment via GitHub Pages

This widget is hosted on GitHub Pages for free, automatic CDN distribution.

### Hosted URL

```
https://jabircode.github.io/growth-widget/
```

### Files Available

- `widget.js` - Main widget bundle
- `widget.css` - Styles
- `config.js` - Configuration template (reference only)
- `landing-page.js` - Landing page component
- `chat-window.js` - Chat interface
- `channel-detail.js` - Channel details

### Deployment Process

1. **Make changes to widget code**
2. **Commit and push to GitHub:**
   ```bash
   git add .
   git commit -m "Update widget"
   git push origin main
   ```
3. **GitHub Pages automatically deploys** (1-2 minutes)

### Enable GitHub Pages (One-Time Setup)

1. Go to [Repository Settings](https://github.com/jabircode/growth-widget/settings/pages)
2. Under "Source", select: **Deploy from a branch**
3. Branch: **main**
4. Folder: **/ (root)**
5. Click **Save**

Widget will be available at:
```
https://jabircode.github.io/growth-widget/widget.js
```

### Verify Deployment

Test your endpoints:
```bash
# Test widget.js
curl https://jabircode.github.io/growth-widget/widget.js -I
# Should return: 200 OK

# Test widget.css
curl https://jabircode.github.io/growth-widget/widget.css -I
# Should return: 200 OK
```

### Benefits

✅ **Free forever** - No costs
✅ **Auto-deploy** - Push to deploy
✅ **Global CDN** - Fast worldwide
✅ **CORS enabled** - Works everywhere
✅ **HTTPS included** - Secure by default

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

### Development Setup

```bash
# Clone repository
git clone https://github.com/jabircode/growth-widget.git
cd growth-widget
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🐛 Troubleshooting

### Widget not appearing?
- Check browser console for errors
- Verify `data-companyid` and `data-widgetid` are correct
- Ensure `config.js` loads before `widget.js`

### Spacing not applying?
- Verify `window.WidgetSpacingConfig` exists in console
- Check CSS variable values in DevTools
- Ensure values include units (e.g., `'16px'` not `16`)

### Overlapping with other elements?
- Adjust container `bottom` and `right` values
- Use `z-index` if needed (default is `9000`)
- Check for CSS conflicts with existing styles

## 📧 Support

For issues and questions:
- Open an issue on GitHub
- Contact: support@.io
- Documentation: https://docs..io

---

**Made with ❤️ by the  Team**
