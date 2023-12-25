import React, { useState, useEffect } from "react";
import "../../scss/auth/signin.scss";
import Logo from "../../images/mainlogog.png";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { signinInterface } from "../../interface/interface";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { LOGINERROR } from "../../redux/actionTypes";
import { login } from "../../redux/action";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux";

import { Flex, Center, Text, Button, Image } from "@chakra-ui/react";

const Signin = () => {
  useEffect(() => {
    // Update document title when component mounts
    document.title = "codeQuest - login";
    // Clean up document title when component unmounts
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();
  const dispatch = useDispatch<any>();
  const store = useSelector((state: RootState) => state);
  const [flag, setflag] = useState<boolean>(false);
  const [error, seterror] = useState<string>("");
  const [data, setdata] = useState<signinInterface>({
    email: "",
    password: "",
  });

  const check = () => {
    seterror("");
    if (data.email.trim() === "" || data.password.trim() === "") {
      Alert("Enter all required details properly");
    } else {
      dispatch(login(data, navigate));
    }
  };

  const Alert = (msg: string) => {
    seterror(msg);
    setTimeout(() => {
      alert(msg);
    }, 1000);
  };

  useEffect(() => {
    if (store.user.loginerror.length !== 0) {
      seterror(store.user.loginerror);
      dispatch({ type: LOGINERROR, payload: "" });
    }
    // eslint-disable-next-line
  }, [store.user.loginerror]);

  const inputStyles = {
    height: "40%",
    width: "100%",
    backgroundColor: "transparent",
    border: "none",
    borderBottom: "1.6px solid grey",
    outline: "none",
    color: "white",
    transition: "border-bottom 0.3s ease",
  };

  const errorStyles = {
    width: '100%',
    color: 'red',
    fontSize: '0.75rem',
    fontWeight: 550,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
  };

  const iconStyles ={
    position:'absolute',
    top:'50%',
    right:'2%',
    cursor:'pointer'
  }

  return (
    <Center color="white" bg="#232323" w="100vw" h="100vh" >
      <Flex
        position="relative"
        w={{base:"90%",sm:"60%",lg:"420px"}}
        h={{base:'430px' , sm:"530px",lg:"430px"}}
        marginTop={{base:"-110px",sm:"-150px",lg:"0px"}}
        borderRadius="10px"
        direction="column"
        justify="flex-start"
        align="center"
        bg='#2B2F35'
      >
        <Flex w="full" h="20%" justify="flex-start">
          <Flex
            w="auto"
            h="100%"
            ml="25px"
            justify="flex-start"
            align="center"
            gap="2px"
            mr="2px"
          >
            <Image width="30%" height="55%" src={Logo} alt="ds" />
            <Text
              as="h2"
              m={0}
              fontWeight={500}
              opacity={0.9}
              fontSize="1.3rem"
            >
              codeQuest
            </Text>
          </Flex>

          <Center
            w="30px"
            h="100%"
            m={0}
            p={0}
            fontSize="1.2rem"
            fontWeight={500}
          >
            •
          </Center>

          <Flex w="100px" h="full" ml="2px" justify="flex-start" align="center">
            <Text as="h2" m={0} fontSize="1.4rem" fontWeight={520}>
              Login
            </Text>
          </Flex>
        </Flex>

        <Flex
          w="80%"
          h="60%"
          mt="20px"
          justify="flex-start"
          align="flex-start"
          direction='column'
          gap="20px"
        >
          <Flex position="relative" direction='column' w="73%" h="30%" gap='10px'>
            <Text as="p" m={0} fontSize="0.95rem" fontWeight={540}>
              Enter Your Email
            </Text>
            <input 
              className="signin_inputs"
              type="email"
              placeholder="Email"
              value={data.email}
              onChange={(e) => setdata({ ...data, email: e.target.value })}
            />
          </Flex>

          <Flex position="relative" direction='column' gap='10px' w="73%" h="30%" >
            <Text as="p" m={0} fontSize="0.95rem" fontWeight={540}>
              Enter Your Password
            </Text>
            <input
              className="signin_inputs"
              type={flag === true ? "text" : "password"}
              placeholder="Password"
              value={data.password}
              onChange={(e) => setdata({ ...data, password: e.target.value })}
            />
            {flag === false ? (
              <Eye
                className="icon"
                size={18}
                onClick={(e) => {
                  setflag(true);
                }}
              />
            ) : (
              <EyeOff
                className="icon"
                size={18}
                onClick={(e) => {
                  setflag(false);
                }}
              />
            )}
          </Flex>

          <Flex
            justify="flex-start"
            align="center"
            h="3rem"
            w="full"
            gap="2rem"
          >
            <Button
              bg="#753fc8"
              border="none"
              color="white"
              variant='solid'
              padding="8px 28px"
              borderRadius="6px"
              fontSize="0.95rem"
              textTransform="capitalize"
              fontWeight="550"
              transition="0.5s ease"
              cursor="pointer"
              _hover={{
                bg: "#6336a8",
                transform: "scale(1.04) translateZ(0)",
              }}
              onClick={check}
            >
              Login
            </Button>

            <span style={errorStyles}>
              {error ? <ErrorOutlineIcon /> : ""} {error}
            </span>
          </Flex>
        </Flex>

        <Flex w='80%' textAlign='left' 
        m={0} fontSize='0.8rem' gap='10px' justify='flex-start' align='flex-start'>
          New To This Platform ?{" "}
          <Text 
          m={0} color='#6336a8' transition='0.5s ease-in-out' cursor='pointer'
          _hover={{transform:"scale(1.04)" , textDecoration:"underline"}}
            onClick={(e) => {
              e.preventDefault();
              navigate("/auth/signup");
            }}
          >
            Register Here
          </Text>
        </Flex>

      </Flex>

      <Text as='p' pos='absolute' bottom={0} fontSize='0.66rem' fontWeight={570} w='100%' textAlign='center'>
        Copyright © 2023 Jamal Mydeen | Built using ReactJS
      </Text>
    </Center>
  );
};

export default Signin;
