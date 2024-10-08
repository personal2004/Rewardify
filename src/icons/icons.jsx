import { MdOutlinePhone,MdOutlineDashboard,MdAddShoppingCart,MdOutlinePersonOutline } from "react-icons/md";
import { BsWhatsapp,BsShopWindow } from "react-icons/bs";
import { FaArrowLeftLong,FaArrowRightLong } from "react-icons/fa6";
import { PiTruckFill, PiBankLight } from "react-icons/pi";
import { MdOutlineMenu,MdOutlineKeyboardArrowUp  } from "react-icons/md";
import { IoLogOutOutline } from "react-icons/io5";
import { ImNotification } from "react-icons/im";
import { RiArrowDownSLine} from "react-icons/ri";

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
}

export default icons