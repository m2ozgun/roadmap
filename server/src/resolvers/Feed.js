function cards(parent, args, context) {
    return context.prisma.feed.findOne({ where: { id: parent.id } }).cards()
  }

  module.exports = {
    cards,
  }