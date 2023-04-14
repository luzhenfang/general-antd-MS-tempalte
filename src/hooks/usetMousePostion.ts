import { useCallback, useEffect, useState } from "react"
import { ReactHook } from "."
import Pos from "./model/pos"



const useMousePosition = (): ReactHook<Pos> => {
    let [pos, setPos] = useState<Pos>({ x: 0, y: 0 })
    let onMouseMove = useCallback((event: MouseEvent) => setPos({ x: event.clientX, y: event.clientY }), [])
    useEffect(() => {
        window.addEventListener("mousemove", onMouseMove)
        return () => window.removeEventListener("mousemove", onMouseMove)
    }, [])
    return [pos, setPos]
}

export default useMousePosition;


