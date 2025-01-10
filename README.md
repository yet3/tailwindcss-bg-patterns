# tailwindcss-bg-patterns (IN-DEVELOPMENT)

![GitHub license](https://img.shields.io/github/license/yet3/tailwindcss-bg-patterns?style=flat)
<a href='https://www.npmjs.com/package/@yet3/tailwindcss-bg-patterns'>
![npm](https://img.shields.io/npm/v/@yet3/tailwindcss-bg-patterns)
</a>

A plugin that adds css background patterns to [TailwindCss](https://tailwindcss.com)

## Table of Contents

- [Installation](#installation)
- [Config](#config)
- [Usage](#usage)

## Installation

```sh
npm install -D @yet3/tailwindcss-bg-patterns
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

## Usage

```
bg-pattern-line-2 // line width
bg-pattern-line-[8] // custom line width
bg-pattern-line-red-500 // line color
bg-pattern-line-[#a2a2a2] // custom line color

bg-pattern-grid
bg-pattern-cell-24 // for grid pattern, cell size
bg-pattern-cell-[321] // for grid pattern, custom cell size
```

<img src="./public/grid.png" alt="Grid pattern" height="200" />

```html
<div
  class="bg-blue-500 bg-pattern-grid bg-pattern-line-2 bg-pattern-line-white bg-pattern-cell-32"
/>
```
