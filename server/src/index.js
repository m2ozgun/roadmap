const { GraphQLServer } = require('graphql-yoga')
const { PrismaClient } = require('@prisma/client')
const { PubSub } = require('graphql-yoga')

const Query = require('./resolvers/Query')
const Mutation = require('./resolvers/Mutation')
const User = require('./resolvers/User')
const Card = require('./resolvers/Card')
const Subscription = require('./resolvers/Subscription')
const Vote = require('./resolvers/Vote')

// 2
const prisma = new PrismaClient()
const pubsub = new PubSub()


const resolvers = {
  Query,
  Mutation,
  User,
  Card,
  Subscription,
  Vote,
}

// 3
const server = new GraphQLServer({
    typeDefs: './src/schema.graphql',
    resolvers,
    context: request => {
      return {
        ...request,
        prisma,
        pubsub
      }
    },
  })
server.start(() => console.log(`Server is running on http://localhost:4000`))