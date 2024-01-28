'use client';
import React, { useState, useEffect } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MenuIcon from "@mui/icons-material/Menu";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
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
import Other_product from "./other_product";
import Big_Other_product from "./Big_Other_product";
// import "../../scss/home/nav.css";
import OtherProductData from "./data";

const Nav: React.FC = () => {
  const dummyy = [
    "Pricing Policy",
    "Cookies Policy",
    "terms & conditions",
    "Meet The Creators",
  ];
  const [flag, setflag] = useState<boolean>(true);
  const [nav, setnav] = useState<boolean>(false);
  const router = useRouter();
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
      className="homenav"
    >
      <Box
        marginLeft={{ base: "0px", md: "15px" }}
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
            src='/images/mainlogog.png'
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
        <button
          className="text-white px-[15px] transition duration-500 ease hover:opacity-[0.72] text-[0.83rem] font-[430] mt-[6px] base:hidden md:flex"
        >
          About us
        </button>
        <button

          className="text-white px-[15px] transition duration-300 ease-in-out hover:opacity-[0.72] text-[0.83rem] font-[430] mt-[6px] base:hidden md:flex"
        >
          Contact
        </button>
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
          <MenuList className="p-3 flex flex-col gap-1 text-[0.87rem] font-[470] !text-black shadow-[0px_0px_16px_1px_rgba(0,0,0,0.75)]">
            <MenuItem className="py-[7px] !text-black  cursor-pointer hover:bg-[#e6e6ed]">Pricing Policy</MenuItem>
            <MenuItem className="py-[7px] !text-black cursor-pointer hover:bg-[#e6e6ed]">terms & conditions</MenuItem>
            <MenuItem className="py-[7px] !text-black cursor-pointer hover:bg-[#e6e6ed]">Cookies Policy</MenuItem>
            <MenuItem className="py-[7px] !text-black cursor-pointer hover:bg-[#e6e6ed]">Meet The Creators</MenuItem>
          </MenuList>
        </Menu>
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
            Other Product
          </MenuButton>
          <MenuList color='black' fontSize='0.6rem' className="shadow-[0px_0px_16px_1px_rgba(0,0,0,0.75)]" >
          {OtherProductData.map((item, key) => (
              <Big_Other_product
              key={key}
               icony={item.icony}
               name={item.name}
               description={item.description}
               link={item.link}
            />
          ))}
          </MenuList>
        </Menu>
      </Box>

      <Box
        width={{ base: "37%", md: "250px" }}
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
          <button
            className="text-white py-[5px] px-[10px] transition duration-300 ease hover:opacity-[0.72] text-[0.9rem] font-[400] mt-[6px] bg-none"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              router.push("/auth/signin");
            }}
          >
            Sign in
          </button>
        )}
        <button
          className="text-white border-[1px] border-white rounded-[5px] py-[6px] px-[12px] max-h-[60%] text-[0.9rem] transition duration-300 font-[400] hover:opacity-[0.76] ease"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            router.push("/auth/signup");
          }}
        >
          Sign up
        </button>
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
          position="fixed"
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
              size={25}
              color="white"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                setnav(false);
              }}
            />
          </Flex>

          <Flex
            overflowY="scroll"
            overflowX="hidden"
            className="HOMEnavSidebar"
            height="calc(100vh - 4rem)"
            direction="column"
            align="center"
            justify="flex-start"
            bg="white"
            fontSize="1rem"
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
              minH="85%"
              maxH="100vh"
              gap="5px"
            >
              <Text
                as="h2"
                h="50px"
                w="100%"
                fontSize="1rem"
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                className="btn"
              >
                About us
              </Text>
              <Text
                as="h2"
                h="50px"
                w="100%"
                fontSize="1rem"
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                className="btn"
              >
                Contact
              </Text>

              <Accordion allowToggle w="100%">
                <AccordionItem borderTop="none" borderBottom="none">
                  <h2>
                    <AccordionButton
                      minH="50px"
                      _hover={{ bg: "white" }}
                      _focus={{ bg: "white" }}
                    >
                      <Box
                        as="span"
                        flex="1"
                        marginLeft="-1rem"
                        textAlign="left"
                      >
                        Others
                      </Box>
                      <AccordionIcon marginRight="-1rem" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {dummyy.map((item, key) => (
                      <Text
                        key={key}
                        as="h2"
                        h="45px"
                        w="100%"
                        fontSize="1rem"
                        display="flex"
                        justifyContent="flex-start"
                        alignItems="center"
                        className="btn"
                      >
                        {item}
                      </Text>
                    ))}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>

              <Accordion allowToggle w="100%">
                <AccordionItem borderTop="none" borderBottom="none">
                  <h2>
                    <AccordionButton
                      minH="50px"
                      _hover={{ bg: "white" }}
                      _focus={{ bg: "white" }}
                    >
                      <Box
                        as="span"
                        flex="1"
                        marginLeft="-1rem"
                        textAlign="left"
                      >
                        Other Products
                      </Box>
                      <AccordionIcon marginRight="-1rem" />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4} pl={0}>
                    {OtherProductData.map((item, key) => (
                      <Other_product
                         key={key}
                        icony={item.icony}
                        name={item.name}
                        description={item.description}
                        link={item.link}
                      />
                    ))}
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </Flex>

            <Flex minH="10%" h="10%" justify="center" w="100%">
              <button
              className="h-[60%] text-white w-[85%] px-0 rounded-[7px] bg-[#24292F] text-[1rem] font-[460] tracking-[1px]"
                onClick={(e) => {
                  e.preventDefault();
                  router.push("/auth/signin");
                }}
              >
                Sign in
              </button>
            </Flex>
          </Flex>
        </Flex>
      )}
    </Box>
  );
};

export default Nav;
