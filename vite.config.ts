import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { portfolio } from './src/content/portfolio'

export default defineConfig({
  plugins: [react(), {
    name: 'portfolio-metadata',
    transformIndexHtml(html) {
      const escape = (value: string) => value.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
      return html.replaceAll('%TITLE%', escape(portfolio.seo.title)).replaceAll('%DESCRIPTION%', escape(portfolio.seo.description))
    },
  }],
  base: process.env.VITE_BASE_PATH || '/',
})
