import Link from "next/link";

const getData = async () => {
    const result = await fetch("https://jsonplaceholder.typicode.com/albums")
    if(!result.ok) { throw new Error("Failed to Fetch data");}
    return result.json()
}

const Albums = async () => {
    const albums = await getData()
    //console.log(albums)

    return ( 
        <main>
            <h1 className="text-2xl font-extrabold">These are my favorite albums:</h1>
            
            <ul>
                {albums.map(album => (
                    <li key={album.id}>
                        <Link href={`/albums/${album.id}`}>
                            {album.title}
                        </Link>
                    </li>
                ))}
            </ul>
        </main>
     );
}
 
export default Albums;
