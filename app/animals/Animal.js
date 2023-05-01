"use client";

import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";

export default function Animal ({ animal }) {

    const router = useRouter();

    const [isFetching, setIsFetching] = useState(false);
    const [isPending, startTransition] = useTransition();

    const isMutating = isFetching || isPending;

    const handleChange = async () => {
        setIsFetching(true);

        const updatedAnimal = { ...animal, adopted: !animal.adopted };

        console.log(updatedAnimal);
        
        fetch(`/animals/api/${animal.id}`, {
            method: "PUT",
            body: JSON.stringify(updatedAnimal),
        }).then(() => {
            setIsFetching(false);
            startTransition(() => {
                router.refresh();
            });
        }).catch((error) => {
            console.error(error);
            setIsFetching(false);
        });
        
    }

    return (
        <li className={` ${isMutating ? 'opacity-30' : 'opacity-100'}`}>
            <p>{animal.name}</p>
            <label htmlFor={animal.name}>Is adopted</label>
            <input
                type="checkbox"
                name={animal.name}
                id={animal.name}
                checked={animal.adopted}
                onChange={() => handleChange()}
            />
            <p></p>
        </li>
    )
}