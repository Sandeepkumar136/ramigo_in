import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { animate, stagger } from "@motionone/dom";
import CoinHighLights from '../contents/CoinHighLights';
import DashBoardSearchBar from '../contents/DashBoardSearchBar';

const DashBoard = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchNews = async () => {
    const API_URL = "https://api.gdeltproject.org/api/v2/doc/doc?query=cybersecurity&mode=ArtList&format=json";
    try {
      const response = await axios.get(API_URL);
      console.log(response.data); // Debug the API response
      setNews(response.data.articles || []);
      setLoading(false);
    } catch (err) {
      setError(true);
      console.error("Error fetching news:", err);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    if (news.length > 0) {
      const elements = document.querySelectorAll(".news-card-contain");
      animate(
        elements,
        { opacity: [0, 1], translateY: [50, 0] },
        { duration: 0.5, delay: stagger(0.1) }
      );
    }
  }, [news]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error fetching news!</div>;

  const handleMouseEnter = (e) => {
    animate(e.currentTarget, { scale: 1.05, boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.2)" }, { duration: 0.3 });
  };

  const handleMouseLeave = (e) => {
    animate(e.currentTarget, { scale: 1, boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.1)" }, { duration: 0.3 });
  };

  const dates = news.map((article) => {
    const rawDate = article.seendate || "";
    console.log("Raw Date:", rawDate);
    let parsedDate = new Date(rawDate);
    if (isNaN(parsedDate.getTime())) {
      if (/^\d{8}T\d{6}Z$/.test(rawDate)) {
        const year = rawDate.slice(0, 4);
        const month = rawDate.slice(4, 6) - 1;
        const day = rawDate.slice(6, 8);
        const hour = rawDate.slice(9, 11);
        const minute = rawDate.slice(11, 13);
        const second = rawDate.slice(13, 15);
        parsedDate = new Date(Date.UTC(year, month, day, hour, minute, second));
      } else {
        return null;
      }
    }
    return parsedDate;
  });

  const options = {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    timeZoneName: "short",
  };

  const formattedDates = dates
    .filter((date) => date !== null)
    .map((date) => new Intl.DateTimeFormat("en-US", options).format(date));

  return (
    <>
        <CoinHighLights/>
    <DashBoardSearchBar/>
    <div className="n-container">
      {news.map((article, index) => (
        <div
          key={index}
          className="news-card-contain"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="n-overlay-cont">
            <h3>{article.title.slice(0, 80)}...</h3>
            <p>{formattedDates[index] || "No Date Available"}</p>
            <p>{article.sourcecountry}</p>
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default DashBoard;
