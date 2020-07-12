async function feed(parent, args, context, info) {

    const where = args.filter
      ? {
        OR: [
          { description: { contains: args.filter } },
          { title: { contains: args.filter } },
        ],
        feedId: {equals: Number(args.id) }}
      : {feedId: {equals: Number(args.id) }}
  
    const cards = await context.prisma.card.findMany({
      where,
      skip: args.skip,
      take: args.take,
      orderBy: args.orderBy,
    })
  
    const count = await context.prisma.card.count({ where })
    const id = Number(args.id)
    const feed = await context.prisma.feed.findMany({where: {id: {equals: Number(args.id) }}}).then(response => response)
    const data = {
      ...feed[0],
      id,
      cards,
      count,
    }
    return data
  }
  module.exports = {
    feed,
  }