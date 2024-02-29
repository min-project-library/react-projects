import logo from './logo.svg';
import './App.css';
import AccordianList from './components/accordian/AccordianList';
import RandomColor from './components/randomColor/RandomColor';
import StarRating from './components/star-rating/StarRating';
import ImageSlider from './components/image-slider/ImageSlider';
import QrGenerator from './components/qr/QrGenerator';
import LoadMore from './components/loadmore/LoadMore';

function App() {
  return (
    <div className="App">
      <AccordianList/>
     <StarRating num={5}/>
     <RandomColor/>
     <ImageSlider/>
     <QrGenerator/>
    </div>
  );
}

export default App;
