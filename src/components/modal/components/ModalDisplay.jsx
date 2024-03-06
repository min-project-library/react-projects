import styles from "../styles/modal.module.css"

function ModalDisplay(props){
    
    return(
        <div className={styles.modal}>
            <div className={styles.overlay} onClick={props.toggleModal}></div>
            <div className={styles.modalContent}>
                <h2>Min's Custom Modal</h2>
                <p>This is Min's custom modal</p>
                <button className={styles.modalButton} onClick={props.toggleModal}>CLOSE</button>
            </div>
        </div>
    )
}

export default ModalDisplay;