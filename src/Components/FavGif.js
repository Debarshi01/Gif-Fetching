import GifShow from "./GifShow";

function FavGif({favgif,onDelete,onClick}){
    const renderedGif = favgif.map((gif)=>{
        return(
        
            
            <GifShow key={gif.id} gif={gif} onDelete={onDelete} favgif={favgif} onClick={onClick}/>
        
        )
    })
    console.log(favgif)
    return <div >
        <br/>
         <br/>
         {favgif.length > 0 ? <h1>Favourites</h1> : null}
         <br/>
         <br/>
         <div className="favourites">
        {renderedGif}
        Hello
        </div>
    </div>
}
export default FavGif;