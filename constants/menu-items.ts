import ClockIcon from '@mui/icons-material/AccessTimeRounded';
import DocumentIcon from '@mui/icons-material/InsertDriveFileRounded';
import HomeIcon from '@mui/icons-material/HomeRounded';
import PeopleIcon from '@mui/icons-material/PeopleRounded';

export const iconProps = {
  width: "50px",
  height: "50px",
  borderRadius: "10px",
  boxShadow: "0px 4px 4px 0px #00000040",
  color: "#fff"
};

export const MENU_ITEM_MAP = {
  home: {
    Component: HomeIcon,
    backgroundColor: "#00A4F8",
    href: "/",
    text: "Home"
  },
  documents: {
    Component: DocumentIcon,
    backgroundColor: "#3EDC84",
    href: "/my-documents",
    text: "My Documents"
  },
  people: {
    Component: PeopleIcon,
    backgroundColor: "#00A4F8",
    href: "/people",
    text: "People"
  },
  timeOff: {
    Component: ClockIcon,
    backgroundColor: "#FFC300",
    href: "/time-off",
    text: "Time off"
  }
};

export type MenuItemKey = "home" | "documents" | "people" | "timeOff";
