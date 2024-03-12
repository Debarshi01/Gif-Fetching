import GifShow from "./GifShow";

function GifList({Gifs,Addfav,onClick}){
    const renderedGif = Gifs.map((Gif)=>{
        return<GifShow key={Gif.id} gif={Gif} fav={Addfav} onClick={onClick}/>
    })
    
    
    return <div className="gifs">
        {renderedGif}
    </div>
    
}
export default GifList;