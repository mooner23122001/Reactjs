import React from 'react';
import { useState } from 'react';

const Test = () => {

    const [count, setCount] = useState(0)
    const handleClick = () => setCount(count + 1)

    return (
        <div>
            Current count {count}.
            <div>
                <button onClick={handleClick}>Increment Count!</button>
            </div>
        </div>
    );
};

export default Test;