import React from 'react'
import Card from './Card'
import { Query } from 'react-apollo'
import gql from 'graphql-tag'

const FEED_QUERY = gql`
{
    feed {
        cards {
            id
            title
            description
            list
        }
    }
}
`


class CardList extends React.Component {

    render() {
        
        return (
            <Query query={FEED_QUERY}>
                {({ loading, error, data }) => {
                    if (loading) return <div>Fetching</div>
                    if (error) return <div>Error</div>
            
                    const cardsToRender = data.feed.cards
            
                    return (
                        <div className="mw8 center ph3-ns">
                            <div className="cf ph2-ns">
                                <div className="fl w-33 pa2">
                                <h1 class="f4 bg-near-white br3 tc black-60 mv0 pv2 ph2">In progress</h1>
                                        {cardsToRender.map(card => (
                                                <Card key={card.id} card={card} />

                                        ))}       
                                </div>
                            <div className="fl w-33 pa2">
                            <h1 class="f4 bg-near-white br3 tc black-60 mv0 pv2 ph2">Soon</h1>

                                        {cardsToRender.map(card => (
                                                <Card key={card.id} card={card} />

                                        ))}                
                            </div>
                            <div className="fl w-33 pa2">
                            <h1 class="f4 bg-near-white br3 tc black-60 mv0 pv2 ph2">Future</h1>

                                        {cardsToRender.map(card => (
                                                <Card key={card.id} card={card} />

                                        ))}
                            </div>
                            </div>
                        </div>
                    )
            }}
        </Query>
        )
    }
}

export { CardList as default }


