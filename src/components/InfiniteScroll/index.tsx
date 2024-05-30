/* eslint-disable react-hooks/exhaustive-deps */
import { ReactElement, useEffect, useRef } from "react"
import { useIsVisibleOnScreen } from "../../hooks/useIsVisibleOnScreen";
import { SkeletonMovie } from "../Skeleton";

interface InfiniteScroll {
    children:  ReactElement;
    hasMoreElements?:  boolean;
    onLoad?: () => void
}

export const InfiniteScrollComponent = ({ children, hasMoreElements = false, onLoad }: InfiniteScroll) => {
    const scrollElementRef = useRef<null | HTMLDivElement>(null);
    const elementIsVisible = useIsVisibleOnScreen(scrollElementRef);

    useEffect(() => {
        if(elementIsVisible && hasMoreElements) {
            onLoad && onLoad();
        }
    }, [elementIsVisible])

    return (
      <>
        {children}
        <span ref={scrollElementRef}>
            {
                hasMoreElements ? <SkeletonMovie rows={1} /> : <></>
            }
        </span>
        {
            hasMoreElements ? <SkeletonMovie rows={10} /> : <></>
        }
      </>
    );
}
