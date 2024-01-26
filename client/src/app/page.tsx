'use client';
import React, { useEffect, useState } from "react";
// import Nav from "./nav";
import Nav from '../components/home/nav'
import HomeAsk from "../components/home/home.ask";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { VerifyCookie } from "../redux/userSlice";
import { Dispatch } from "redux";
import { Text, Box, Image, Center, Show, Grid , Flex} from "@chakra-ui/react";

const Home: React.FC = () => {
  const router = useRouter()
  useEffect(() => {
    document.title = "codeQuest - Home";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const dispatch: Dispatch<any> = useDispatch();
  const [cookies, removeCookie] = useCookies([]);
  const beforeback =
    "linear-gradient(to bottom, rgba(13, 17, 22, 0.99) 0%, rgba(0, 0, 0, 0) 100%)";
  
    const afterback = 'linear-gradient(to top,rgba(13, 17, 22, 1) 0%,rgba(0, 0, 0, 0) 100%)'

  const [fla, setfla] = useState<boolean>(false);
  useEffect(() => {
    const dataToBePassed={
      router,
       removeCookie ,
      flag:false
    }
    dispatch(VerifyCookie(dataToBePassed));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (window.innerWidth < 700) {
      setfla(true);
    } else {
      setfla(false);
    }
  }, []);
  return (
    <Box 
    className="text-white !bg-[#0d1116]"
      color="accent.light"
      width="100%"
      height="auto"
      overflowY="scroll"
      overflowX="hidden"
      display="flex"
      justifyContent="flex-start"
      alignItems="center"
      flexDirection="column"
      css={{
        "&::-webkit-scrollbar": {
          width: "0 !important",
        },
        scrollbarWidth: "none",
      }}
    >
      <Nav />

      <Box 
        zIndex={1}
        width={{base:'90%',md:"70%"}}
        marginTop={{base:'calc(30vh - 4.3rem)' , md:"calc(190px - 4.3rem)"}}
        marginLeft={{base:'0rem',md:"-150px"}}
        height={{base:'85vh',md:"600px"}}
        display="flex"
        gap={2}
      >


        <Box
          width="3%"
          height="full"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          flexDirection="column"
        >
          <Box
            border="1.955px  solid grey"
            borderRadius="50%"
            width={{base:'100%',md:"30%"}}
            height={{base:"15px",md:"8px"}}
          ></Box>

          <Box
            width={{base:'2px',md:"3px"}}
            height={{base:'65%',md:"300px"}}
            bg="linear-gradient(transparent, #7c72ff 30%)"
          ></Box>

          <Box
            w="60px"
            height="60px"
            borderRadius="50%"
            display="flex"
            justifyContent="center"
            alignItems="center"
            background={`url('../../images/Ellipse.png')`}
          >
            <Image src='/images/symbol.png' width="50%" height="80%" alt="fg" />
          </Box>

          <Box
            width={{base:'2px',md:"3px"}}
            height={{base:'65%',md:"320px"}}
            bg="linear-gradient(#7c72ff, #2da44e 80%, #3fb950)"
          ></Box>
        </Box>

        <Box
          width={{base:"95%",md:"93%"}}
          height="full"
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          flexDirection="column"
        >
          <Box width='95%' className="homenav">
            <Text
              w={{base:'auto',md:'100%'}}
              as="h1"
              lineHeight="1.3"
              fontWeight={600}
              fontSize={{base:'3.3rem',md:"3.66rem"}}
              marginBottom={{base:'0.3rem',md:"0.4rem"}}
              marginTop={{base:'-1.6rem',md:"-0.6rem"}}
            >
              Seamless Interviews, Anywhere, Anytime
            </Text>
            <Text
              as="h3"
              fontSize="1.1rem"
              opacity={0.7}
              fontWeight={340}
              marginTop="0rem"
            >
              The world’s leading AI-powered developer platform.
            </Text>
          </Box>

          <HomeAsk />

          <Flex
            marginTop={{base:'8%',md:"6%"}}
            width="95%"
            height={{base:'auto',md:"120px"}}
            justify="flex-start"
            align="flex-start"
            direction="column"
          >
            <Text
              as="h3"
              fontSize="1.1rem"
              fontWeight={380}
              opacity={0.7}
              marginTop={0}
            >
              Trusted by the world’s leading organizations ↘️
            </Text>
            <Box 
              width="full"
              height="80%"
              gap="20px"
              display={{base:'grid',md:"flex"}}
              gridTemplateColumns='1fr 1fr'
              gridColumnGap='13px'
              gridRowGap='20px'
              justifyContent="center"
              alignItems="center"
            >
              <Image filter="grayscale(100%)" src='/images/kpmg.svg' alt="edv" />
              <Image filter="grayscale(100%)" src='/images/kpmg.svg' alt="edv" />
              <Image filter="grayscale(100%)" src='/images/kpmg.svg' alt="edv" />
              <Image filter="grayscale(100%)" src='/images/kpmg.svg' alt="edv" />
              <Image filter="grayscale(100%)" src='/images/kpmg.svg' alt="edv" />
              <Image filter="grayscale(100%)" src='/images/kpmg.svg' alt="edv" />
            </Box>
          </Flex>
        </Box>
      </Box>

      <div className="content">
        <h1>hello</h1>
      </div>

      <Center
        zIndex={0}
        position="absolute"
        right={0}
        w={{base:'full',md:"350px"}}
        h={{base:'50vh',md:'585px'}}
        top={{base:"-5rem",md:"1rem"}}
        transform={{base:'rotate(0deg)',md:'none'}}
        opacity={{base:'0.6',md:1}}
        bottom="auto"
        _after={{
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          height: "60px",
          background: afterback,
          bottom: "0",
        }}
        _before={{
          content: '""',
          position: "absolute",
          left: 0,
          right: 0,
          height: "40px",
          top: "0",
          background: beforeback,
        }}
        pointerEvents="none"
      >
        <Show breakpoint='(min-width: 780px)'>
          <Image w="full" h="full" src='/images/homeback.png' alt="Myage" />
        </Show>
        <Show below="780px">
          <Image w={{base:'100%',md:"full"}} objectFit='cover' h="full" src='/images/homeback1.png' alt="Myage" />
        </Show>

        <div className="shadow"></div>
      </Center>
    </Box>
  );
};

export default Home;
