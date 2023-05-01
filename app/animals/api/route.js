import { prisma } from '@/db';

export async function PUT(req, res) {
    const { id } = req.query;

    console.log(req.query);
    const animal = await prisma.animal.findUnique({
        where: { id },
    });

    if (!animal) {
        return res.status(404).json({ message: 'Animal not found' });
    }

    const updatedAnimal = await prisma.animal.update({
        where: { id },
        data: { adopted: !animal.adopted }
    });

    console.log(updatedAnimal);

    return response.json({ updatedAnimal });

}