import react from '@vitejs/plugin-react';
import {defineConfig} from 'vite';
import svgrPlugin from 'vite-plugin-svgr';
import {VitePWA} from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgrPlugin(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {enabled: true}, // vite dev 로 돌려도 PWA 까지 볼 수 있게끔 주는 옵션
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
      workbox: {
        maximumFileSizeToCacheInBytes: 5000000, // 파일 크기 제한을 5MB로 증가
      },
      manifest: {
        name: '아이보리', // 설치 배너에 표시되는 이름
        short_name: '아이보리', // 아이콘 아래에 표시될 이름
        description: '질병감염 아동돌봄 간편화 서비스',
        theme_color: '#FBF2EE',
        background_color: '#ffffff',
        lang: 'ko',
        display: 'standalone',
        prefer_related_applications: true,
        icons: [
          {
            src: 'pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any',
          },
          {
            src: 'maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: [{find: '@', replacement: '/src'}],
  },
  server: {
    port: 3000,
  },
});
