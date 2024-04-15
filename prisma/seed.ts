import { prisma } from '../src/lib/prisma'

async function seed() {
    await prisma.event.create({
        data: {
            id: '80612395-0250-4d35-b208-7d32ad49c8cc',
            title: 'Unite Summit',
            slug: 'unite-summit',
            details: 'Seed',
            maximumAttendees: 120,
        }
    })
}

seed()
.then(() => {
    console.log('Database seeded!')
    prisma.$disconnect()
})
.catch(err => console.log(err))