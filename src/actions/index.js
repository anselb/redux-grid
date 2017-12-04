export const COLOR_GRID_SQUARE = "COLOR_GRID_SQUARE"

export const colorGridSquare = (row, col) => {
    return {
        type: COLOR_GRID_SQUARE,
        payload: { row, col }
    }
}
