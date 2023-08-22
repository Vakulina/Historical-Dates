//react 18 https://react.dev/reference/react/useSyncExternalStore#subscribing-to-a-browser-api

import { MutableRefObject, useMemo, useSyncExternalStore } from "react"

function subscribe(callback:  (e: Event) => void) {
    window.addEventListener("resize", callback)
    window.addEventListener("load", callback)
    return () => {
        window.removeEventListener("resize", callback)
        window.removeEventListener("load", callback)
    }
}

function getSnapshot (ref: MutableRefObject<HTMLElement | null>) { 
    return JSON.stringify({
    width: ref.current?.offsetWidth ?? 0,
    height: ref.current?.offsetHeight ?? 0,
})
}

export const useDimensions = (ref: MutableRefObject<HTMLElement | null>) => {
    const dimensions = useSyncExternalStore(
        subscribe,
        () => getSnapshot(ref)
    )
    return useMemo(() => JSON.parse(dimensions), [dimensions])
}

