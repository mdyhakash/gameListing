import { useEffect, useState } from "react"
import GlobalApi from "../../Services/GlobalApi"
import GenreList from "../../components/GenreList/GenreList"
import Banner from "../../components/Banner/Banner";
import TrendingGames from "../../components/TrendingGames/TrendingGames";
import GamesByID from "../../components/GamesByID/GamesByID";


const Home = () => {

  const [allGamesList,setAllGamesList] = useState();
  const [gameListByGenres,setGameListByGenres] = useState([]);
  const [selctedGenresName,setSelctedGenresName]=useState('');


  useEffect(()=>{
    getAllGamesList();
    getGameListByGenresId(4);
  },[])


//game List 
  const getAllGamesList=()=>{
      GlobalApi.getAllGames.then((resp)=>{
        setAllGamesList(resp.data.results)
      })
  }


  
  //game List by Genre ID
  const getGameListByGenresId=(id)=>{
 
    GlobalApi.getGameListByGenreId(id).then((resp)=>{
     
      setGameListByGenres(resp.data.results)
    })
  }


  return (
    <div className="grid grid-cols-4 px-8">
      <div className="hidden md:block">
      <GenreList 
          genereId={(genereId)=>getGameListByGenresId(genereId)}
          selectedGenresName={(name)=>setSelctedGenresName(name)}
           />
      </div>


      <div className="col-span-4 md:col-span-3">
        {allGamesList?.length>0&&gameListByGenres.length>0?
        <div>
          <Banner gameBanner={allGamesList[0]} />
          <TrendingGames gameList={allGamesList}/>
          <GamesByID gameList={gameListByGenres} selctedGenresName={selctedGenresName}/>
        </div>
        :null}
      </div>
    </div>
  )
}

export default Home;