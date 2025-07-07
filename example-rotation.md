---
theme: ./
themeConfig:
  baseColor: 'rosewater'
  colorPattern: 'rotation'
---

# Rotation Pattern Demo

This demo shows the automatic color rotation feature

<div class="pt-12">
  <span @click="$slidev.nav.next" class="w-full px-2 py-1 rounded cursor-pointer" flex="~ justify-center items-center gap-2" hover="bg-white bg-opacity-10">
    Press Space for next page <div class="i-carbon:arrow-right inline-block"/>
  </span>
</div>

---

# How Rotation Pattern Works

The `rotation` pattern automatically cycles through all Catppuccin colors as you navigate through slides.

## Configuration

```yaml
themeConfig:
  baseColor: 'rosewater' # Starting color
  colorPattern: 'rotation' # Enable rotation
```

## Features

- Starts with the specified `baseColor`
- Each slide uses the next color in the sequence
- Creates a dynamic, colorful presentation
- Perfect for long presentations with many slides

---
layout: center
---

# Slide 3 - Pink

---
layout: center
---

# Slide 4 - Mauve

---
layout: center
---

# Slide 5 - Red

---
layout: center
---

# Slide 6 - Maroon

---
layout: center
---

# Slide 7 - Peach

---
layout: center
---

# Slide 8 - Yellow

---
layout: center
---

# Slide 9 - Green

---
layout: center
---

# Slide 10 - Teal

---
layout: center
---

# Slide 11 - Sky

---
layout: center
---

# Slide 12 - Sapphire

---
layout: center
---

# Slide 13 - Blue

---
layout: center
---

# Slide 14 - Lavender

---

# Back to Rosewater!

The rotation has completed one full cycle and starts again.

This ensures your presentation always has vibrant, varied colors no matter how many slides you have.
