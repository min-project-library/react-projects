
import styles from "../styles/LoadMore.module.css"
function Product(props){
    return (
    <div className={styles.product}>
        <img src={props.thumbnail} className={styles.image}/>
        <h3>{props.title}</h3>
    </div>)
}

export default Product;