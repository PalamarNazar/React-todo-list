const RouterLink = (props) => {

    const {
        to,
        children,
        ...rest
    } = props

    const handlerClick = (event) => {
        event.preventDefault();
        window.history.pushState({}, '', to)
        window.dispatchEvent(new PopStateEvent('popstate'));
    }

    return (
        <a href={to} onClick={handlerClick} {...rest}>{children}</a>
    )
}

export default RouterLink;