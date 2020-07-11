import React from 'react'

class CreateCard extends React.Component {
    state = {
        title: '',
        description: '',
        list: '',
    }

    render() {
        const { title, description, list } = this.state
        return (
            <div>
                <div className="flex flex-column mt3">
                    <input
                        className="mb2"
                        value={description}
                        onChange={e => this.setState({ description: e.target.value })}
                        type="text"
                        placeholder="A description for the card"
                    />
                    <input
                        className="mb2"
                        value={title}
                        onChange={e => this.setState({ title: e.target.value })}
                        type="text"
                        placeholder="The title for the link"
                    />
                    <input
                        className="mb2"
                        value={list}
                        onChange={e => this.setState({ list: e.target.value })}
                        type="text"
                        placeholder="The list of link"
                    />               
                </div>
                <button>Submit</button>
            </div>
        )
    }
}

export { CreateCard as default}