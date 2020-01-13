import React from 'react'

class Card extends React.Component {
    render() {
        return (
            <div className="card">
            <div className="card-body">
            <p>{this.props.data.text}</p>
            
            </div>
            </div>
        )
    }

}


export default Card
