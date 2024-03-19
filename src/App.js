import { BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import GifList from "./Components/GifList";
import FavGif from "./Components/FavGif";
import Search from "./Components/searchGif";
import GifModal from "./Components/GifModal";
import FavPage from "./favPage";
// import FavPage from './favPage';

const modalComponent = document.querySelector(".modal");

function App() {
  const api = "xn2BbQ1aaFnKSysDOcKiawjZEvS3ltU8";
  const trendUrl = `https://api.giphy.com/v1/gifs/trending?api_key=${api}&limit=49`;

  const [trendGif, settrendGif] = useState([]);
  const [favGif, setfavGif] = useState([]);
  const [searchGif, setsearchGif] = useState([]);
  const [ShowModal, setShowModal] = useState(false);
  const [selectedGif, setselectedGif] = useState(null);

  const search = (title) => {
    fetchSearchGif(title);
  };

  const fetchTrendGif = async () => {
    const response = await axios.get(trendUrl);

    settrendGif(response.data.data);
  };

  const fetchSearchGif = async (title) => {
    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/search/?api_key=${api}&limit=25&q=${title}`
    );

    setsearchGif(response.data.data);
  };

  useEffect(() => {
    fetchTrendGif();
  }, []);

  const AddFav = (id) => {
    const favGifstoAdd =
      trendGif.find((gif) => gif.id === id) ||
      searchGif.find((gif) => gif.id === id);
    // console.log('found', favGifstoAdd)
    if (favGifstoAdd && !favGif.includes(favGifstoAdd) && favGif.length < 5) {
      setfavGif([...favGif, favGifstoAdd]);
    } else if (favGif.includes(favGifstoAdd)) {
      alert("Already Present");
    } else {
      alert("Cant add more than 5 ");
    }
    console.log(favGif);
  };

  const DeleteFromFav = (id) => {
    const favGifstoAdd = favGif.filter((gif) => {
      return gif.id !== id;
    });
    setfavGif(favGifstoAdd);
  };

  const handleClick = (gif) => {
    setShowModal(true);
    modalComponent.style.display = "flex";
    setselectedGif(gif);
  };

  const handleClose = () => {
    setShowModal(false);
    modalComponent.style.display = "None";
  };

  const modal = <GifModal onClose={handleClose} Gifs={selectedGif} />;
  console.log(favGif);
  return (
    <Router>
      <div>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Search onSearch={search} />
                <Link to={"favorites"}>Favourites</Link>
                <br />
                <br />
                {/* {favGif.length>0 && (
            <>
            <a href={<FavPage favgif={favGif} onDelete={DeleteFromFav} onClick={handleClick}/>}><button>Favourites</button></a>
            </>
        )} */}
                <br />
                <br />
                {searchGif.length > 0 && (
                  <>
                    <h1>Searched Gifs</h1>
                    <br />
                    <br />
                    <GifList
                      Gifs={searchGif}
                      Addfav={AddFav}
                      onClick={handleClick}
                    />
                  </>
                )}
                {searchGif.length === 0 && (
                  <>
                    <br />
                    <br />
                    <h1>Trending Gifs</h1>
                    <br />
                    <br />
                    <GifList
                      Gifs={trendGif}
                      Addfav={AddFav}
                      onClick={handleClick}
                    />
                  </>
                )}
                {/* <br/>
        <br/>
        <h1>Trending Gifs</h1>
        <br/>
        <br/>
        <GifList Gifs={trendGif} Addfav={AddFav} onClick={handleClick} /> */}
                {/* <FavGif favgif={favGif} onDelete={DeleteFromFav} onClick={handleClick}/> */}
                {ShowModal && modal}
              </>
            }
          />
          <Route
            path="favorites"
            element={
              <FavGif
                favgif={favGif}
                onDelete={DeleteFromFav}
                onClick={handleClick}
              />
            // <FavPage/>
            }
          />
          {/* <FavPage favgif={favGif} onDelete={DeleteFromFav} onClick={handleClick} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
