import { prisma } from '@/db';
import Animal from './Animal';

const getAnimals = async () => {
    const allAnimals = await prisma.animals.findMany();
    return allAnimals;
}

const AnimalList = async () => {
    const animals = await getAnimals()

    return ( 
        <main>
            <h1>These are the animals:</h1>
            
            <ul>
                {animals.map(animal => (
                    <Animal key={animal.id} animal={animal} />
                ))}
            </ul>
        </main>
     );
}
 
export default AnimalList;