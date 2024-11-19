const js = require('@eslint/js');
const globals = require('globals');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const typescriptEslint = require('@typescript-eslint/eslint-plugin');
const typescriptParser = require('@typescript-eslint/parser');
const tanstackQuery = require('@tanstack/eslint-plugin-query');
const importPlugin = require('eslint-plugin-import');

module.exports = [
  js.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
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
      '@tanstack/query': tanstackQuery, // Tanstack Query 플러그인 추가
      'react-hooks': reactHooks,
      '@typescript-eslint': typescriptEslint,
      import: importPlugin, // import 플러그인 추가
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
      '@typescript-eslint/no-unused-vars': ['warn', {argsIgnorePattern: '^_'}],
      quotes: ['error', 'single', {allowTemplateLiterals: true}], // 문자열 따옴표는 작은 따옴표로 통일
      ...js.configs.recommended.rules, // 기본 ESLint 규칙
      'no-unused-vars': 'off', // 사용하지 않는 변수 경고 무시
      ...reactHooks.configs.recommended.rules, // React Hooks 규칙
      '@typescript-eslint/explicit-function-return-type': 'off', // 함수 반환 타입 명시 필요 없음
      '@typescript-eslint/naming-convention': 'off', // 명명 규칙 강제하지 않음
      '@typescript-eslint/no-floating-promises': 'off', // 처리되지 않은 Promises 경고 무시
      '@typescript-eslint/strict-boolean-expressions': 'off', // 엄격한 boolean 표현 사용 X
      '@typescript-eslint/no-confusing-void-expression': 'off', // void 표현 규칙 무시
      '@tanstack/query/exhaustive-deps': 'error', // 의존성 배열이 완전한지 검사
      '@tanstack/query/stable-query-client': 'error', // 안정적인 QueryClient 사용 강제
      // import 순서 규칙
      'import/order': [
        'error',
        {
          groups: [
            'builtin',
            'external',
            'internal',
            ['parent', 'sibling', 'index'],
            'object',
            'type',
          ],
          pathGroups: [
            {pattern: 'react', group: 'builtin', position: 'before'},
          ],
          pathGroupsExcludedImportTypes: ['react'],
          'newlines-between': 'never', // Import 사이에 새로운 줄 없음
        },
      ],
    },
  },
  {
    ignores: [
      '.yarn/', // Yarn SDK 디렉터리 무시
      'dist/', // 빌드 결과물 디렉터리 무시
      'dev-dist/', // 개발 빌드 결과물 디렉터리 무시
    ],
  },
];
