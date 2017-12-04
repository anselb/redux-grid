import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getColor } from '../utils/colors'
import { colorGridSquare } from '../actions/'

import GridSquare from './grid-square'

class GridBoard extends Component {
  constructor(props) {
    super(props)
  }

  makeGrid() {
    const { grid } = this.props
    return grid.map((rowArray, row) => {
      return rowArray.map((square, col) => {
        let color = square

        const k = row * grid[0].length + col;

        return (<GridSquare
            key={k}
            square={square}
            color={color}
            onColorChange={() => {
                this.props.colorGridSquare(row, col)
            }}>{square}</GridSquare>)
      })
    })
  }

  render () {
    return (
      <div className={`grid-board`}>
        {this.makeGrid()}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    grid: state.game
  }
}

const mapDispatchToProps = () => {
  return {
    colorGridSquare
  }
}

export default connect(mapStateToProps, mapDispatchToProps())(GridBoard)
