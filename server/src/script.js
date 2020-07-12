const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
    const newCard = await prisma.card.create({
        data: {
            description: "asdsadasdasd",
            url: "asdasdas.com"
        }
    })
    const allCards = await prisma.card.findMany()
    console.log(allCards)
}

main()
  .catch(e => {
    throw e
  })
  // 5
  .finally(async () => {
    await prisma.disconnect()
  })