import { useEffect, useState } from 'react';

function useGyroscopic() {
    const [vx, setVx] = useState(0);
    const [vy, setVy] = useState(0);
    const [lastX, setLastX] = useState(0);
    const [lastY, setLastY] = useState(0);
    const [lastTimestamp, setLastTimestamp] = useState(0);

    useEffect(() => {
        function handleMouseMove(event: MouseEvent) {
            const { clientX, clientY } = event;
            const timestamp = Date.now();


            if (lastTimestamp !== 0) {
                const dx = clientX - lastX;
                const dy = clientY - lastY;
                const dt = timestamp - lastTimestamp;
                const dtSec = dt / 1000;
                const scale = 9.8;
                const newVx = dx / dtSec ** 2 / scale;
                const newVy = dy / dtSec ** 2 / scale;
                const factor = 15;
                setVx(Math.max(Math.min(newVx, factor), -factor));
                setVy(Math.max(Math.min(newVy, factor), -factor));
            }

            setLastTimestamp(timestamp);
            setLastX(clientX);
            setLastY(clientY);
        }

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [lastTimestamp, lastX, lastY]);

    return { vx, vy };
}

export default useGyroscopic;
