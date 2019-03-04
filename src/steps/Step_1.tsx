import React, { Component } from 'react';
import './Steps.css';
import Grid from './grid'
import styled, { css } from "styled-components";
const BoardContainer = styled.div``;

const BoardRow = styled.div`
  ${css`
    &:after {
      clear: both;
      content: "";
      display: table;
    }
  `}
`;

/* 
Step 1: game data structure
Please implement a basic data structure representing 
the tic tac toe game. You should not add any functions 
at this point; we only want a data structure that can 
store the current game state data.
 */

type MyProps = {
    grids: string[]
    onClick: (key: number) => void;
};

export type Step_1Type = {
    grids: string[];
};

class Step_1 extends React.Component<MyProps> {
  
    renderGrid(i: number) {
        return (
          <Grid
            value={this.props.grids[i]}
            onClick={() => this.props.onClick(i)}
          />
        );
      }

  render() {
    return (
      <div className="container">
      <div className="title">
      <h1>Tic Tac Toe App</h1>
      <div className = "border">
      {this.renderGrid(0)}
      {this.renderGrid(1)}
      {this.renderGrid(2)}
      {this.renderGrid(3)}
      {this.renderGrid(4)}
      {this.renderGrid(5)}
      {this.renderGrid(6)}
      {this.renderGrid(7)}
      {this.renderGrid(8)}
      </div>
      </div>
      </div>
    );
   /*  return (
      <BoardContainer>
        <BoardRow>
          {this.renderGrid(0)}
          {this.renderGrid(1)}
          {this.renderGrid(2)}
        </BoardRow>
        <BoardRow>
          {this.renderGrid(3)}
          {this.renderGrid(4)}
          {this.renderGrid(5)}
        </BoardRow>
        <BoardRow>
          {this.renderGrid(6)}
          {this.renderGrid(7)}
          {this.renderGrid(8)}
        </BoardRow>
      </BoardContainer>
    ); */
  }
}

export default Step_1;
