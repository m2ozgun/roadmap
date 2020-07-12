import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'

const POST_MUTATION = gql`
  mutation PostMutation($description: String!, $title: String!, $list: String!) {
    post(description: $description, title: $title, list: $list) {
      id
      title
      description
      list
    }
  }
`



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
                        placeholder="The title for the card"
                    />
                    <input
                        className="mb2"
                        value={list}
                        onChange={e => this.setState({ list: e.target.value })}
                        type="text"
                        placeholder="The list of card"
                    />               
                </div>
                <Mutation mutation={POST_MUTATION} variables={{ description, title, list }}>
                    {postMutation => <button onClick={postMutation}>Submit</button>}
                </Mutation>
            </div>
        )
    }
}

export { CreateCard as default}