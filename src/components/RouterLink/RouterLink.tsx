import type { AnchorHTMLAttributes, MouseEvent } from "react";

type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
    to: string;
}

const RouterLink = (props: LinkProps) => {

    const {
        to,
        children,
        ...rest
    } = props

    const handlerClick = (event: MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        window.history.pushState({}, '', to)
        window.dispatchEvent(new PopStateEvent('popstate'));
    }

    return (
        <a href={to} onClick={handlerClick} {...rest}>{children}</a>
    )
}

export default RouterLink;