import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import { X } from "lucide-react";
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
  Flex,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";

import "../../scss/home/nav.css";

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
        marginLeft={{ base: "0px", md: "50px" }}
        w={{ base: "45%", md: "50%" }}
        height="full"
        display="flex"
        alignItems="center"
        gap="0.4rem"
      >
        <Box
          w={{ base: "100%", md: "30%" }}
          marginLeft={{ base: "35px", md: "0" }}
          gap={{ base: "5px", md: "0" }}
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
            h="40%"
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
        width={{ base: "37%", md: "250px" }}
        fontFamily="Main"
        h="full"
        display="flex"
        justifyContent={{ base: "flex-start", md: "center" }}
        gap={{ base: "1rem", md: "1rem" }}
        alignItems="center"
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        {flag === false && (
          <Button
            bg="none"
            fontSize="0.9rem"
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
          borderRadius="5px"
          padding="6px 12px"
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
      </Box>

      {flag === true && nav === true && (
        <Flex
          color="black"
          w="100vw"
          h="100vh"
          zIndex={5}
          position="absolute"
          top="0"
          right="0"
          align="flex-end"
          background="rgba(0,0,0,0.5)"
          direction="column"
        >
          <Flex width="100%" height="3.6rem" justify="flex-end" align="center">
            <X
              style={{ marginRight: "14px" }}
              className="ico"
              size={20}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setnav(false);
              }}
            />
          </Flex>

          <Flex
            width="90%"
            height="calc(100vh - 4rem)"
            direction="column"
            align="center"
            justify="flex-start"
            bg="white"
            fontSize='1rem'
            borderTopLeftRadius={5}
            borderBottomLeftRadius={5}
          >
            <Flex
              marginTop="20px"
              justify="flex-start"
              align="flex-start"
              direction="column"
              w="85%"
              h="auto"
              gap='5px'
            >
              <Text
                as="h2"
                h="50px"
                w="100%"
                fontSize='1rem'
                display='flex'
                justifyContent='flex-start'
                alignItems='center'
                className="btn"
              >
                About us
              </Text>
              <Text
                as="h2"
                h="50px"
                w="100%"
                fontSize='1rem'
                display='flex'
                justifyContent='flex-start'
                alignItems='center'
                className="btn"
              >
                Contact
              </Text>

              <Accordion allowToggle  w="100%">
                <AccordionItem borderTop='none' borderBottom='none'>
                  <h2>
                    <AccordionButton minH="50px" _hover={{bg:'white'}} 
                    _focus={{bg:'white'}}>
                      <Box as="span" flex="1" marginLeft='-1rem' textAlign="left">
                        Section 1 title
                      </Box>
                      <AccordionIcon marginRight='-1rem' />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                   
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>

            <Button
              onClick={(e) => {
                e.preventDefault();
                Navigate("/auth/signin");
              }}
              position="absolute"
              bottom="10"
              width="75%"
              px={0}
              py="10px"
              borderRadius={7}
              bg="#24292F"
              fontSize="1rem"
              fontWeight={460}
              letterSpacing="1px"
            >
              Sign in
            </Button>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default Nav;
