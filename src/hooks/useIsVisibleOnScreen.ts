import { RefObject, useEffect, useMemo, useState } from "react"

export const useIsVisibleOnScreen = (ref: RefObject<HTMLElement>) => {
    const [isVisible, setIsVisible] = useState(false)
  
    const observer = useMemo(() => new IntersectionObserver(([entry]) => setIsVisible(entry.isIntersecting)), []);

    useEffect(() => {
        if(ref.current) {
            observer.observe(ref.current)
        }
        return () => observer.disconnect()
    }, [])
  
    return isVisible
}
