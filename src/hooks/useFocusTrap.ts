import { useEffect, type Dispatch, type RefObject, type SetStateAction } from "react";

const focusabledElements = `
    a[href],
    button:not([disabled]),
    textarea:not([disabled]),
    input:not([disabled]),
    select:not([disabled]),
    [tabindex]:not([tabindex="-1"])
`

type UseFocusTrap = (container: RefObject<HTMLElement | null>, 
    isOpen: boolean, 
    setIsOpen: Dispatch<SetStateAction<boolean>>,
    triger?: string) => void;

export const useFocusTrap: UseFocusTrap = (container, isOpen, setIsOpen, triger) => {
    
    useEffect(() => {
        if (!container?.current || !isOpen) return;
    
        const elements: HTMLElement[] = Array.from(container.current.querySelectorAll(focusabledElements));

        if(elements.length === 0) return;

        const firstElement =  elements[0]
        const lastElement = elements[elements.length - 1]

        if (!firstElement || !lastElement) return;
        
        const onKeyDown = (event: KeyboardEvent) => {
            const active = document.activeElement as HTMLElement | null;

            const { code, shiftKey } = event

            if (code === 'Tab' && shiftKey &&  active === firstElement) {
                event.preventDefault();
                lastElement.focus()
            } else if (code === 'Tab' && !shiftKey && active === lastElement) {
                event.preventDefault();
                firstElement.focus()
            } else if (code === 'Escape' && !shiftKey) {
                event.preventDefault();
                setIsOpen(false);
            }
            
        }


        firstElement.focus()
        document.addEventListener('keydown', onKeyDown)
        
        return () => {document.removeEventListener('keydown', onKeyDown)};
    }, [container, isOpen, triger, setIsOpen])
}