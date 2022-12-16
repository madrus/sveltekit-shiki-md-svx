import { defineMDSveXConfig as defineConfig } from 'mdsvex';
import { join, resolve } from 'node:path';
import highlighter from './src/lib/utilities/codeHighlighter.mjs';

const __dirname = resolve();

const config = defineConfig({
	extensions: ['.md', '.svx'],
	highlight: {
		highlighter,
	},
	layout: join(__dirname, './src/lib/components/MarkdownLayout.svelte'),
	smartypants: {
		dashes: 'oldschool'
	},
	remarkPlugins: [],
	rehypePlugins: []
});

export default config;
