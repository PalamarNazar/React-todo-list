export const useLocalStorage = () => {
    const getItem = (KEY) => localStorage.getItem(KEY);

    const setItem = (KEY, value) => localStorage.setItem(KEY, value)

    return {
        getItem,
        setItem,
    }

}