// @ts-check
import { defineConfig } from 'astro/config';
import rehypeTemplateHelp from './src/lib/rehype-template-help.mjs';
import rehypeNewTab from './src/lib/rehype-new-tab.mjs';
import remarkQuiz from './src/lib/remark-quiz.mjs';

// Published at https://marcellin-college-dgt.github.io/ from the repo of the same name.
export default defineConfig({
  site: 'https://marcellin-college-dgt.github.io',
  trailingSlash: 'always',
  markdown: {
    remarkPlugins: [remarkQuiz],
    rehypePlugins: [rehypeTemplateHelp, rehypeNewTab],
    // Code examples: light on a light page, dark on a dark page
    shikiConfig: { themes: { light: 'github-light', dark: 'github-dark' } },
  },
});
