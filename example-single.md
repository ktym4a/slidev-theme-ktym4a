---
theme: ./
favicon: '/assets/favicon.svg'
themeConfig:
  baseColor: 'sapphire'
  colorPattern: 'single'
---

# Single Pattern Demo

This demo shows the single color pattern - all slides use the same color

<div class="pt-12">
  <span @click="$slidev.nav.next" class="w-full px-2 py-1 rounded cursor-pointer" flex="~ justify-center items-center gap-2" hover="bg-white bg-opacity-10">
    Press Space for next page <div class="i-carbon:arrow-right inline-block"/>
  </span>
</div>

---

# How Single Pattern Works

The `single` pattern uses the same color theme across all slides for a consistent look.

## Configuration

```yaml
themeConfig:
  baseColor: 'sapphire' # Color for all slides
  colorPattern: 'single' # Enable single color mode
```

## Features

- All slides use the same `baseColor`
- Creates a cohesive, professional appearance
- Perfect for corporate presentations
- Individual slides can still override the color

---

# Consistent Color Theme

Notice that this slide also uses the **sapphire** color theme.

This creates:

- Visual consistency throughout the presentation
- A professional, unified appearance
- Easy brand color alignment
- Less visual distraction

---

# Override Individual Slides

You can still override colors for specific slides when using single pattern:

```yaml
---
themeConfig:
  baseColor: 'pink'
---
# This slide will be pink!
```

---
themeConfig:
  baseColor: 'pink'
---

# Special Pink Slide

This slide demonstrates the override!

Notice how this slide uses pink while the rest of the presentation uses sapphire.

---

# Back to Sapphire

The override only affects that specific slide.

All subsequent slides return to the default `baseColor` defined in the main frontmatter.
