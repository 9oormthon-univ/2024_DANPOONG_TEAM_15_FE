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
        navigateFallback: '/index.html', // 기본 fallback 경로 설정
        navigateFallbackAllowlist: [
          // 네비게이션 허용 경로 추가
          /^\/absent-paper\.pdf$/, // /absent-paper.pdf 경로를 허용
        ],
        runtimeCaching: [
          {
            urlPattern: /.*\.pdf$/, // PDF 파일 캐싱 처리
            handler: 'CacheFirst', // 캐시 우선 사용
            options: {
              cacheName: 'pdf-cache',
              expiration: {
                maxEntries: 10, // 최대 캐시 항목 수
                maxAgeSeconds: 7 * 24 * 60 * 60, // 캐시 유효 기간 (7일)
              },
              cacheableResponse: {
                statuses: [0, 200], // 캐싱 가능한 응답 상태 코드
              },
            },
          },
        ],
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
