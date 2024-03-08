
import styles from "../styles/LoadMore.module.css"
function Product(props){
    return (
    <div className={styles.product}>
        <img src={props.src} className={styles.image}/>
        <h3 className={styles.scrapedText}>{props.name}</h3>
        <h2 className={styles.scrapedText}>{props.brand}</h2>
        <p className={styles.scrapedText}>Price {props.price}</p>
    </div>)
}

export default Product;