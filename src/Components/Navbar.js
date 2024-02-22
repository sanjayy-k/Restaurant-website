import React, { useState } from "react";
import Logo from "../Assets/Logo.svg";
import {BsCart2} from 'react-icons/bs';
import {HiOutlineBars3} from 'react-icons/hi2';
import {Link} from 'react-router-dom';
import {
    Box,
    Drawer,
    ListItem,
    ListItemButton,
    ListItemIcon,
    List,
    Divider,
    ListItemText,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import ShoppingCartRoundedIcon from "@mui/icons-material/ShoppingCartRounded";


const Navbar = () => {
    const [openMenu, setOpenMenu] = useState(false);
    const menuOptions = [
        {
          text: "Home",
          icon: <HomeIcon />,
        },
        {
            text: "About",
            icon: <InfoIcon />,
          },
          {
            text: "Testimonials",
            icon: <CommentRoundedIcon />,
          },
          {
            text: "Contact",
            icon: <PhoneRoundedIcon />,
          },
          {
            text: "Cart",
            icon: <ShoppingCartRoundedIcon />,
          },
    ];
  return (
    <nav >
        <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
     <a href="" className="log"><Link to='/Signup'>Login</Link></a>
        <a href="/Home">Home</a>
        <a href="/About">About</a>
        <a href="/Test">Testimonials</a>
        <a href="/Contact">Feedback</a>
        <a href="/Footer">Contact</a>
        <a href="/Explore">
          <BsCart2 className="navbar-cart-icon" />
        </a>
       <a href="/Explore"> <button className="primary-button">Explore</button></a>
       {/* "/" This can also be used in a "<a></a>" Tag to redirect to any other */}
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar