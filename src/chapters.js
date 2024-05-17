import { useEffect, useState } from "react";
import React from "react";

function Chapters({ shareData }) {
  const url = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/";
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c60c2a06e1mshb4f017f597a0211p18557ajsn2fad4e30d3ca",
      "X-RapidAPI-Host": "bhagavad-gita3.p.rapidapi.com",
    },
  };
  const storeData = async (result) => {
    JSON.parse(result).map(async (chapter) => {
      if (chapter.id === 1) {
        shareData(chapter);
      }
      setchapters((chapters) => [...chapters, chapter]);
    });
  };
  const [chapters, setchapters] = useState([]);
  async function fetchdata() {
    try {
      const response = await fetch(url, options);
      const result = await response.text();
      storeData(result);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchdata();
  }, [url]);

  return (
    <div className="chapters">
      <div className="chapter-heading">Chapters</div>
      <div className="chapter-names">
        {chapters.map((chapter) => {
          return (
            <div
              className="chapter-name"
              key={chapter.id}
              onClick={() => {
                shareData(chapter);
              }}
            >
              {chapter.name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Chapters;
