const ErrorField = (props) => {
    const { children } = props

    return (
        <span className="error-field">{children}</span>
    )
}

export default ErrorField;