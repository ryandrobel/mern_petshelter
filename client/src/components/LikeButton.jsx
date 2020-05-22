import React, { useState } from 'react';

function Like() {

    const [count, setCount] = useState(0);

    return (
        <div>
            <button className="btn shadow m-4 bg-success text-light" onClick={() => setCount(count + 1)}>Likes {count}</button>
        </div>
    );
}

export default Like;