import React from 'react';
import {createRoot} from 'react-dom/client';
import Test from "./Test.js";

window.localStorage.setItem('debug', '*');
const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
    <React.StrictMode>
        <Test/>
    </React.StrictMode>
);
