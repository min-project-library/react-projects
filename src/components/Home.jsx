import { Link } from "react-router-dom";
function Home() {
    return (
      <div>
        <h1>React Projects</h1>
          {/* <div><Link to="/accordian">Accordian</Link></div> */}
          <div><Link to="/accordian2">Accordian</Link></div>
          {/* <div><Link to="/randomColor">Random Color</Link></div> */}
          {/* <div><Link to="/starRating">Star Rating</Link></div> */}
          <div><Link to="/starRating2">Star Rating</Link></div>
          {/* <div><Link to="/imageSlider">Image Slider</Link></div> */}
          {/* <div><Link to="/qrGenerator">QR Generator</Link></div> */}
          <div><Link to="/qrGenerator2">QR Generator</Link></div>
          <div><Link to="/loadMore">Load More</Link></div>
          <div><Link to="/randomColor2">Random Color</Link></div>
          <div><Link to="/imageSlider2">Image Slider</Link></div>
          <div><Link to="/lightDark">Light Dark</Link></div>
          <div><Link to="/scrollIndicator">Scroll Indicator</Link></div>

      </div>
    );
  }

export default Home