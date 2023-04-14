import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import WAVES from 'vanta/dist/vanta.fog.min';

const MyComponent: React.FC = (props: any) => {
    const myRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (myRef.current) {
            WAVES({
                el: myRef.current,
                THREE: THREE,
                mouseControls: false,
                touchControls: false,
                gyroControls: false,
                minHeight: 50.00,
                minWidth: 50.00,
                highlightColor: 0xc2ff,
                zoom: 0.5,
                speed: 1,
            });
        }
    }, [myRef]);

    return (<div ref={myRef} style={{ height: '100vh' }}>
        {props.children}
    </div>);
};

export default MyComponent;