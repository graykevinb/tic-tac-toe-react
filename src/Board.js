import React, { setState, useState } from 'react';

export default function Board(props) {
    const [player, setPlayer] = useState('X');

    const clickHandler = () => {
        setPlayer(player === 'X' ? 'O' : 'X');
    };
    const makeTable = () => {
        let rows = [];
        for (let i = 0; i < props.size; i++) {
            rows.push(<Row key={i} size={props.size} clickHandler={clickHandler} player={player}></Row>)
        }
        return rows;
    }
    return (
        <div id="board-container">
            <table>
                <tbody id="board">
                    {makeTable()}
                </tbody>
            </table>
        </div>
    );
}

const Row = (props) => {
    let cells = [];
    for (let j = 0; j < props.size; j++) {
        cells.push(<Cell key={j} onClick={props.clickHandler} player={props.player}>hi</Cell>);
    }
    return (
        <tr>
            {cells}
        </tr>
    );
}

class Cell extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player: '',
            animation: "",
        }
    }

    componentDidUpdate(_prevProps, prevState) {
        if(this.state.animation === "badMove" && prevState.animation === "badMove") {
            this.setState({animation: ""})
        } else if(this.state.animation !== "badMove" && prevState.animation === "badMove") {
            this.setState({animation: "badMove"});
        }
    }

    render() {
        const clicked = () => {
            if(this.state.player === '') {
                this.setState({player: this.props.player});
                this.props.onClick();
            } else {
                /*if(this.state.animation === "badMove") {

                    this.setState({animation: ""}); // reset animation
                    console.log("reset animation");
                } else {
                    this.setState({animation: "badMove"});
                }*/
                this.setState({animation: "badMove"});
                //this.setState({animation: "badMove"});
            }
        }
        return <td onClick={clicked} className={this.state.animation}>{this.state.player}</td>;
    }
}