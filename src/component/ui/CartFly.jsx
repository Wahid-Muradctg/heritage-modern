import React, { useEffect, useState } from 'react';

const CartFly = ({ from, targetRef, product }) => {
    const [pos, setPos] = useState(null);

    useEffect(() => {
        const frame = requestAnimationFrame(() => requestAnimationFrame(() => {
            const target = targetRef.current?.getBoundingClientRect();
            const tx = target ? target.left + target.width / 2 : window.innerWidth - 30;
            const ty = target ? target.top + target.height / 2 : window.innerHeight - 120;
            setPos({ x: tx, y: ty });
        }));
        return () => cancelAnimationFrame(frame);
    }, []);

    return (
        <div
            className="fixed top-0 left-0 z-100 pointer-events-none"
            style={{
                transform: `translate(${pos ? pos.x : from.x}px, ${pos ? pos.y : from.y}px) translate(-50%, -50%) scale(${pos ? 0.3 : 1})`,
                opacity: pos ? 0.4 : 1,
                transition: pos ? 'transform 0.8s cubic-bezier(0.22,1,0.36,1), opacity 0.8s' : 'none',
            }}
        >
            <img src={product.image} alt={product.name}
                className="size-10 md:size-14 rounded-full object-cover border-2 border-(--primary-color) shadow-lg" />
        </div>
    );
};

export default CartFly;