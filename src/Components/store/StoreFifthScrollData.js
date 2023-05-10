import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import DevicesIcon from '@mui/icons-material/Devices';
import AddCardIcon from '@mui/icons-material/AddCard';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import AppleIcon from '@mui/icons-material/Apple';

const StoreFifthScrollData = [
  {
    id: 1,
    color: "green",
    linearGradient:false,
    icon: <LocalShippingIcon sx={{ fontSize: 50 }}/>,
    descriptionOne: "Enjoy",
    descriptionTwo: "from an apple store ,free delevery or",
    spanOne: "two-hour delivery",
    spanTwo: "easy pickup.",
  },

  {
    id: 2,
    color:"#AC39FF",
    linearGradient:false,
    icon: <DevicesIcon  sx={{ fontSize: 50}}/>,
    descriptionOne: "",
    descriptionTwo: "get creadit toward a new one.",
    spanOne: "Trade in your current device.",
    spanTwo: "",
  },

  {
    id: 3,
    color:"#AC39FF",
    linearGradient:false,
    icon: <AddCardIcon  sx={{ fontSize: 50}}/>,
    descriptionOne: "pay in full or",
    descriptionTwo: "your choice",
    spanOne: "pay over time.",
    spanTwo: "",
  },

  {
    id: 4,
    color:"#007AFF",
    linearGradient:false,
    icon: <WorkOutlineIcon  sx={{ fontSize: 50}}/>,
    descriptionOne: "Gat a",
    descriptionTwo: "experiance in the",
    spanOne: "get a personalized shopping ",
    spanTwo: "Apple store app.",
  },

  {
    id: 5,
    color:"#007AFF",
    linearGradient:false,
    icon: <InsertEmoticonIcon  sx={{ fontSize: 50}}/>,
    descriptionOne: "Make the yours.",
    descriptionTwo: "",
    spanOne: "Engrave a mix of emoji, names ,and numbers for free.",
    spanTwo: "",
  },
  {
    id: 6,
    color:false,
    linearGradient:true,
    icon: <AppleIcon  sx={{ fontSize: 50}}/>,
    descriptionOne: "",
    descriptionTwo: "your mac and create your own style of Apple Watch",
    spanOne: "customize ",
    spanTwo: "",
  },
];

export default StoreFifthScrollData;