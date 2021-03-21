import React, { useRef } from "react";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

const Code: React.FC = () => {
  return (
    <div>
      <Box pt={3}>
        <h3>Sample Code</h3>
      </Box>
<Paper>
      <Box>
        <SyntaxHighlighter language="javascript" style={docco}>
          {`
import { TextAnnotateBlend } from "react-text-annotate-blend";

const App = () => {
  const [value, setValue] = useState(init);
  const [tag, setTag] = useState("tagA");

  const handleChange = (value) => {
    setValue(value);
  };

  const COLORS = {
    tagA: "rgb(179, 245, 66)",
    tagB: "#42f5f5",
  };

  return (
    <>
      <TextAnnotateBlend
        style={{
          maxWidth: 500,
          fontSize: "1.2rem",
        }}
        content="This component lets you blend annotations!"
        onChange={handleChange}
        value={value}
        getSpan={(span) => ({
          ...span,
          tag: tag,
          color: COLORS[tag],
        })}
      />
      <select value={tag} onChange={(e) => setTag(e.target.value)}>
        <option value="tagA">tagA</option>
        <option value="tagB">tagB</option>
      </select>

      <pre>{JSON.stringify(value, null, 2)}</pre>
    </>
  );
};`}
        </SyntaxHighlighter>
      </Box>
      </Paper>
    </div>
  );
};

export default Code;
