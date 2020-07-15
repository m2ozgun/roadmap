import React from 'react'
import gql from 'graphql-tag'
import { Mutation } from 'react-apollo'
import { FEED_QUERY } from './CardList'

const POST_MUTATION = gql`
  mutation PostMutation($feedId: ID!, $description: String!, $title: String!, $list: String!) {
    post(feedId: $feedId, description: $description, title: $title, list: $list) {
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
        feedId: -1,
    }

    render() {
        const { title, description, list, feedId } = this.state

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
                    <input
                        className="mb2"
                        value={feedId}
                        onChange={e => this.setState({ feedId: parseInt(e.target.value) })}
                        type="text"
                        placeholder="The feed of card"
                    /> 
    
                </div>
                <Mutation 
                    mutation={POST_MUTATION} 
                    variables={{ feedId, description, title, list  }}
                    onCompleted={() => this.props.history.push('/')}
                    update={(store, { data: { post } }) => {
                        const data = store.readQuery({ query: FEED_QUERY })
                        data.feed.links.unshift(post)
                        store.writeQuery({
                        query: FEED_QUERY,
                        data
                        })
                    }}
                    >
                    {postMutation => <button onClick={postMutation}>Submit</button>}
                </Mutation>
            </div>
        )
    }
}

export { CreateCard as default}