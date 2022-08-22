import styles from "./styles.module.css"

function ColorfulComponent({ color, handleRemove }) {

    return (
        <div className={styles.box} style={{ backgroundColor: color }}>
            <div onClick={handleRemove} className={styles.delete}>X</div>
        </div>
    )
}

export default ColorfulComponent;