// Under a "## Help with your template" heading, each "### Question …" heading and the
// text after it becomes a fold-out (<details>), so a long list of questions stays scannable.
// Authors just write ordinary Markdown headings.

const textOf = (node) =>
  node.type === 'text' ? node.value : (node.children ?? []).map(textOf).join('');

const isHeading = (node, level) => node.type === 'element' && node.tagName === `h${level}`;

export default function rehypeTemplateHelp() {
  return (tree) => {
    const out = [];
    let inHelp = false;
    let open = null;

    const close = () => {
      if (open) out.push(open);
      open = null;
    };

    for (const node of tree.children) {
      if (isHeading(node, 2)) {
        close();
        inHelp = /^help with/i.test(textOf(node).trim());
        out.push(node);
        continue;
      }
      if (inHelp && isHeading(node, 3)) {
        close();
        open = {
          type: 'element',
          tagName: 'details',
          properties: {},
          children: [{ type: 'element', tagName: 'summary', properties: {}, children: node.children }],
        };
        continue;
      }
      if (open) open.children.push(node);
      else out.push(node);
    }
    close();
    tree.children = out;
  };
}
