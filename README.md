# @ktym4a/slidev-theme-ktym4a

A pastel-colored Slidev theme built with Catppuccin palette, designed for developers who love soft and eye-friendly colors.

[![NPM version](https://img.shields.io/npm/v/@ktym4a/slidev-theme-ktym4a?color=3AB9D4&label=)](https://www.npmjs.com/package/@ktym4a/slidev-theme-ktym4a)

## Features

- 🎨 **Catppuccin Palette** - Beautiful pastel colors that are easy on the eyes
- 🌗 **Dark Mode** - Optimized for dark environments
- 🎯 **Minimal Design** - Focus on content without distractions
- 🔄 **Color Patterns** - Choose between single color or automatic color rotation
- 🎨 **14 Theme Colors** - All Catppuccin colors available

## Screenshots

### Rotation Pattern
<div align="center">
  <img src="https://raw.githubusercontent.com/ktym4a/slidev-theme-ktym4a/main/example-export/rotation/0.png" width="400" alt="Cover slide with rotation pattern">
  <img src="https://raw.githubusercontent.com/ktym4a/slidev-theme-ktym4a/main/example-export/rotation/1.png" width="400" alt="Second slide">
</div>

### Single Pattern
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

This theme provides the standard Slidev layouts with custom styling:

- `default` - Default layout with header and content
- `center` - Centered content layout
- `cover` - Cover page layout
- `section` - Section divider layout
- And all other standard Slidev layouts

### Upcoming Layouts

We're planning to add more custom layouts in future updates.

## Colors

The theme is built on the Catppuccin color palette. The color scheme is optimized for dark mode.

## License

[MIT Licensed](https://github.com/ktym4a/slidev-theme-ktym4a/blob/main/LICENSE). Made with ❤️ by [ktym4a](https://github.com/ktym4a).
