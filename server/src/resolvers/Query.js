async function feed(parent, args, context, info) {
    const where = args.filter
      ? {
        OR: [
          { description: { contains: args.filter } },
          { title: { contains: args.filter } },
        ],
      }
      : {}
  
    const cards = await context.prisma.card.findMany({
      where,
      skip: args.skip,
      take: args.take,
      orderBy: args.orderBy,
    })
  
    const count = await context.prisma.card.count({ where })

    return {
      cards,
      count,
    }
  }

  module.exports = {
    feed,
  }