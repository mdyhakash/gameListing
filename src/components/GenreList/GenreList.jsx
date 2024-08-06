import { useEffect, useState } from "react"
import GlobalApi from '../../Services/GlobalApi'



const GenreList = ({genereId,selectedGenresName}) => {

  const [genreList, setGenreList] = useState([])
  const [activeIndex, setActiveIndex] = useState()

    useEffect(()=>{
      getGenreList();    
    },[])


    const getGenreList= ()=>{
      GlobalApi.getGenreList.then((resp)=>{
        setGenreList(resp.data.results);
      })
    }


  return (
    <div className="px-6">
      <h2 className="text-[30px] font-bold">Genres</h2>
      {
        genreList.map((item,index)=>(
          <div key={index} 
          onClick={()=>{setActiveIndex(index);
            genereId(item.id);
            selectedGenresName(item.name)
          }}

          className={`flex items-center gap-2 mb-2 cursor-pointer hover:bg-gray-300 p-2 group rounded-lg ${activeIndex===index?'bg-gray-300':null}`}>
            <img src={item.image_background} alt=""
            
            className={`w-[50px] h-[50px] object-cover rounded-lg group-hover:scale-105 transition-all ease-out duration-300 ${activeIndex===index?'scale-105':null}`} />
            <h3 className={`text-[18px] group-hover:font-bold transition-all ease-out duration-300 ${activeIndex===index?'font-bold':null}`}>{item.name}</h3>
          </div>
        ))
      }
    </div>
  )
}

export default GenreList;