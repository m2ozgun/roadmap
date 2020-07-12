const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { APP_SECRET, getUserId } = require('../utils')

async function signup(parent, args, context, info) {
    // 1
    const password = await bcrypt.hash(args.password, 10)
    
    // 2
    const user = await context.prisma.user.create({ data: { ...args, password } })
  
    // 3
    const token = jwt.sign({ userId: user.id }, APP_SECRET)
  
    // 4
    return {
      token,
      user,
    }
  }
  
  async function login(parent, args, context, info) {
    // 1
    const user = await context.prisma.user.findOne({ where: { email: args.email } })
    if (!user) {
      throw new Error('No such user found')
    }
  
    // 2
    const valid = await bcrypt.compare(args.password, user.password)
    if (!valid) {
      throw new Error('Invalid password')
    }
  
    const token = jwt.sign({ userId: user.id }, APP_SECRET)
  
    // 3
    return {
      token,
      user,
    }
  }
  
  function post(parent, args, context, info) {
    const userId = getUserId(context)
  
    const newCard = context.prisma.card.create({
      data: {
        title: args.title,
        list: args.list,
        description: args.description,
        postedBy: { connect: { id: userId } },
        feed: { connect: { id: Number(args.feedId) } },

      }
    })

    context.pubsub.publish("NEW_CARD", newCard)

    return newCard
  }

  function feed(parent, args, context, info) {
    const userId = getUserId(context)
  
    const newFeed = context.prisma.feed.create({
      data: {
        name: args.name,
      }
    })

    context.pubsub.publish("NEW_FEED", newFeed)

    return newFeed
  }
  async function vote(parent, args, context, info) {
    // 1
    const userId = getUserId(context)
  
    // 2
    const vote = await context.prisma.vote.findOne({
      where: {
        cardId_userId: {
          cardId: Number(args.cardId),
          userId: userId
        }
      }
    })
  
    if (Boolean(vote)) {
      throw new Error(`Already voted for card: ${args.cardId}`)
    }
  
    // 3
    const newVote = context.prisma.vote.create({
      data: {
        user: { connect: { id: userId } },
        card: { connect: { id: Number(args.cardId) } },
      }
    })
    context.pubsub.publish("NEW_VOTE", newVote)
  
    return newVote
  }

  module.exports = {
    signup,
    login,
    post,
    vote,
    feed,
  }