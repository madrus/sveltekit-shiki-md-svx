import { getHighlighter } from 'shiki';

const THEME = 'dark-plus';

// @ts-ignore
const highlighter = async (code, lang) => {
  const shikiHighlighter = await getHighlighter({
    theme: THEME,
  });
  const html = shikiHighlighter.codeToHtml(code, {
    lang,
  });
  return html;
}

export default highlighter;
