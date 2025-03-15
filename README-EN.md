# Adobe After Effects TSX Script Boilerplate 🚀

A TypeScript-based template for Adobe After Effects script development, featuring VSCode debugging and Rollup bundling.

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/yuelili.ae-tsx-runner?color=blue&label=AE%2520Runner%2520Plugin)](https://marketplace.visualstudio.com/items?itemName=yuelili.ae-tsx-runner)

[English](README-EN.md) | [中文](README.md)

## ✨ Features

* **TypeScript Support** - Type-safe scripting for AE
* **VSCode Debugging** - One-click script execution
* **Rollup Bundling** - Production-ready builds

## 🚀 Getting Started

### Prerequisites

* [Visual Studio Code](https://code.visualstudio.com/)
* [Adobe After Effects](https://www.adobe.com/products/aftereffects.html)
* [Node.js](https://nodejs.org/) (v16+)

### Setup

1. **Install VSCode Plugin**
   [AE TSX Runner](https://marketplace.visualstudio.com/items?itemName=yuelili.ae-tsx-runner)
2. **Clone Repository**

   ```bash
   git clone git@github.com:Yuelioi/Adobe-Scripting-With-Typescript-Demo.git
   cd Adobe-Scripting-With-Typescript-Demo
   ```

3. **Install Dependencies**

   ```bash
   npm install  # or yarn/pnpm install
   ```

4. **Development Mode**

   ```bash
   npm run dev  # Watch mode for auto-rebuilds
   ```

5. **Run Script**

   * Open `src/main.tsx` in VSCode
   * Right-click and select *"Run AE Script"*
   * Script will execute in After Effects automatically

## ⚙️ Build Configuration

### Rollup Bundling

* Production build: `npm run build`
* Output: `dist/main.jsxbin`
* **Rollup Official Site** : [rollupjs.org](https://rollupjs.org/)

### Core `rollup.config.js`

```javascript
import typescript from '@rollup/plugin-typescript';
import { terser } from '@rollup/plugin-terser';

export default {
  input: 'src/main.tsx',
  output: {
    file: 'dist/main.jsx',
    format: 'esm'
  },
  plugins: [
    typescript(),
    terser({
      format: {
        comments: false // Remove all comments
      }
    })
  ]
};
```

## 📂 Project Structure

```text
├── src/
│   └── main.tsx       # Script entry point
├── dist/              # Build outputs
├── rollup.config.js   # Rollup configuration
└── package.json
```

## 📜 License

MIT License | © 2025 Yueli
