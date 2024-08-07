/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import ReadPane from "./readpane";
import options from "./rapidapi";
function Reader({ chapter }) {
  function getLang() {
    return localStorage.getItem("lang");
  }
  const [fullread, setfullread] = useState(true);
  const [lang, setLanguage] = useState(getLang());
  const [chapterdata, setchapterdata] = useState({});
  const [title, settitle] = useState("");
  const fetchdata = async (url) => {
    const response = await fetch(url, options);
    const result = await response.text();
    settitle(JSON.parse(result).name);
    setchapterdata(JSON.parse(result));
  };
  useEffect(() => {
    fetchdata(
      chapter.chapter_number
        ? `https://bhagavad-gita3.p.rapidapi.com/v2/chapters/${chapter.chapter_number}/`
        : "https://bhagavad-gita3.p.rapidapi.com/v2/chapters/1/"
    );
    localStorage.setItem("lang", lang);
  }, [chapter, lang, fullread]);
  return (
    <div className="reader">
      <div className="chapter-details">
        <div className="chapter-title">{title}</div>
        <div className="chapter-btns">
          {title === chapterdata.name ? (
            <button
              className="nav-btn"
              onClick={() => {
                settitle(chapterdata.name_meaning);
              }}
            >
              Meaning
            </button>
          ) : (
            <button
              className="nav-btn"
              onClick={() => {
                settitle(chapterdata.name);
              }}
            >
              Name
            </button>
          )}
          {fullread === true ? (
            <button
              className="nav-btn"
              onClick={() => {
                setfullread(!fullread);
              }}
            >
              Summary
            </button>
          ) : (
            <button
              className="nav-btn"
              onClick={() => {
                setfullread(!fullread);
              }}
            >
              Full Read
            </button>
          )}
          <select
            style={{ fontSize: "1.5vh", padding: "0px 10px" }}
            onChange={(e) => {
              setLanguage(e.target.value);
            }}
            defaultValue={lang}
          >
            {lang === "en" ? (
              <option value="en">EN</option>
            ) : (
              <option value="en">EN</option>
            )}
            {lang === "hi" ? (
              <option value="hi">HI</option>
            ) : (
              <option value="hi">HI</option>
            )}
          </select>
        </div>
      </div>
      <div className="chapter-read">
        <ReadPane language={lang} ch={chapterdata} full={fullread} />
      </div>
    </div>
  );
}

export default Reader;
