import { useEffect } from "react";

const focusabledElements = `
    a[href],
    button:not([disabled]),
    textarea:not([disabled]),
    input:not([disabled]),
    select:not([disabled]),
    [tabindex]:not([tabindex="-1"])
`

export const useFocusTrap = (container, isOpen, setIsOpen) => {
    useEffect(() => {
        if (!container?.current || !isOpen) return;

        const elements = Array.from(container.current.querySelectorAll(focusabledElements));

        if(elements.length === 0) return;
        const onKeyDown = (event) => {
            const { code, shiftKey } = event

            const firstElement =  elements[0]
            const lastElement = elements[elements.length - 1]
            const active = document.activeElement
        
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

        if (isOpen) {
            elements[0].focus()
            document.addEventListener('keydown', onKeyDown)
        }
        return () => {document.removeEventListener('keydown', onKeyDown)};
    }, [container, isOpen, setIsOpen])
}