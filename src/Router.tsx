import { useEffect, useState, type JSX, } from "react";

const BASE = "/React-todo-list";

type RouteParams = Record<string, string>;

type RoutesComponent = (props: {params: RouteParams}) => JSX.Element;

const getPathName = (): string => {
    return window.location.hash 
    ? window.location.hash.replace("#", '') || '/'
    : window.location.pathname.replace(BASE, '')
}

const matchRoutes = (path: string, route: string): RouteParams | null => {
    const params: RouteParams = {}

    const pathName = path.split('/');
    const routeName = route.split('/');

    
    if (routeName.length !== pathName.length) return null;
    
    for (let i = 0; i < routeName.length; i++) {
        const routePart = routeName[i]!
        const pathPart = pathName[i]!

        if(routePart.startsWith(':')) {
            const paramName = routePart.slice(1);

            params[paramName] = pathPart
        } else if (pathPart !== routePart) {
            return null
        }
    }

    return params
}

export const useRouter = (): string => {
    const [path, setPath] = useState(getPathName())

    useEffect(() => {
        const changeLocation = () => {
            setPath(getPathName())
        }
    
        window.addEventListener('popstate', changeLocation);
    
        return () => {
            window.removeEventListener('popstate', changeLocation);
    
        }
    }, [])

    return path

}

const Router = ({ routes }: {routes: any}): JSX.Element => {
    const path = useRouter()

    for (const route in routes) {
        const params = matchRoutes(path, route)

        if(params) {
            const Page = routes[route] as RoutesComponent;
            return <Page params={params} />
        }
    }

    const NotFound = routes['*']
    return <NotFound params={{}} />
    
}

export default Router;