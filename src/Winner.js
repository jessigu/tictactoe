import React, { Component } from 'react'

class Winner extends Component {
    render() {
        let {winner} = this.props
        return (
            <h3>The Winner is: {winner}</h3>
        )
    }
}
export default Winner
