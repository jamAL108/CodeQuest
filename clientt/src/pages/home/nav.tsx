import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Logo from "../../images/mainlogog.png";
import { useNavigate } from "react-router-dom";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Button,
  Image,
  Text,
} from "@chakra-ui/react";

import '../../scss/home/nav.css'

const Nav: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<any>(null);
  const open = Boolean(anchorEl);
  const handleClick: React.MouseEventHandler<HTMLHeadingElement> = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [flag, setflag] = useState<boolean>(true);
  const [nav, setnav] = useState<boolean>(false);
  const Navigate = useNavigate();
  useEffect(() => {
    if (window.innerWidth <= 700) {
      setflag(true);
      console.log(window.innerWidth);
    } else {
      setflag(false);
    }
  }, []);

  return (
    <Box
      bg="transparent"
      width="100%"
      h="3.6rem"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      zIndex={100}
      fontFamily="body"
    >
      <Box
        marginLeft={{base:"0px" , md:"50px"}}
        w={{base:"45%" , md:"50%"}}
        height="full"
        display="flex"
        alignItems="center"
        gap="0.4rem"
      >
        <Box
          w={{base:"100%" , md:"30%"}}
          height="full"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
        >
          <Image
            width="30%"
            height="100%"
            objectFit="cover"
            src={Logo}
            alt="Dan Abramov"
          />
          <Text
            as="h2"
            h='40%'
            color="accent.light"
            fontSize="1.35rem"
            fontWeight={550}
          >
            codeQuest
          </Text>
        </Box>
        <Button
          fontSize="0.83rem"
          marginTop="6px"
          fontWeight={430}
          transition="0.4s ease"
          display={{ base: "none", md: "flex" }}
          _hover={{ opacity: 0.76 }}
        >
          About us
        </Button>
        <Button
          fontSize="0.83rem"
          marginTop="6px"
          _hover={{ opacity: 0.76 }}
          fontWeight={430}
          display={{ base: "none", md: "flex" }}
          transition="0.4s ease"
        >
          Contact
        </Button>
        <Menu>
          <MenuButton
            marginTop="6px"
            as={Button}
            variant="outline"
            color="accent.light"
            border={0}
            _hover={{ bg: "none", opacity: 0.76 }}
            display={{ base: "none", md: "flex" }}
            _active={{ bg: "none" }}
            fontSize="0.83rem"
            fontWeight={430}
            transition="0.4s ease"
            rightIcon={<KeyboardArrowDownIcon />}
          >
            Others
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
      </Box>


      <Box
      width={{ base:"40%" , md:"250px"}}
      fontFamily="Main"
      h="full"
      display="flex"
      justifyContent="center"
      gap={{base : "1rem" , md:"1rem"}}
      alignItems="center"

        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        {flag === false && (
          <Button
            bg="none"
            fontSize='0.9rem'
            fontWeight={450}
            transition="0.4s ease"
            _hover={{ opacity: 0.76 }}
            padding="5px 10px"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              Navigate("/auth/signin");
            }}
          >
            Sign in
          </Button>
        )}
        <Button
          border="1px solid white"
          borderRadius='5px'
          padding="0px 12px"
          maxH="60%"
          fontSize="0.9rem"
          transition="0.4s ease"
          _hover={{ opacity: 0.76 }}
          fontWeight={450}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            Navigate("/auth/signup");
          }}
        >
          Sign up
        </Button>
        {flag === true && nav === false && (
          <MenuIcon
            className="ico"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setnav(true);
            }}
          />
        )}
        {flag === true && nav === true && (
          <CloseIcon
            className="ico"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setnav(false);
            }}
          />
        )}
      </Box>

      {flag === true && nav === true && (
        <div className="show">
          <h2 className="btn">About us</h2>
          <h2 className="btn">Contact</h2>
          <h2 className="btn" onClick={handleClick}>
            Dashboard <KeyboardArrowDownIcon className="icon" />
          </h2>
        </div>
      )}
    </Box>
  );
};

export default Nav;
