import { prisma } from '@/db';

export async function PUT(request, response) {
    const animal = await request.json();

    const updatedAnimal = await prisma.animal.update({
        where: {
            _id: animal.id
        },
        data: {
            adopted: !animal.adopted
        }
    });

    return response.json({updatedAnimal});

}