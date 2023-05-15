import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import Nav from './Components/Nav';
import AuthButton from './Components/AuthButtons';
``;
import './App.css';

function App() {
    return (
        <div className="grid grid-cols-5">
            <Nav />
            <main className="px-12 py-6 col-span-4 bg-cyan-50">
                <AuthButton />
            </main>
        </div>
    );
}

export default App;
