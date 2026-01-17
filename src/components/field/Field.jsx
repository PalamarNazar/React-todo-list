import styles from './Field.module.scss'

const Field = (props) => {
    const { 
        onInput, 
        id,
        name,
        required = false, 
        type = 'text',
        className = '',
        placeholder = '',
        value,
        ...rest
    } = props

    return (
        <input className={`${styles.input} ${className}`} 
        type={type} 
        id={id} 
        name={name}
        onInput={onInput}
        value={value}
        placeholder={placeholder}
        required={required} 
        {...rest}
        />
    )
}

export default Field;