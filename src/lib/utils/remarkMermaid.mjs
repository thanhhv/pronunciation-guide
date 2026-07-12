// Turn ```mermaid code fences into <pre class="mermaid"> blocks so they skip
// Shiki highlighting and can be rendered client-side by mermaid.js.
function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export default function remarkMermaid() {
  return (tree) => {
    const walk = (node) => {
      if (!Array.isArray(node.children)) return;
      node.children = node.children.map((child) => {
        if (child.type === "code" && child.lang === "mermaid") {
          return {
            type: "html",
            value: `<pre class="mermaid">${escapeHtml(child.value)}</pre>`,
          };
        }
        walk(child);
        return child;
      });
    };
    walk(tree);
  };
}
