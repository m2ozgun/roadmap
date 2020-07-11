import React from 'react'

class Link extends React.Component {
    
    render() {
        return (
            <div>
                <div>
                {this.props.card.title} - {this.props.card.description} ({this.props.card.createdAt})
                </div>
            </div>
        )
    }
}

export { Link as default }