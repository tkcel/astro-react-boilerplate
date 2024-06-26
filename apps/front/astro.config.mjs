import node from "@astrojs/node";
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';
import robotsTxt from 'astro-robots-txt';

// https://astro.build/config
export default defineConfig({
  base: '/',
  // TODO: 設定する
  // site: 'https://agent.irodas.com/',
  adapter: node({
    mode: "standalone"
  }),
  integrations: [
    react(),
    sitemap(),
    robotsTxt()
  ],
  // XXX: 静的サイトとして出力する場合
  // output: 'static',
  // XXX: SSRで出力する場合,
  output: 'server',
});
