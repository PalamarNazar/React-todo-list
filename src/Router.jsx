import { useEffect, useState } from "react";

const matchRoutes = (path, route) => {
    const pathName = path.split('/');
    const routeName = route.split('/');

    const params = {}
    
    if (routeName.length !== pathName.length) return null;
    
    for (let i = 0; i < routeName.length; i++) {
        if(routeName[i].startsWith(':')) {
            const paramName = routeName[i].slice(1);

            params[paramName] = pathName[i]
        } else if (pathName[i] !== routeName[i]) {
            return null
        }
    }

    return params
}

export const useRouter = () => {
    const [path, setPath] = useState(window.location.pathname.replace('/React-todo-list', ''))

    useEffect(() => {
        const changeLocation = () => {
            setPath(window.location.pathname.replace('/React-todo-list', ''))
        }
    
        window.addEventListener('popstate', changeLocation);
    
        return () => {
            window.removeEventListener('popstate', changeLocation);
    
        }
    }, [])

    return path

}

const Router = ({ routes }) => {
    const path = useRouter()

    for (const route in routes) {
        const params = matchRoutes(path, route)

        if(params) {
            const Page = routes[route];
            return <Page params={params} />
        }
    }

    const NotFound = routes['*']
    return <NotFound />
    
}

export default Router;