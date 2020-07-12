function postedBy(parent, args, context) {
    return context.prisma.card.findOne({ where: { id: parent.id } }).postedBy()
  }

function feed(parent, args, context) {
    return context.prisma.feed.findOne({ where: { id: parent.id } }).feed()
  }

  function votes(parent, args, context) {
    return context.prisma.card.findOne({ where: { id: parent.id } }).votes()
  }

  module.exports = {
    postedBy,
    votes,
    feed,
  }