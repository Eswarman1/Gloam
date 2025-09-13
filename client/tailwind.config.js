/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary Brand Colors - Deep Blue
        primary: {
          50: '#eff6ff',   // Very light blue
          100: '#dbeafe',  // Light blue
          200: '#bfdbfe',  // Lighter blue
          300: '#93c5fd',  // Light medium blue
          400: '#60a5fa',  // Medium blue
          500: '#0057B8',  // Main blue
          600: '#004299',  // Darker blue
          700: '#003380',  // Dark blue
          800: '#002966',  // Very dark blue
          900: '#001f4d',  // Darkest blue
        },

        // Secondary Colors - Teal
        secondary: {
          50: '#f0fdfa',   // Very light teal
          100: '#ccfbf1',  // Light teal
          200: '#99f6e4',  // Lighter teal
          300: '#5eead4',  // Light medium teal
          400: '#2dd4bf',  // Medium teal
          500: '#00BFA6',  // Main teal
          600: '#009688',  // Darker teal
          700: '#00796b',  // Dark teal
          800: '#004d40',  // Very dark teal
          900: '#00251a',  // Darkest teal
        },

        // Accent Colors - Gold for Dark Mode
        accent: {
          50: '#fffbeb',   // Very light gold
          100: '#fef3c7',  // Light gold
          200: '#fde68a',  // Lighter gold
          300: '#fcd34d',  // Light medium gold
          400: '#fbbf24',  // Medium gold
          500: '#FFD700',  // Main gold
          600: '#d97706',  // Darker gold
          700: '#b45309',  // Dark gold
          800: '#92400e',  // Very dark gold
          900: '#78350f',  // Darkest gold
        },

        // Neutral Colors - Clean and Balanced
        neutral: {
          50: '#F9FAFB',   // Very light gray - Background
          100: '#FFFFFF',  // White - Surface
          200: '#E5E7EB',  // Light gray - Border
          300: '#d4d4d4',  // Light medium gray
          400: '#a3a3a3',  // Medium gray
          500: '#737373',  // Main gray
          600: '#525252',  // Darker gray
          700: '#374151',  // Dark gray - Border dark
          800: '#262626',  // Very dark gray
          900: '#171717',  // Darkest gray
        },

        // Success Colors - Soft Green
        success: {
          50: '#f0fdf4',   // Very light green
          100: '#dcfce7',  // Light green
          200: '#bbf7d0',  // Lighter green
          300: '#86efac',  // Light medium green
          400: '#4ade80',  // Medium green
          500: '#22c55e',  // Main green
          600: '#16a34a',  // Darker green
          700: '#15803d',  // Dark green
          800: '#166534',  // Very dark green
          900: '#14532d',  // Darkest green
        },

        // Warning Colors - Soft Yellow
        warning: {
          50: '#fffbeb',   // Very light yellow
          100: '#fef3c7',  // Light yellow
          200: '#fde68a',  // Lighter yellow
          300: '#fcd34d',  // Light medium yellow
          400: '#fbbf24',  // Medium yellow
          500: '#f59e0b',  // Main yellow
          600: '#d97706',  // Darker yellow
          700: '#b45309',  // Dark yellow
          800: '#92400e',  // Very dark yellow
          900: '#78350f',  // Darkest yellow
        },

        // Error Colors - Soft Red
        error: {
          50: '#fef2f2',   // Very light red
          100: '#fee2e2',  // Light red
          200: '#fecaca',  // Lighter red
          300: '#fca5a5',  // Light medium red
          400: '#f87171',  // Medium red
          500: '#ef4444',  // Main red
          600: '#dc2626',  // Darker red
          700: '#b91c1c',  // Dark red
          800: '#991b1b',  // Very dark red
          900: '#7f1d1d',  // Darkest red
        },

        // Info Colors - Soft Blue
        info: {
          50: '#eff6ff',   // Very light blue
          100: '#dbeafe',  // Light blue
          200: '#bfdbfe',  // Lighter blue
          300: '#93c5fd',  // Light medium blue
          400: '#60a5fa',  // Medium blue
          500: '#3b82f6',  // Main blue
          600: '#2563eb',  // Darker blue
          700: '#1d4ed8',  // Dark blue
          800: '#1e40af',  // Very dark blue
          900: '#1e3a8a',  // Darkest blue
        },

        // Background Colors for Light/Dark Modes
        background: {
          light: '#F9FAFB',
          dark: '#111827',
        },

        // Surface Colors
        surface: {
          light: '#FFFFFF',
          dark: '#1F2937',
        },

        // Text Colors
        text: {
          primary: {
            light: '#1F2937',
            dark: '#F9FAFB',
          },
          secondary: {
            light: '#6B7280',
            dark: '#9CA3AF',
          },
          tertiary: {
            light: '#9CA3AF',
            dark: '#6B7280',
          }
        }
      },

      // Custom Shadows for Sweet Appearance
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'sweet': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },

      // Border Radius for Rounded Corners
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
