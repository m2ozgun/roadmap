import React from 'react';
import { Typography, List, Button, Space, Col, Card as AntCard } from 'antd';
import { CaretUpOutlined } from '@ant-design/icons';
import { Query, Mutation } from 'react-apollo'
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

const VOTE_MUTATION = gql`
  mutation VoteMutation($cardId: ID!) {
    vote(cardId: $cardId) {
      id
      card {
       id
        votes {
          id
          user {
            id
          }
        }
      }
      user {
        id
      }
    }
  }
`


const Card = (props) => {
    const updateCacheAfterVote = (store, createVote, cardId) => {
        const data = store.readQuery({ query: FEED_QUERY })
        
        const votedCard = data.feed.cards.find(card => card.id === cardId)
        votedCard.votes = createVote.card.votes
        
        store.writeQuery({ query: FEED_QUERY, variables: {id: props.feedId}, data })
        }
    
        
    return (
        <Query query={FEED_QUERY}
            variables={{id: props.feedId}}>
            {({ loading, error, data }) => {
                if (loading) return <div>Fetching</div>
                if (error) return <div>Error</div>


                return (
                    <Col span={8}>
                    <AntCard type="inner" title={data.feed.name} extra={<a href="#">More</a>}>
                    <List
                        itemLayout="vertical"
                        dataSource={data.feed.cards}
                        renderItem={item => {
                            return (
                            <List.Item>
                                <List.Item.Meta
                                avatar={
                                    <Mutation
                                        mutation={VOTE_MUTATION}
                                        variables={{ cardId: item.id }}
                                        update={(store, { data: { vote } }) =>
                                            updateCacheAfterVote(store, vote, item.id)
                                        }
                                        >
                                        {voteMutation => (

                                            <Button type="secondary" shape="rectangle" size="small" onClick={voteMutation}>
                                                <Space direction="vertical">
                                                    <CaretUpOutlined />
                                                    <Typography.Text>{item.votes.length}</Typography.Text>

                                                </Space>
                                            </Button>

                                        )}
                                    </Mutation>
                                   
                                }
                                title={item.title}
                                description={item.description}
                                
                                />
                                
                            </List.Item>
                            )
                        }
                        
                       }
                    />

                    </AntCard>
                    </Col>
                )
        }}
        </Query>

    )
}

export { Card as default }