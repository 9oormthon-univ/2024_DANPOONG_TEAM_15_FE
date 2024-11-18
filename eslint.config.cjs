const js = require('@eslint/js');
const globals = require('globals');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: {
        ...globals.node, // Node.js 글로벌 객체 추가
        ...globals.browser, // 브라우저 글로벌 객체 추가
      },
      parser: typescriptParser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      '@typescript-eslint': typescriptEslint,
    },
    settings: {
      react: {
        version: 'detect', // React 버전을 자동으로 감지
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // React 17+에서는 필요 없음
      'react/jsx-runtime': 'off', // 필요하지 않으면 비활성화
      'react/jsx-no-target-blank': 'warn', // 보안 문제 방지
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
    },
  },
  {
    ignores: [
      '.yarn/', // Yarn SDK 디렉터리 무시
      'dist/',  // 빌드 결과물 디렉터리 무시
    ],
  },
];
