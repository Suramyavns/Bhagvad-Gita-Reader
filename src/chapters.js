import { Suspense, useEffect, useState } from "react";
import React from "react";
import options from "./rapidapi";
import Loading from "./loading";
function Chapters({ shareData }) {
  const url = "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/";

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <div className="chapters">
      <div className="chapter-heading">Chapters</div>
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </div>
  );
}
export default Chapters;
