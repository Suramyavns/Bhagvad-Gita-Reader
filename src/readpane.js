import React, { Suspense } from "react";
import { useEffect, useState } from "react";
import "./App.css";
import Loading from "./loading";
import LoremIpsum from "react-lorem-ipsum";
function ReadPane({ language, ch, full }) {
  const [summary, setsummary] = useState("");
  useEffect(() => {
    if (ch) {
      if (language === "hi") {
        setsummary(ch.chapter_summary_hindi);
      } else {
        setsummary(ch.chapter_summary);
      }
    }
  }, [ch, language]);
  return (
    <div className="pane">
      <Suspense fallback={<Loading />}>
        <div className="full-read">
          {full !== true ? (
            <div className="full-read">{summary}</div>
          ) : (
            <LoremIpsum />
          )}
        </div>
      </Suspense>
    </div>
  );
}

export default ReadPane;
