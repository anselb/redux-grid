import React, { Component } from 'react'
import { connect } from 'react-redux'

import { getColor } from '../utils/colors'

class SpaceView extends Component {
  constructor(props) {
    super(props)

    this.canvas = null
    this.ctx = null

  }

  componentDidMount() {
    this.canvas = this.refs.canvas
    this.ctx = this.canvas.getContext('2d')
    this.ctx.fillStyle = '#eaeaea'
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }

// [{x, y, color}, {...}] <= [[0,0,2,0,3], [], ...]

  renderPixels(pixels) {
      const pixelSize = 4

      if (!this.ctx) {
          return
      }

      for(let row in pixels) {
          for(let col in pixels[row]) {
              this.ctx.fillStyle = getColor(pixels[row][col])
              this.ctx.fillRect(col * pixelSize, row * pixelSize, pixelSize, pixelSize)
          }
      }
  }

  render () {

      this.renderPixels(this.props.pixels)

    return (
        <div>
            <canvas
              style={{width: '80px', margin: 'auto', display: 'block'}}
              ref='canvas'
              width='80'
              height='80'></canvas>
        </div>
    )
  }
}

// export default SpaceView

const mapStateToProps = (state) => {
    return { pixels: state.game }
}

export default connect(mapStateToProps)(SpaceView)
