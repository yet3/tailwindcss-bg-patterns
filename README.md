# @yet3/tailwindcss-bg-patterns

![GitHub license](https://img.shields.io/github/license/yet3/tailwindcss-bg-patterns?style=flat)
<a href='https://www.npmjs.com/package/@yet3/tailwindcss-bg-patterns'>
![npm](https://img.shields.io/npm/v/@yet3/tailwindcss-bg-patterns)
</a>

A plugin that adds css background patterns to [TailwindCss](https://tailwindcss.com)

## Live Demo

See a [live demo](https://yet3.github.io/tailwindcss-bg-patterns/)

## Table of Contents

- [Installation](#installation)
- [Config](#config)
- [Example usage](#grid)
- [Patterns](#patterns)
  - [Horizontal lines](#horizontal-lines)
  - [Vertical lines](#vertical-lines)
  - [Grid](#grid)
  - [Hatching](#hatching)
  - [Cross-Hatching](#cross-hatching)
  - [Polka dot](#polka-dot)
  - [Hexagonal Polka dot](#hexagonal-polka-dot)
- [Todo](#support)
- [Support](#support)

## Installation

```sh
npm install --save-dev @yet3/tailwindcss-bg-patterns
```

```sh
yarn add -D @yet3/tailwindcss-bg-patterns
```

```sh
pnpm add -D @yet3/tailwindcss-bg-patterns
```

In `tailwind.config.js`

```js
import bgPatterns from "fluid-tailwind";

export default {
  // ...
  plugins: [bgPatterns],
};
```

### Customizing config

```js
import bgPatterns from "@yet3/tailwindcss-bg-patterns";

export default {
  // ...
  plugins: [
    bgPatterns({
      prefix: "bg-",
    }),
  ],
};
```

## Example usage

```html
<div
  class="bg-blue-500 bg-pattern-grid bg-pattern-line-0.5 bg-pattern-spacing-32"
/>
```

this code will result in:

<img src="./public/grid.png" alt="Grid pattern" height="200" />

## Patterns

### Horizontal lines

See it live [here](https://yet3.github.io/tailwindcss-bg-patterns#x-lines)

```html
<div
  class="bg-blue-500 bg-pattern-x-lines bg-pattern-line-0.5 bg-pattern-spacing-32"
/>
```

<img src="./public/x-lines.png" alt="Horizontal lines" height="200" />

### Vertical lines

See it live [here](https://yet3.github.io/tailwindcss-bg-patterns#y-lines)

```html
<div
  class="bg-blue-500 bg-pattern-y-lines bg-pattern-line-0.5 bg-pattern-spacing-32"
/>
```

<img src="./public/y-lines.png" alt="Vertical lines" height="200" />

### Grid

See it live [here](https://yet3.github.io/tailwindcss-bg-patterns#grid)

```html
<div
  class="bg-blue-500 bg-pattern-grid bg-pattern-line-0.5 bg-pattern-spacing-32"
/>
```

<img src="./public/grid.png" alt="Grid pattern" height="200" />

### Hatching

See it live [here](https://yet3.github.io/tailwindcss-bg-patterns#hatching)

```html
<div
  class="bg-blue-500 bg-pattern-hatching bg-pattern-line-0.5 bg-pattern-spacing-16 bg-pattern-hatching-left-to-right"
/>
```

<img src="./public/hatching.png" alt="Hatching pattern" height="200" />

### Cross-Hatching

See it live [here](https://yet3.github.io/tailwindcss-bg-patterns#cross-hatching)

```html
<div
  class="bg-blue-500 bg-pattern-cross-hatching bg-pattern-line-0.5 bg-pattern-spacing-16"
/>
```

<img src="./public/cross-hatching.png" alt="Cross-Hatching pattern" height="200" />

### Polka dot

See it live [here](https://yet3.github.io/tailwindcss-bg-patterns#polka-dot)

```html
<div
  class="bg-blue-500 bg-pattern-polka-dot bg-pattern-dot-white bg-pattern-dot-8 bg-pattern-spacing-16"
/>
```

<img src="./public/polka-dot.png" alt="Polka dot pattern" height="200" />

### Hexagonal polka dot

See it live [here](https://yet3.github.io/tailwindcss-bg-patterns#hexagonal-polka-dot)

```html
<div
  class="bg-blue-500 bg-pattern-hex-polka-dot bg-pattern-dot-white bg-pattern-dot-8 bg-pattern-spacing-16"
/>
```

<img src="./public/hex-polka-dot.png" alt="Polka dot pattern" height="200" />

## Todo

- [ ] Add utility to adjust pattern opacity
- [ ] Add pattern: checkers
- [ ] Add pattern: honeycomb
- [ ] Add pattern: bricks

## Support

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/W7W618YWH4)
