import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../assets/markdown.css";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export const WordDetail = () => {
  const { slug } = useParams();
  const [content, setContent] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!slug) return;

    import(`../content/${slug}.md?raw`)
      .then((module) => {
        setContent(module.default);
      })
      .catch(() => {
        setContent("# Not Found\nContent coming soon.");
      });
  }, [slug]);

  return (
    <>
      <button
        onClick={() => navigate("/")}
        className="back-button"
      >
        ← Back to Home
      </button>

      <div className="markdown-content">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {content}
        </ReactMarkdown>
      </div>
    </>

  );
}
