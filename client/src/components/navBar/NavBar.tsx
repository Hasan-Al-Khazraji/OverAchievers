import "./NavBar.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Button } from "@mui/material";
import GoogleIcon from '@mui/icons-material/Google';

export default function NavBar() {
  return (
    <div className="bg-green-700 p-2 flex">
      <div className="flex items-center">
        <img
          src="https://github.com/user-attachments/assets/15523d9b-67d9-47dd-af8d-660d819e6683"
          alt="Logo"
          width="96px"
        />
        <h1 className="title-text text-white font-Arcade text-lg md:text-2xl lg:text-3xl ml-2">
          OVERACHIEVERS
        </h1>
      </div>
      <div className="flex items-center">
        <Tabs value={0} sx={{'& .MuiTabs-indicator': { 'backgroundColor': '#86efac' }}}>
          <Tab label="Home" className="text-green-300 font-Retro text-lg"></Tab>
          <Tab label="Vote" className="text-green-300 font-Retro text-lg"></Tab>
          <Tab label="Live" className="text-green-300 font-Retro text-lg"></Tab>
        </Tabs>
      </div>
      <div className="flex md:flex-grow items-center justify-end p-4">
        <Button variant="contained" endIcon={<GoogleIcon />} className="bg-green-950">Login</Button>
      </div>
    </div>
  );
}
