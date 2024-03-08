import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AccordianList from './components/accordian/AccordianList';
import AccordianList2 from './components/accordian2/AccordianList2';
import RandomColor from './components/randomColor/RandomColor';
import StarRating from './components/star-rating/StarRating';
import StarRating2 from './components/star-rating2/StarRating2';
import ImageSlider from './components/image-slider/ImageSlider';
import QrGenerator from './components/qr/QrGenerator';
import QrGenerator2 from './components/qr2/QrGenerator';
import LoadMore from './components/loadmore/LoadMore';
import RandomColor2 from './components/randomColor2/RandomColor2';
import ImageSlider2 from './components/image-slider2/ImageSlider2';
import LightDark from './components/light-dark-theme/LightDark';
import ScrollIndicator from './components/scroll-indicator/ScrollIndicator';
import TodoList from './components/todo/TodoList';
import CustomTabs from './components/tabs/CustomTabs';
import Home from './components/Home';
import Modal from './components/modal/Modal';
import GithubProfileFinder from './components/githubprofilefinder/GithubProfileFinder';
import Weather from './components/weather/Weather';
import MyerScraper from './components/myerscraper/MyerScraper';
function App() {
  return (
    <div className="App">
      <Router>
      <Routes>
      <Route path="/" element={<Home />} />

        <Route path="/weather" element={<Weather/>}/>
        <Route path="/myerscraper" element = {<MyerScraper/>}/>
        <Route path="/githubprofilefinder" element={<GithubProfileFinder/>}/>
        
        <Route path="/todoList" element={<TodoList/>}/>
        <Route path="/customModal" element={<Modal/>}/>
        <Route path="/customTabs" element={<CustomTabs/>}/>
        <Route path="/accordian" element={<AccordianList />} />
        <Route path="/accordian2" element={<AccordianList2 />} />
        <Route path="/randomColor" element={<RandomColor />} />
        <Route path="/starRating" element={<StarRating num={5} />} />
        <Route path="/starRating2" element={<StarRating2 num={10} />} />
        <Route path="/imageSlider" element={<ImageSlider />} />
        <Route path="/qrGenerator" element={<QrGenerator />} />
        <Route path="/qrGenerator2" element={<QrGenerator2 />} />
        <Route path="/loadMore" element={<LoadMore />} />
        <Route path="/randomColor2" element={<RandomColor2 />} />
        <Route path="/imageSlider2" element={<ImageSlider2 />} />
        <Route path="/lightDark" element={<LightDark />} />
        <Route path="/scrollIndicator" element={<ScrollIndicator />} />
        
      </Routes>
    </Router>
   
      
    </div>
    
  );
}

export default App;
