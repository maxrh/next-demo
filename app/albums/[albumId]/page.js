const getData = async (albumId) => {
    const result = await fetch(`https://jsonplaceholder.typicode.com/albums/${albumId}`)
    if (!result.ok) { throw new Error("Failed to fetch album!")}
    return result.json()
}

const AlbumDetail = async ({params: { albumId }}) => {
    const album = await getData(albumId)
    console.log(album)

    return ( 
        <main>
            <h1>{album.title}</h1>
        </main>
     );
}
 
export default AlbumDetail;