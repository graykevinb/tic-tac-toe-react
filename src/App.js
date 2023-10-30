import React, { setState } from 'react';
import Board from './Board';
export default function App() {

    return (
        <div className="App">
            <Board size={3}></Board>
        </div>
    );
}