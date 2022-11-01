import BuildIcon from '@mui/icons-material/Build';
import MapIcon from '@mui/icons-material/Map';
import ForestIcon from '@mui/icons-material/Forest';
import { NavBarBtnTPD } from 'views/components/NavBar/NavBarBtn';

export enum PathsApp {
  map = 'map',
  forrest = 'forrest',
  tools = 'tools',
  main = '',
  create_estate = 'create_estate',
  create_stand = 'create_stand',
  stand = 'stand',
  estate = 'estate',
}

const NavBarButtonsData: NavBarBtnTPD[] = [
  { name: 'Admin tools', icon: BuildIcon, path: { p: PathsApp.tools, p1: '' } },
  { name: 'My forrest', icon: ForestIcon, path: { p: PathsApp.forrest, p1: '' } },
  { name: 'Map', icon: MapIcon, path: { p: PathsApp.map, p1: '' } },
];

export default NavBarButtonsData;
