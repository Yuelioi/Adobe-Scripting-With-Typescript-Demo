# Adobe After Effects TSX Script Boilerplate

基于 TypeScript 的 Adobe After Effects 脚本开发模板，支持 VSCode 一键调试和 Rollup 打包。

[![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/yuelili.ae-tsx-runner?color=blue&label=AE%2520Runner%2520Plugin)](https://marketplace.visualstudio.com/items?itemName=yuelili.ae-tsx-runner)

[English](README-EN.md) | [中文](README.md)

## ✨ 特性

* **TypeScript 支持** - 类型安全的 AE 脚本开发
* **VSCode 集成调试** - 右键一键运行脚本
* **Rollup 打包** - 生产级代码构建
* **开发热重载** - 实时同步修改到 AE

## 📦 快速开始

### 前置要求

* [Visual Studio Code](https://code.visualstudio.com/)
* [Adobe After Effects](https://www.adobe.com/products/aftereffects.html)
* [Node.js](https://nodejs.org/) (v16+)

### 安装步骤

1. **安装 VSCode 插件**
   [AE TSX Runner](https://marketplace.visualstudio.com/items?itemName=yuelili.ae-tsx-runner)
2. **克隆项目**

   ```bash
   git clone git@github.com:Yuelioi/Adobe-Scripting-With-Typescript-Demo.git
   cd Adobe-Scripting-With-Typescript-Demo
   ```

3. **安装依赖**

   ```bash
   npm install  # 或 yarn / pnpm install
   ```

4. **运行脚本**

   * 在 VSCode 中打开 `src/main.tsx`
   * 右键选择 *"运行ae脚本"*
   * 脚本将自动在 After Effects 中执行

## ⚙️ 构建配置

### Rollup 打包

* **Rollup 官网** ：[rollupjs.org](https://rollupjs.org/)

### rollup.config.js 核心配置

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
        comments: false
      }
    })
  ]
};
```

## 📂 项目结构

复制

```text
├── src/
│   └── main.tsx       # 脚本入口文件
├── dist/              # 构建输出目录
├── rollup.config.js   # Rollup 配置文件
└── package.json
```

## 📄 许可证

MIT License | © 2025 Yueli
