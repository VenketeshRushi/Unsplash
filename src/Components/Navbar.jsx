import {
  Box,
  Button,
  Input,
  Menu,
  MenuButton,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { SearchIcon } from "@chakra-ui/icons";
import { HamburgerIcon } from "@chakra-ui/icons";
import "./Navbar.css";
import Dropdown from "./Dropdown";
import Navbar2 from "./Navbar2";

function Navbar() {
  const [count, setCount] = useState(0);
  const [value, setvalue] = useState(false);
  return (
    <>
      <Box display="flex" width="100%" alignContent="center">
        <Box>
          <Link to="/">
            <img
              style={{ width: "23%" }}
              src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/tbvbvipimh2camf5nb2q"
            />
          </Link>
        </Box>

        <Box
          display="flex"
          justifyContent="space-between"
          marginTop="0.4%"
          width="85%"
          alignContent="center"
          marginLeft="-10%"
          className="navbar"
        >
          <Box style={{ width: "50%" }}>
            <Input
              backgroundColor="#eeeeee"
              placeholder="Search free high-resolution photos"
            ></Input>
          </Box>
          <Box marginTop="1%" textAlign="center">
            <Link to="/explore">Explore</Link>
          </Box>

          <Box textAlign="center" marginTop="1%">
            <Link to="/advertise" marginTop="1%">
              Advertise
            </Link>
          </Box>
          <Box textAlign="center" marginTop="1%">
            <Link to="/blog">Blog</Link>
          </Box>

          <Box textAlign="center" marginTop="1%">
            <Link to="/login">Log in</Link>
          </Box>
          <Box marginTop="1%">/</Box>
          <Box marginTop="1%" textAlign="center">
            <Link to="/signup">Sign Up</Link>
          </Box>

          <Box textAlign="center">
            <Button>Submit a photo</Button>
          </Box>

          <Box textAlign="center">
            <HamburgerIcon
              onClick={() => setvalue(!value)}
              position="relative"
            />

            {value ? (
              <Box className="Hamburg" fontSize="18px">
                <Dropdown />
              </Box>
            ) : (
              ""
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default Navbar;
