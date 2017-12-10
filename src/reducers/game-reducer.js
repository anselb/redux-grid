import { COLOR_GRID_SQUARE } from '../actions'

import { gridDefault } from '../utils/shapes'

import store from '../App'

import { colorsCount } from '../utils/colors'

const gameReducer = (state = gridDefault(), action) => {
  let grid = state

  switch(action.type) {
    case COLOR_GRID_SQUARE:
        const { row, col } = action.payload
        const newGrid2 = [ ...grid ]
        newGrid2[row][col] === (colorsCount() - 1) ? newGrid2[row][col] = 0 : newGrid2[row][col] += 1
        return newGrid2

    default:
      return state
  }
}

export default gameReducer
