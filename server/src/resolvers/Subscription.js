function newCardSubscribe(parent, args, context, info) {
    return context.pubsub.asyncIterator("NEW_CARD")
  }
  
  const newCard = {
    subscribe: newCardSubscribe,
    resolve: payload => {
      return payload
    },
  }

function newVoteSubscribe(parent, args, context, info) {
return context.pubsub.asyncIterator("NEW_VOTE")
}

const newVote = {
subscribe: newVoteSubscribe,
resolve: payload => {
    return payload
},
}
  
  module.exports = {
    newCard,
    newVote,
  }