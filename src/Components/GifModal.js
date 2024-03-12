import ReactDOM from "react-dom";
function GifModal({onClose ,Gifs}){
    const modalComponent = document.querySelector('.modal');
    modalComponent.addEventListener('click',onClose);
    return ReactDOM.createPortal(
        // <div className={onClose}>
            <div className="modal-content">
                    <span className="close" onClick={onClose}>&times;</span>
                    <img className="img-modal"src={Gifs.images.downsized_medium.url} alt="gif"/>
                    <br/>
                    <br/>
                    <h2>{Gifs.title}</h2>   
            </div>
            // </div>
            ,
        document.querySelector('.modal')
    )
}

export default GifModal;