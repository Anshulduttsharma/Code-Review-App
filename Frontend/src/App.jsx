import { useEffect, useState } from "react";
import "prismjs/themes/prism-tomorrow.css";
import prism from "prismjs";
import Editor from "react-simple-code-editor";
import "./App.css";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import Markdown from "react-markdown";
import axios from "axios";

function App() {
  const [code, setCode] = useState(`function sum(){
return 1+1
}`);
  const [review, setReview] = useState(``);
  const [loading, setLoading] = useState(false); // Add loading state

  useEffect(() => {
    prism.highlightAll();
  }, []);

  async function reviewCode() {
    setLoading(true); // Show loading indicator
    try {
      const response = await axios.post("http://localhost:3000/ai/get-review", {
        code,
      });
      setReview(response.data);
    } catch (error) {
      console.error("Error during review:", error);
    } finally {
      setLoading(false); // Hide loading indicator when done
    }
  }

  return (
    <>
      <main>
        <div className="left">
          <div className="code">
            <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) =>
                prism.highlight(code, prism.languages.javascript, "javascript")
              }
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 16,
                borderRadius: "5px",
                height: "100%",
                width: "100%",
              }}
            />
          </div>
          <button onClick={reviewCode} className="review">
            Review
          </button>
        </div>

        <div className="right">
          {loading ? (
            <div className="loading-indicator">Loading...</div> // Display loading message
          ) : (
            <Markdown rehypePlugins={[rehypeHighlight]}>{review}</Markdown>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
