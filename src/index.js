import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HighlightVideo from './components/HighlightVideo';
import App from './App';
import SearchPage from './pages/Search';
import VideoDetailsPage from './pages/VideoDetails';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


ReactDOM.render(<BrowserRouter>
    <Routes>
      <Route path="search" element={<SearchPage query=""/>} />
      <Route path="videos/:videoId" element={<VideoDetailsPage query="" timestamp={new Date().toString()}></VideoDetailsPage>} />
      <Route path="/" element={<SearchPage query=""/>} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);