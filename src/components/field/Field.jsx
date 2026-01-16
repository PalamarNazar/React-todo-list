import './field.css'

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
        ref
    } = props

    return (
        <>
            <input className={`purple-input ${className}`} 
            type={type} 
            id={id} 
            name={name}
            onInput={onInput}
            value={value}
            placeholder={placeholder}
            required={required} 
            ref={ref}/>
        </>
    )
}

export default Field;