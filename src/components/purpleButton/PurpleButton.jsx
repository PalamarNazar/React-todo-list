import styles from './PurpleButton.module.scss'

const PurpleButton = (props) => {

    const { className = '', 
        children, 
        onClick,
        type = "button",
        aria = false,
        buttonTitle 
    } = props

    return (
        <button className={`${styles.button} ${className}`} 
            onClick={onClick}
            type={type}
            aria-label={ aria ? buttonTitle : null}
            title={buttonTitle}>
                {children}
            </button>
    )
}

export default PurpleButton;