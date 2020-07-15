import React from 'react'
import Card from './Card'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

export const FEED_QUERY = gql`
    query feedQuery($id: ID!) {
        feed(id: $id) {
            name
            id
            cards {
                id
                title
                description
                list
                postedBy {
                    id
                    name
                }
                votes {
                    id
                    user {
                        id
                    }
                }
            }
        }
    }

`


class CardList extends React.Component {

updateCacheAfterVote = (store, createVote, cardId) => {
    const data = store.readQuery({ query: FEED_QUERY })
    
    const votedCard = data.feed.cards.find(card => card.id === cardId)
    votedCard.votes = createVote.card.votes
    
    store.writeQuery({ query: FEED_QUERY, variables: {id: 2}, data })
    }
    
    render() {
        
        return (
            <div>
                <div className="mw8 center ph3-ns">
            <Query query={FEED_QUERY}
                    variables={{id: 2}}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>
            
                    const cardsToRender = data.feed.cards
            
                    return (
                            <div className="fl w-33 pa2">
                            <h1 class="f4 bg-near-white br3 tc black-60 mv0 pv2 ph2">{data.feed.name}</h1>
                                        {cardsToRender.map((card, index) => (
                                                <Card key={card.id} card={card} index={index} updateStoreAfterVote={this.updateCacheAfterVote}/>

                                        ))}
                            </div>
                    )
            }}
            </Query>
            <Query query={FEED_QUERY}
                    variables={{id: 1}}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>
            
                    const cardsToRender = data.feed.cards
            
                    return (
                            <div className="fl w-33 pa2">
                            <h1 class="f4 bg-near-white br3 tc black-60 mv0 pv2 ph2">{data.feed.name}</h1>
                                        {cardsToRender.map((card, index) => (
                                                <Card key={card.id} card={card} index={index} updateStoreAfterVote={this.updateCacheAfterVote}/>

                                        ))}
                            </div>
                    )
            }}
            </Query>
        </div>
        </div>
        )
    }
}

export { CardList as default }


