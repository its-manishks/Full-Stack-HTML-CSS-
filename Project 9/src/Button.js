import React, { useState } from 'react';

function Button({ text, color }) {
    const [count, setCount] = useState(0);

    const handleClick = () => setCount(count + 1);

    return (
        <button
            onClick={handleClick}
            style={{
                backgroundColor: color || 'lightblue',
                border: 'none',
                borderRadius: '6px',
                padding: '10px 20px',
                margin: '10px',
            }}
        >
            {text} — Clicked {count} times
        </button>
    );
}

export default Button;
