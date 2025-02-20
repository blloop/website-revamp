import { a11yDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";

export function orderByDate(values) {
  return values.sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function filterByTag(values, tag) {
  return tag ? values.filter((e) => e.tags?.includes(tag)) : values;
}

export function renderCode(value) {
  return (
    <SyntaxHighlighter language={"css"} style={a11yDark}>
      {value.code}
    </SyntaxHighlighter>
  );
}
