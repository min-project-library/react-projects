import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function Home() {
    return (
      <div className={styles.container}>
        <h1>React Projects</h1>
          {/* <div className={styles.linkContainer}><Link to="/accordian">Accordian</Link></div> */}
          <div className={styles.linkContainer}><Link to="/weather">Current Weather App</Link></div>
          <div className={styles.linkContainer}><Link to="/githubprofilefinder">Github Profile Finder</Link></div>
          <div className={styles.linkContainer}><Link to="/myerscraper">Myer Search Scraper</Link></div>
          <div className={styles.linkContainer}><Link to="/todoList">Todo List App</Link></div>
          <div className={styles.linkContainer}><Link to="/customModal">Custom Modal Component</Link></div>
          <div className={styles.linkContainer}><Link to="/customTabs">Custom Tabs Component</Link></div>

          <div className={styles.linkContainer}><Link to="/accordian2">Accordian</Link></div>
          {/* <div className={styles.linkContainer}><Link to="/randomColor">Random Color</Link></div> */}
          {/* <div className={styles.linkContainer}><Link to="/starRating">Star Rating</Link></div> */}
          <div className={styles.linkContainer}><Link to="/starRating2">Star Rating</Link></div>
          {/* <div className={styles.linkContainer}><Link to="/imageSlider">Image Slider</Link></div> */}
          {/* <div className={styles.linkContainer}><Link to="/qrGenerator">QR Generator</Link></div> */}
          <div className={styles.linkContainer}><Link to="/qrGenerator2">QR Generator</Link></div>
          <div className={styles.linkContainer}><Link to="/loadMore">Load More</Link></div>
          <div className={styles.linkContainer}><Link to="/randomColor2">Random Color</Link></div>
          <div className={styles.linkContainer}><Link to="/imageSlider2">Image Slider</Link></div>
          <div className={styles.linkContainer}><Link to="/lightDark">Light Dark</Link></div>
          <div className={styles.linkContainer}><Link to="/scrollIndicator">Scroll Indicator</Link></div>
          

      </div>
    );
  }

export default Home