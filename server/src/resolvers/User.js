function cards(parent, args, context) {
    return context.prisma.user.findOne({ where: { id: parent.id } }).cards()
  }
  
  module.exports = {
    cards,
  }