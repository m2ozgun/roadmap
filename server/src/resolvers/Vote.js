function card(parent, args, context) {
    return context.prisma.vote.findOne({ where: { id: parent.id } }).card()
  }
  
  function user(parent, args, context) {
    return context.prisma.vote.findOne({ where: { id: parent.id } }).user()
  }
  
  module.exports = {
    card,
    user,
  }