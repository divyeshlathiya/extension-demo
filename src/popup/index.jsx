import React from 'react';
import { createRoot } from 'react-dom/client';

function App() {
    return (
        <div>
            <h1>Hello Wallet</h1>
            <p>Basic Extension Popup</p>
        </div>
    );
}

const root = createRoot(document.getElementById('root'));
root.render(<App />);