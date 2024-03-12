
function GifShow({gif,fav,onDelete,favgif,onClick}){
    const handleClick =()=>{
        if(favgif && favgif.includes(gif)){
            onDelete(gif.id)
        }else{
            fav(gif.id);
        }
        
        // console.log('the passed id is ', gif.id)
    }

    return(
        <div className="newGif">
            <img  onClick={()=>onClick(gif)} src={gif.images.downsized_medium.url} alt={gif.title}></img>
            <h6>{gif.username}<button onClick={handleClick} className="fav">❤</button></h6>
        </div>
    )
}
export default GifShow;