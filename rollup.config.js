import * as fs from 'fs';
import JSON5 from 'json5';
import typescript from '@rollup/plugin-typescript';
import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import terser from '@rollup/plugin-terser';
import { babel } from '@rollup/plugin-babel';
import del from 'rollup-plugin-delete';

function loadConfig() {
  try {
    const settings = fs.readFileSync('./.vscode/settings.json', 'utf8');
    const config = JSON5.parse(settings)?.['ae-tsx-runner'];

    if (!config) {
      throw new Error('Missing ae-tsx-runner configuration in .vscode/settings.json');
    }

    return {
      input: config.input || 'src/index.tsx',
      output: config.output || 'dist/index.jsx',
      compress: true,
    };
  } catch (error) {
    console.error('Configuration Error:', error.message);
    process.exit(1);
  }
}

const CONFIG = loadConfig();

console.log('Rollup Config:', CONFIG.input);

// 创建输出配置数组
function createOutputs() {
  const baseOutput = {
    file: CONFIG.output,
    format: 'cjs',
    exports: 'auto',
    plugins: [
      terser({
        format: {
          comments: false,
        },
        compress: false,
      }),
    ],
  };

  const outputs = [baseOutput];

  if (CONFIG.compress) {
    outputs.push({
      file: CONFIG.output.replace('.jsx', '.min.jsx'),
      format: 'iife',
      name: 'AE_SCRIPT',
      plugins: [
        terser({
          format: {
            comments: false,
          },
        }),
      ],
    });
  }

  return outputs;
}

// 集中管理插件配置
const plugins = [
  resolve({
    extensions: ['.tsx', '.ts', '.jsx', '.js'],
  }),
  commonjs({
    include: /node_modules/,
  }),
  typescript({
    tsconfig: './tsconfig.json',
  }),
  babel({
    babelHelpers: 'bundled',
    presets: [
      [
        '@babel/preset-env',
        {
          targets: { browsers: 'ie 8' }, //  ES3
          loose: true,
        },
      ],
    ],
    extensions: ['.ts', '.tsx'],
    exclude: 'node_modules/**',
  }),
  del({
    targets: 'dist/*.js',
  }),
];

export default {
  input: CONFIG.input,
  output: createOutputs(),
  plugins,
  onwarn(warning, warn) {
    if (warning.code === 'THIS_IS_UNDEFINED') return;
    warn(warning);
  },
  context: 'window',
};
