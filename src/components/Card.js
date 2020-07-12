import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleUp } from '@fortawesome/free-solid-svg-icons'
import { AUTH_TOKEN } from './constants'
import { Mutation } from 'react-apollo'
import gql from 'graphql-tag'

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

class Card extends React.Component {
    
    render() {
        const authToken = localStorage.getItem(AUTH_TOKEN)
        return (
            <div>
                <div className="f4 ba br3 black-60 mv3 pv2 ph2 flex">
                    <div class="flex items-center justify-center">
                    {authToken && (
                        <Mutation
                            mutation={VOTE_MUTATION}
                            variables={{ cardId: this.props.card.id }}
                            update={(store, { data: { vote } }) =>
                                this.props.updateStoreAfterVote(store, vote, this.props.card.id)
                            }
                            >
                            {voteMutation => (
                                <p onClick={voteMutation} class="f5 pointer no-underline black bg-animate hover-bg-green hover-white br3 flex flex-column items-center pa3 ba border-box mr2">
                                    <FontAwesomeIcon icon={faAngleUp} />
                                    <span class="pt2">{this.props.card.votes.length}</span>
                                </p>
                            )}
                        </Mutation>

                    )}

                    </div>
                    <div>
                        <h2 className="lh-copy f5 mb1 mt1">{this.props.card.title} </h2>
                        <p className="lh-copy f6 mb1 mt1">{this.props.card.description}</p>
                        <p className="lh-copy f6 i mb1 mt1">{this.props.card.createdAt}</p>
                    </div>

                </div>
            </div>
        )
    }
}

export { Card as default }