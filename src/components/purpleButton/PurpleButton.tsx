import type { ButtonHTMLAttributes } from 'react'
import styles from './PurpleButton.module.scss'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    buttonTitle: string;
}

const PurpleButton = (props: ButtonProps) => {

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