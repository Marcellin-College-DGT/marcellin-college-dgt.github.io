// Links in page text to a file or an example page (/files/… or /examples/…) open in a new
// tab, so the assessment page stays open behind them. Other links open as usual.

const opensNewTab = (href) => typeof href === 'string' && /^\/(files|examples)\//.test(href);

function walk(node) {
  if (node.type === 'element' && node.tagName === 'a' && opensNewTab(node.properties?.href)) {
    node.properties.target = '_blank';
    node.properties.rel = ['noopener'];
  }
  for (const child of node.children ?? []) walk(child);
}

export default function rehypeNewTab() {
  return (tree) => walk(tree);
}
