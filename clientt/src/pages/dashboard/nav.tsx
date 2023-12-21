import React, {useEffect, useRef,useState} from "react";
import "../../scss/dashboard/dashboard.nav.css";
import Logo from "../../images/mainlogog.png";
import {
  AlignRight,
  FileAxis3d,
  LayoutDashboard,
  ListPlus,
  Settings,
  UserRound,
  LogOut
} from "lucide-react";
import { user, dashboardNavProps } from "../../interface/interface";
import {
  Box,
  Button,
  Text,
  Image,
  Card,
  Grid,
  Center,
  GridItem,
  Divider,
  Flex,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";


const Nav: React.FC<dashboardNavProps> = (props) => {
  const { flagfun, flag } = props;
  const Data: string | null = localStorage.getItem("codeQuestUSER");
  const user: user | null = Data ? JSON.parse(Data) : null;
  const dropdown = useRef<HTMLButtonElement  | null>(null)

  const [navflag , setflag] = useState<boolean>(false)


  const cookieNames: string[] = ['http://localhost:3000']; // Assuming 'token' is the name of your cookie
  const [cookies, , removeCookie] = useCookies(['token', 'jenkinsToken']);

  const navigate = useNavigate()


  const handleclick = ()  => {
    setflag(true)
    dropdown?.current?.click();
  };
  
  const Logout =()=>{
    console.log(document.cookie)
    localStorage.removeItem('codeQuestDashboardIndex')
    localStorage.removeItem('codeQuestUSER')
    removeCookie('token',{});
    navigate('/')
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdown.current &&
        !dropdown.current.contains(event.target as Node) &&
        event.target !== dropdown.current
      ) {
        setflag(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);




  return (
    <Flex
      color="accent.light"
      className="DashNav"
      width="20%"
      bg="Bgs.nav"
      direction="column"
      position="relative"
      justify="flex-start"
      gap="1.3rem"
    >
      <Grid
        h="3rem"
        mt="1.3rem"
        templateColumns="70% 30%"
        justifyContent="center"
        alignItems="center"
      >
        <Center h="full">
          <Image w="20%" h="90%" src={Logo} alt="bf" />
          <Text as="h2" fontSize="1.08rem" fontWeight="460" opacity="0.9">
            codeQuest
          </Text>
        </Center>
        <Center h="full" pr="20px">
          <AlignRight className="icon" color="white" size={20} />
        </Center>
      </Grid>

      <Center
        px="3px"
        w="100%"
        flexDirection="column"
        fontSize="0.7rem"
        opacity={0.9}
        fontWeight={330}
      >
        <Text as="p" m={0} w="75%" textAlign="left">
          Welcome Jamal,
        </Text>
        <Text as="p" m={0} w="75%" textAlign="left">
          Start new Interview sections
        </Text>
      </Center>

      <Flex
        className="down"
        minH="10rem"
        justify="flex-start"
        direction="column"
      >
        <Center
          className="covertop"
          h="32%"
          w="11.5rem"
          borderRadius={6}
          border={flag === 2 ? "1px solid #6F8AE9" : "none"}
        >
          <Box
            bg={flag === 2 ? "#6F8AE9" : "#282833"}
            color={flag === 2 ? "#282833" : "white"}
            pointerEvents={flag == 2 ? "none" : "auto"}
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="96%"
            py={2}
            gap="10px"
            borderRadius="4px"
            transition="0.67s ease"
            cursor="pointer"
            _hover={{ transform: "scale(1.04)" }}
            onClick={(e) => {
              e.preventDefault();
              flagfun("addsection");
            }}
          >
            <ListPlus
              color={flag === 2 ? "#282833" : "#AD9BF5"}
              className="icon"
              size={25}
            />
            <Text
              as="h2"
              fontSize="0.8rem"
              opacity={0.9}
              fontWeight={flag === 2 ? "540" : "470"}
            >
              Add new Section
            </Text>
          </Box>
        </Center>

        <Divider my={3} bg="#23232B" w="70%" opacity={0.4} />

        <Flex className="bottom" w="70%" h="52%" justify="content" gap="10%">
          <Box
            className="dash"
            w="4.1rem"
            display="flex"
            flexDirection="column"
            justifyItems="flex-start"
            alignItems="center"
            gap="0.1rem"
            cursor="pointer"
            onClick={(e) => {
              e.preventDefault();
              flagfun("activities");
            }}
          >
            <Center
              h="82%"
              w="100%"
              borderRadius={4}
              transition="0.3s ease"
              border={flag === 0 ? "1.5px solid #6F8AE9" : "none"}
            >
              <Center
                h="86%"
                w="86%"
                backgroundColor={flag === 0 ? "#6F8AE9" : "#282833"}
                borderRadius={4}
                transition="0.3s ease"
              >
                <LayoutDashboard
                  color={flag === 0 ? "#282833" : "#F0A65D"}
                  size={24}
                />
              </Center>
            </Center>

            <Text
              as="h2"
              fontSize="0.67rem"
              fontWeight={450}
              height="18%"
              p={0}
            >
              Dashboard
            </Text>
          </Box>

          <Box
            className="dash"
            w="4.1rem"
            display="flex"
            flexDirection="column"
            justifyItems="flex-start"
            alignItems="center"
            gap="0.1rem"
            cursor="pointer"
            onClick={(e) => {
              e.preventDefault();
              flagfun("settings");
            }}
          >
            <Center
              h="82%"
              w="100%"
              borderRadius={4}
              transition="0.3s ease"
              border={flag === 1 ? "1.5px solid #6F8AE9" : "none"}
            >
              <Center
                h="86%"
                w="86%"
                backgroundColor={flag === 1 ? "#6F8AE9" : "#282833"}
                borderRadius={4}
                transition="0.3s ease"
              >
                <Settings
                  color={flag === 1 ? "#282833" : "#87CAF6"}
                  size={24}
                />
              </Center>
            </Center>
            <Text
              as="h2"
              fontSize="0.67rem"
              fontWeight={450}
              height="18%"
              p={0}
            >
              Settings
            </Text>
          </Box>
        </Flex>
      </Flex>

      <Center position="absolute" w="100%" bottom={0} h="4rem" cursor="pointer">
        <Grid 
          pr={4}
          pl={3}
          w="85%"
          h="80%"
          position='absolute'
          top='1'
          onClick={(e)=>{
            e.stopPropagation()
            handleclick()
          }}
          templateColumns="34px auto"
          gridGap="6px"
          alignItems="center"
          _hover={{ bg: "#282833" }}
          bg={navflag===true ? "#282833" : "none"}
          cursor="pointer"
          borderRadius={7}
        >
          <Center
            bg="#2980B9"
            borderRadius="50%"
            h="34px"
            w="34px"
            p="7px"
            fontSize="0.8rem"
          >
            {user?.firstName.charAt(0)}
            {user?.lastName.charAt(0)}
          </Center>
          <Flex
            w="70%"
            h="100%"
            direction="column"
            justify="center"
            align="flex-start"
            gap={0}
          >
            <Text as="h2" fontSize="0.7rem" m={0} fontWeight={520}>
              {user?.firstName} {user?.lastName}
            </Text>

            <Text as="p" fontSize="0.53rem" m={0} opacity={0.7}>
              jamalmohideen971@gmail.com
            </Text>
          </Flex>
        </Grid>

        <Menu>
          <MenuButton w="85%"  ref={dropdown}
          h="80%"></MenuButton>
          <MenuList minW='0'  fontFamily='Poppins , sans-serif'  maxW='calc(100vw - 80vw)' w='calc(100vw - 80vw - 3vw)' bg="#282833" border="none">
            <MenuItem h='2.9rem' bg="#282833" _hover={{bg:"#202123"}} gap='15px'
             display='flex' justifyContent='center' alignItems='center'>
               <LogOut size={16} />
             <Text textAlign='left' fontSize='0.8rem' fontWeight='280' width='75%'>Log out</Text></MenuItem>

            <MenuItem h='2.9rem' bg="#282833" _hover={{bg:"#202123"}} gap='15px'
             display='flex' justifyContent='center' borderBottom='1px solid rgba(255, 255, 255, 0.2)'  alignItems='center' >
               <Settings size={16} />
             <Text textAlign='left' fontSize='0.8rem' fontWeight='280' width='75%'>Settings</Text></MenuItem>

            <MenuItem h='2.9rem' bg="#282833" _hover={{bg:"#202123"}} gap='15px'
             display='flex' justifyContent='center' alignItems='center'  >
              <LogOut size={16} />
              <Text textAlign='left' fontSize='0.8rem' fontWeight='240' width='75%' onClick={Logout}>Log out</Text>
            </MenuItem>

          </MenuList>
        </Menu>
      </Center>
    </Flex>
  );
};

export default Nav;
