type getItem = (KEY: string) => string | null;
type setItem = (KEY: string, value: string) => void;

type useLocalStorage = {
    getItem: getItem;
    setItem: setItem;
}

export const useLocalStorage = (): useLocalStorage => {
    const getItem: getItem = (KEY) => localStorage.getItem(KEY);

    const setItem: setItem = (KEY, value) => localStorage.setItem(KEY, value)

    return {
        getItem,
        setItem,
    }

}