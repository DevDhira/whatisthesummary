import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import About from "./pages/About";
import BlogSummarizer from "./pages/BlogSummarizer";
import Feedback from "./pages/Feedback";
import Home from "./pages/Home";
import NewsArticleSummarizer from "./pages/NewsArticleSummarizer";
import VideoSummarizer from "./pages/VideoSummarizer";
import ReactGA from 'react-ga';
const TRACKING_ID = "UA-212154697-1"; // OUR_TRACKING_ID

ReactGA.initialize(TRACKING_ID);


function App() {

  
  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);
  return (
    <Router>
      <div className="w-screen m-0 md:w-full h-full lg:h-full flex flex-col justify-around" >

        <div id="nav">
          <Nav/>
        </div>
        <div id="content" className="flex items-start h-full" >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/feedback" element={<Feedback />} />
            <Route path="/blog-summarizer" element={<BlogSummarizer />} />
            <Route path="/news-summarizer" element={<NewsArticleSummarizer />} />
            <Route path="/video-summarizer" element={<VideoSummarizer />} />
          </Routes>

        </div>
        <div id="footer">
          <Footer/>
        </div>
      </div>

    </Router>
  );
}

export default App;
