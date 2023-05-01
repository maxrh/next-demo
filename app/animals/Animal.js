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

        fetch("/animals", {
            method: "PUT",
            body: JSON.stringify(animal),
        })

        setTimeout(() => {
            console.log("You clicked!")
        }, 1000);

        setIsFetching(false);
        startTransition(() => {
            router.refresh();
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
                onChange={handleChange}
            />
            <p></p>
        </li>
    )
}