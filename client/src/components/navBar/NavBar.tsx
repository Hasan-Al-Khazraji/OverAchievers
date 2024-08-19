import "./NavBar.css";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Button } from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

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
        <Tabs
          value={page}
          sx={{ "& .MuiTabs-indicator": { backgroundColor: "#86efac" } }}
        >
          <Tab
            label="Home"
            className="text-green-300 font-Retro text-lg"
            onClick={() => {
              navigate("/");
              setPage(0);
            }}
          ></Tab>
          <Tab
            label="Vote"
            className="text-green-300 font-Retro text-lg"
            onClick={() => {
              navigate("/vote");
              setPage(1);
            }}
          ></Tab>
          <Tab
            label="Live"
            className="text-green-300 font-Retro text-lg"
            onClick={() => {
              navigate("/live");
              setPage(2);
            }}
          ></Tab>
        </Tabs>
      </div>
      <div className="flex md:flex-grow items-center justify-end p-4">
        <Button
          variant="contained"
          endIcon={<GoogleIcon />}
          className="bg-green-950"
        >
          Login
        </Button>
      </div>
    </div>
  );
}
