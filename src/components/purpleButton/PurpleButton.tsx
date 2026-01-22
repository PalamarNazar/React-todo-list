import styles from './PurpleButton.module.scss'

const PurpleButton = (props) => {

    const { className = '', 
        children, 
        onClick,
        type = "button",
        buttonTitle,
        ...rest
    } = props

    return (
        <button className={`${styles.button} ${className}`} 
            onClick={onClick}
            type={type}
            title={buttonTitle}
            {...rest}>
                {children}
            </button>
    )
}

export default PurpleButton;