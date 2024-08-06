import { useEffect } from "react"


const TrendingGames = ({gameList}) => {

    useEffect(()=>{

    },[])
  return (
    <div className="mt-5 hidden md:block">
        <h2 className="font-bold text-[30px]">Trending Games</h2>
    <div className="md:grid md:grid-cols-2 gap-4 mt-5 lg:grid-cols-4">
        {
            gameList.map((item,index)=> index<4&&(
                <div key={index} className="bg-[#76a8f75e] rounded-lg group hover:scale-110 md:hover:scale-105  transition-all duration-300 ease-in-out cursor-pointer">
                    <img src={item.background_image} alt="" className="h-[270px] rounded-t-lg  object-cover "/>
                    <h2 className="text-[16px] p-2 font-bold">{item.name}</h2>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default TrendingGames