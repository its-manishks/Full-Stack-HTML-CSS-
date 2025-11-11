import React from 'react';

function EventDemo() {
    const handleClick = () => alert('Button clicked!');
    const handleHover = () => console.log('Mouse entered!');
    const handleKey = (e) => console.log('Key pressed:', e.key);

    return (
        <div style={{ marginTop: '20px' }}>
            <h2>🎯 Event Handling Demo</h2>
            <button onClick={handleClick}>Click Me</button>
            <div
                onMouseEnter={handleHover}
                style={{ backgroundColor: '#f0f0f0', padding: '10px', margin: '10px' }}
            >
                Hover here
            </div>
            <input type="text" onKeyDown={handleKey} placeholder="Type something..." />
        </div>
    );
}

export default EventDemo;
