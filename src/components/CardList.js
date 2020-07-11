import React from 'react'
import Card from './Card'

class CardList extends React.Component {

    render() {
        const cardsToRender = [
            {
              id: '1',
              title: 'Data import',
              description: 'Prisma turns your database into a GraphQL API 😎',
              list: 'inProgress',
              createdAt: 'Jun 01, 2020',
            },
            {
              id: '2',
              title: 'Service Onboarding',
              list: 'inProgress',
              description: 'The best GraphQL client',
              createdAt: 'Jun 02, 2020',
            },
          ]
        return (
            <div className="mw8 center ph3-ns">
                <div className="cf ph2-ns">
                    <div className="fl w-33 pa2">
                    <h1 class="f4 bg-near-white br3 tc black-60 mv0 pv2 ph2">In progress</h1>

                            {cardsToRender.map(card => <Card key={card.id} card={card} />)}
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
    }
}

export { CardList as default }