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
<div class="mw8 center ph3-ns">
  <div class="cf ph2-ns">
    <div class="fl w-33 pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-33 pa2">
      <div class="outline bg-white pv4"></div>
    </div>
    <div class="fl w-33 pa2">
      <div class="outline bg-white pv4"></div>
    </div>
  </div>
</div>
        )
    }
}

export { CardList as default }