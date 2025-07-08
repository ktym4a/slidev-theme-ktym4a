# @ktym4a/slidev-theme-ktym4a

A pastel-colored Slidev theme built with Catppuccin palette, designed for developers who love soft and eye-friendly colors.

[![NPM version](https://img.shields.io/npm/v/@ktym4a/slidev-theme-ktym4a?color=3AB9D4&label=)](https://www.npmjs.com/package/@ktym4a/slidev-theme-ktym4a)

## Live Demo

🎨 [Single Color Pattern Demo](https://slides.ktym4a.me/demo/single) | 🔄 [Rotation Pattern Demo](https://slides.ktym4a.me/demo/rotation)

## Features

- 🎨 **Catppuccin Palette** - Beautiful pastel colors that are easy on the eyes
- 🌗 **Dark Mode** - Optimized for dark environments
- 🎯 **Minimal Design** - Focus on content without distractions
- 🔄 **Color Patterns** - Choose between single color or automatic color rotation
- 🎨 **14 Theme Colors** - All Catppuccin colors available
- 🎭 **Smooth Transitions** - Default fade transition for seamless slide changes

## Screenshots

### Rotation Pattern

[🔄 View Live Demo](https://slides.ktym4a.me/demo/rotation)

<div align="center">
  <img src="https://raw.githubusercontent.com/ktym4a/slidev-theme-ktym4a/main/example-export/rotation/0.png" width="400" alt="Cover slide with rotation pattern">
  <img src="https://raw.githubusercontent.com/ktym4a/slidev-theme-ktym4a/main/example-export/rotation/1.png" width="400" alt="Second slide">
</div>

### Single Pattern

[🎨 View Live Demo](https://slides.ktym4a.me/demo/single)

<div align="center">
  <img src="https://raw.githubusercontent.com/ktym4a/slidev-theme-ktym4a/main/example-export/single/0.png" width="400" alt="Cover slide with single color">
  <img src="https://raw.githubusercontent.com/ktym4a/slidev-theme-ktym4a/main/example-export/single/1.png" width="400" alt="Second slide">
  <img src="https://raw.githubusercontent.com/ktym4a/slidev-theme-ktym4a/main/example-export/single/4.png" width="400" alt="Override example">
</div>

## Install

Add the following to your slide's frontmatter:

```yaml
---
theme: '@ktym4a/slidev-theme-ktym4a'
---
```

## Configuration

### Color Settings

You can customize the theme's color behavior through the frontmatter:

```yaml
---
theme: '@ktym4a/slidev-theme-ktym4a'
themeConfig:
  baseColor: 'green' # Options: rosewater (default), flamingo, pink, mauve, red, maroon, peach, yellow, green, teal, sky, sapphire, blue, lavender
  colorPattern: 'rotation' # Options: 'single' or 'rotation' (default)
---
```

- **`baseColor`**: Sets the starting color for the theme
- **`colorPattern`**:
  - `'single'`: Uses the same color for all slides
  - `'rotation'`: Automatically cycles through all available colors for each slide (default)

You can also override the color for individual slides if you use `single`:

```yaml
---
themeConfig:
  baseColor: 'red'
---
```

## Layouts

This theme provides the following layouts:

### Standard Layouts (with custom styling)

- `default` - Default layout with header and content
- `center` - Centered content layout
- `cover` - Cover page layout
- `section` - Section divider layout
- `iframe-right` - Layout with content on the left and iframe on the right
- `statement` - Centered statement layout for impactful quotes or key messages

All layouts support the theme's color customization and will automatically adapt to your color settings.

## Colors

The theme is built on the Catppuccin color palette. The color scheme is optimized for dark mode.

### Available Colors

All 14 Catppuccin colors are available:

- `rosewater` (default)
- `flamingo`
- `pink`
- `mauve`
- `red`
- `maroon`
- `peach`
- `yellow`
- `green`
- `teal`
- `sky`
- `sapphire`
- `blue`
- `lavender`

## License

[MIT Licensed](https://github.com/ktym4a/slidev-theme-ktym4a/blob/main/LICENSE). Made with ❤️ by [ktym4a](https://github.com/ktym4a).
