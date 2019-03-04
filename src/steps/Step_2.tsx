import React, {Component} from 'react';
import './Steps.css';
import Step_1, { Step_1Type } from "./Step_1";
import styled, { createGlobalStyle } from "styled-components";

/* Step 2: is move legal
Write a function that takes in a move for one 
of the two players, as well as the game data 
structure, and checks if it's legal for that 
player to make that move at this time in the game.
 */

const GlobalStyle = createGlobalStyle`
  body {
    font-style: normal;
    font-variant-ligatures: normal;
    font-variant-caps: normal;
    font-variant-numeric: normal;
    font-variant-east-asian: normal;
    font-weight: normal;
    font-stretch: normal;
    font-size: 14px;
    line-height: normal;
    font-family: 'Century Gothic', Futura, sans-serif;
    src: url("./fonts/CenturyGothic.ttf");
    margin: 20;
  }
`;
const GameContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 20px;
`;
const Status = styled.div`
  margin-bottom: 10px;
`;
const Moves = styled.ol``;
const GameBoard = styled.div``;
const GameInfo = styled.div`
  margin-left: 20px;
`;

type MyProps = {};
type MyState = {
  history: Step_1Type[];
  xIsNext: boolean;
  stepNumber: number;
};
export default class StepTwo extends React.Component<MyProps, MyState> {
  constructor(props: MyProps) {
    super(props);
    this.state = {
      history: [
        {
          grids: Array(9).fill(null)
        }
      ],
      stepNumber: 0,
      xIsNext: true
    };
  }
  jumpTo(step: number) {
    this.setState({
      stepNumber: step,
      xIsNext: step % 2 === 0
    });
  }
  handleClick(i: number) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.grids.slice();
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    const winner = this.calculateWinner(squares);
    this.setState({
      history: history.concat([
        {
          grids: squares
        }
      ]),
      
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext
    });
  }
  calculateWinner(squares: string[]) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

   render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = this.calculateWinner(current.grids);

    let status;
    if (winner) {
      status = "Winner: " + winner;
     } else if (this.state.stepNumber >= 9) {
       status = "It's a tie!"
     } else {  
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    } 
    return (
      <GameContainer>
      <GlobalStyle />
      <GameBoard>
          <Step_1
            grids={current.grids}
            onClick={(i: number) => this.handleClick(i)}
          />
          </GameBoard>
        <GameInfo>
          <Status>{status}</Status>
          
        </GameInfo>
      </GameContainer>
        
        );
    }
}

