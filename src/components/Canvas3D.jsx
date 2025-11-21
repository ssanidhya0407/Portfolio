import React from 'react';

const Canvas3D = () => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 0,
            pointerEvents: 'none',
            background: 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(41, 151, 255, 0.15), transparent 50%), radial-gradient(ellipse 60% 50% at 50% 120%, rgba(191, 90, 242, 0.15), transparent 50%)',
            opacity: 0.4
        }} />
    );
};

export default Canvas3D;
