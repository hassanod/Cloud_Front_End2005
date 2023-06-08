import { faPage4, faWindows } from "@fortawesome/free-brands-svg-icons";
import {
  faTachometer,
  faTable,
  faLock,
  faNoteSticky,
  faNotdef
} from "@fortawesome/free-solid-svg-icons";

const initMenu = [
  {
    label: "Dashboard",
    path: "/",
    icon: faTachometer,
  },
  {
    label: 'Halaman'
  },
  {
    label: "Join a class",
    path: "/blank",
    icon: faPage4,
  },
  {
    label: "course_content",
    path: "/404",
    icon: faNotdef,
  },
  
  {
    label: 'les pages a faire'
  },
  {
    label: "InstanceProgress",
    path: "/form",
    icon: faWindows,
  },
  {
    label: "VideoProgress",
    path: "/table",
    icon: faTable,
  },
  

  {
    label: 'Navigation'
  },
  {
    label: "Login",
    path: "/auth/login",
    icon: faLock,
  },
  {
    label: "Register",
    path: "/auth/register",
    icon: faNoteSticky,
  },
];

export default initMenu