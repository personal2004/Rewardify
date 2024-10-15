import { MdOutlinePhone,MdOutlineDashboard,MdAddShoppingCart,MdOutlinePersonOutline } from "react-icons/md";
import { BsWhatsapp,BsShopWindow } from "react-icons/bs";
import { FaArrowLeftLong,FaArrowRightLong } from "react-icons/fa6";
import { PiTruckFill, PiBankLight } from "react-icons/pi";
import { MdOutlineMenu,MdOutlineKeyboardArrowUp  } from "react-icons/md";
import { IoLogOutOutline,IoLocationSharp } from "react-icons/io5";
import { ImNotification } from "react-icons/im";
import { RiArrowDownSLine} from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";

const icons={
  phoneoutline:<MdOutlinePhone/>,
  whatsapp:<BsWhatsapp/>,
  leftpointarrow:<FaArrowLeftLong/>,
  rightpointarrow:<FaArrowRightLong/>,
  menubar:<MdOutlineMenu/>,
  dashboard:<MdOutlineDashboard/>,
  order:<PiTruckFill/>,
  products:<MdAddShoppingCart/>,
  profile:<MdOutlinePersonOutline/>,
  shop:<BsShopWindow/>,
  wallet:<PiBankLight/>,
  notifi:<ImNotification/>,
  logout:<IoLogOutOutline/>,
  dropdownarrow:<RiArrowDownSLine/>,
  deopuparrow:<MdOutlineKeyboardArrowUp/>,
  searchicon:<FiSearch/>,
  plussymbol:<FaPlus/>,
  locationpoint:<IoLocationSharp/>,
}

export default icons