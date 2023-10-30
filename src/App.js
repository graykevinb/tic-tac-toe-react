import React, { setState } from 'react';
import Board from './Board';
export default function App() {
  const [player] = React.useState('X');
  setState({player: player === 'X' ? 'O' : 'X'});
    return (
        <div className="App">
            <Board size={3}></Board>
        </div>
    );
}