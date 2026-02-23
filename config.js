/**
 * SleekFlow Widget Spacing Configuration
 *
 * Customize the spacing for different components of the widget.
 * All values should be valid CSS units (px, rem, em, %, etc.)
 *
 * To disable spacing customization, set the entire config to null or remove this file.
 */
window.SleekFlowWidgetSpacingConfig = {
  /**
   * Widget Container Spacing
   * Controls the position of the main widget container
   */
  container: {
    mobile: {
      bottom: '100px',    // Distance from bottom edge on mobile
      right: '0px',     // Distance from right edge on mobile
    },
    desktop: {
      bottom: '100px',    // Distance from bottom edge on desktop (≥640px)
      right: '32px',    // Distance from right edge on desktop (≥640px)
    }
  },

  /**
   * Widget Button Spacing
   * Controls the position of the toggle button (relative to container)
   */
  button: {
    mobile: {
      bottom: '16px',   // Distance from bottom on mobile
      right: '16px',    // Distance from right on mobile
    },
    desktop: {
      bottom: '0px',    // Distance from bottom on desktop (≥640px)
      right: '0px',     // Distance from right on desktop (≥640px)
    }
  },

  /**
   * Welcome Message Spacing
   * Controls the position of the welcome message popup
   */
  welcome: {
    mobile: {
      bottom: '84px',   // Distance from bottom on mobile
      right: '16px',    // Distance from right on mobile
    },
    desktop: {
      bottom: '68px',   // Distance from bottom on desktop (≥640px)
      right: '0px',     // Distance from right on desktop (≥640px)
    }
  },

  /**
   * Chatbox Spacing
   * Controls the chatbox dimensions and margins
   */
  chatbox: {
    marginVertical: '32px',  // Vertical margin for chatbox height calculation
    marginOffset: '56px',    // Additional offset for chatbox height
  }
};

/**
 * Example Configurations:
 *
 * 1. Move widget to bottom-left on desktop:
 * container: {
 *   desktop: {
 *     bottom: '20px',
 *     right: 'auto',
 *     left: '20px'    // Note: You'll need to add left positioning in CSS
 *   }
 * }
 *
 * 2. Increase all mobile spacing:
 * container: {
 *   mobile: {
 *     bottom: '16px',
 *     right: '16px'
 *   }
 * },
 * button: {
 *   mobile: {
 *     bottom: '24px',
 *     right: '24px'
 *   }
 * }
 *
 * 3. Center welcome message:
 * welcome: {
 *   mobile: {
 *     bottom: '100px',
 *     right: '50%',
 *     transform: 'translateX(50%)'
 *   }
 * }
 */
