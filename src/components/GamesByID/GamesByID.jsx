import { useEffect } from "react"


const GamesByID = ({gameList,selctedGenresName}) => {

    useEffect(()=>{

    },[])


  return (
    <div>
        <h2 className="font-bold text-[30px] mt-5">{selctedGenresName} Games</h2>
    <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
        {
            gameList.map((item,index)=>(
                <div key={index} className="bg-[#76a8f75e] p-3 rounded-lg pb-12 h-full hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer">
                    <img src={item.background_image} alt="" 
                    className="w-full h-[80%] rounded-xl object-cover"
                    />
                    <div className="flex-col items-center">
                    <h2 className="mt-2 lg:text-md text-black font-semibold md:text-[16px]">{item.name} <span className="bg-green-300 p-1 rounded-sm ml-2 text-[10px]  text-green-900 font-medium">{item.metacritic}</span></h2>
                    <h2 className="mt-2 text-gray-500 md:text-[16px]">⭐{item.rating}   💬{item.reviews_count}  🔥{item.suggestions_count} </h2>
                    </div>
                </div>
            ))
        }
    </div>
    </div>
  )
}

export default GamesByID;