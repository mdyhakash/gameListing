import { useEffect } from "react"


const Banner = ({gameBanner}) => {

    useEffect(()=>{

    },[])

  return (
    <div className="relative mt-5">
        <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full rounded-b-full">
            <h2 className="text-[24px] text-white font-bold">{gameBanner.name}</h2>
            <button className="bg-blue-700 text-white font-semibold px-3 p-2 rounded-lg">Get Now</button>
        </div>
        <img src={gameBanner.background_image} className="md:h-[320px] w-full object-cover rounded-xl" />
    </div>
  )
}

export default Banner