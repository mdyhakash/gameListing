import {HiOutlineMagnifyingGlass} from "react-icons/hi2";
import logo from "../../assets/images.png"

const Header = () => {
  return (
    <div className="flex items-center p-3">
        <img src={logo} alt="" width={60} height={60} />
        <div className="flex mx-5 rounded-full bg-slate-200 p-2 w-full items-center">
            <HiOutlineMagnifyingGlass/>
            <input type="text" placeholder="Search Games" className="px-2 bg-transparent outline-none" />
        </div>
        {/*Dark mood */}
    </div>
  )
}

export default Header;