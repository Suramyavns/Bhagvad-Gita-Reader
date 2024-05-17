import React, { useEffect, useState } from "react";
function SummaryPane({ language, ch }) {
  const [summary, setsummary] = useState("");
  useEffect(() => {
    if (ch) {
      if (language === "hi") {
        setsummary(ch.chapter_summary_hindi);
      } else {
        setsummary(ch.chapter_summary);
      }
    }
  }, [ch]);
  return <div className="pane">{summary}</div>;
}

export default SummaryPane;
