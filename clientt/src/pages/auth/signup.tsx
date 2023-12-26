import React, { useEffect, useState } from "react";
import Logo from "../../images/mainlogog.png";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { signupInterface } from "../../interface/interface";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { signup } from "../../redux/action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { SIGNUPERROR, EMAIL } from "../../redux/actionTypes";
import { RootState } from "../../redux";
import { Text, Flex, Center, Button, Image } from "@chakra-ui/react";
import { Dispatch } from "redux";

const Signup: React.FC = () => {
  useEffect(() => {
    document.title = "codeQuest - signup";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navigate = useNavigate();
  const dispatch: Dispatch<any> = useDispatch();
  const store = useSelector((state: RootState) => state);
  const [flag, setflag] = useState<boolean>(false);
  const [error, seterror] = useState<string>("");
  const [data, setdata] = useState<signupInterface>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    organization: "",
    typeOfWork: "",
    termsncontd: false,
  });

  useEffect(() => {
    if (store.user.email.length !== 0) {
      setdata({ ...data, email: store.user.email });
      dispatch({ type: EMAIL, payload: "" });
    }
  }, [store?.user?.email]);

  useEffect(() => {
    if (store.user.signuperror !== "") {
      seterror(store.user.signuperror);
      dispatch({ type: SIGNUPERROR, payload: "" });
    }
    // eslint-disable-next-line
  }, [store.user.signuperror]);

  const check = () => {
    seterror("");
    if (
      data.firstName.trim() === "" ||
      data.lastName.trim() === "" ||
      data.email.trim() === "" ||
      data.confirmPassword.trim() === ""
    ) {
      Alert("Enter all required details properly");
    } else if (data.password !== data.confirmPassword) {
      Alert("Password confirmation not matching !");
    } else if (!data.email.includes("@")) {
      Alert("Provide Proper Email ID !");
    } else if (data.termsncontd === false) {
      Alert("Please check the terms and condition policies");
    } else {
      dispatch(signup(data, navigate));
    }
  };

  const Alert = (msg: string) => {
    seterror(msg);
    setTimeout(() => {
      alert(msg);
    }, 1000);
  };

  return (
    <Center
      bg="#232323"
      color="white"
      w="100vw"
      h="100vh"
      pos="relative"
      // className="Signup"
      overflow='hidden'
    >
      <Flex
        bg="#2B2F35"
        w={{base:'90%',md:"80%"}}
        h={{base:'85%',md:"520px"}}
        overflowY={{base:'scroll',md:'hidden'}}
        borderRadius="10px"
        direction="column"
        align="center"
        pos="relative"
        // className="container"
      >

        <Flex mt={{base:'10px',md:'auto'}} w="full" h={{base:"140px",md:"13%"}}  justify={{base:'center',md:"flex-start"}} align='flex-start'  direction={{base:'column',md:'row'}} gap={{base:'12px',md:'auto'}}  >

          <Flex
            w="auto"
            h={{base:'auto',md:"100%"}}
            ml={{ base: "10px", md: "25px" }}
            justify="flex-start"
            align="center"
            gap="2px"
            mr="2px"
          >
            <Image width={{base:'50px',md:"30%"}} height={{base:'50px',md:"55%"}} src={Logo} alt="ds" />

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
            display={{base:'none',md:'flex'}}
          >
            •
          </Center>

          <Flex w="190px" h={{base:'auto',md:"full"}} ml={{base:'25px',md:"2px"}} justify="flex-start" align="center">
            <Text as="h2" m={0} fontSize="1.35rem" fontWeight={520}>
              Create A Account
            </Text>
          </Flex>


        </Flex>


        <Flex
          justify="center"
          direction="column"
          mt={{base:'25px',md:"12px"}}
          w={{base:'85%',md:"90%"}}
          h={{base:'auto',md:"65%"}}
          // className="form"
          gap={{base:'35px',md:'auto'}}
        >

          <Flex w="full" h={{base:'auto',md:"6rem"}} gap={{base:'19px',md:"40px"}} direction={{base:'column',md:'row'}}  >

            <Flex
              pos="relative"
              w="280px"
              h={{base:'5rem',md:"70%"}}
              direction="column"
              gap={{base:'5px',md:"10px"}}
            >
              <Text as="p" fontWeight={550} fontSize={{base:'1.08rem',md:'auto'}} >
                Enter First Name{" "}
                <Text as="span" color="red">
                  *
                </Text>
              </Text>
              <input
                className="SIGNUPinput"
                type="text"
                placeholder="First Name"
                value={data.firstName}
                onChange={(e) =>
                  setdata({ ...data, firstName: e.target.value })
                }
              />
            </Flex>


            <Flex
              pos="relative"
              w="280px"
              h={{base:'5rem',md:"70%"}}
              direction="column"
              gap={{base:'5px',md:"10px"}}
            >
              <Text as="p" fontWeight={550}>
                Enter First Name{" "}
                <Text as="span" color="red">
                  *
                </Text>
              </Text>
              <input
                className="SIGNUPinput"
                type="text"
                placeholder="Last Name"
                value={data.lastName}
                onChange={(e) => setdata({ ...data, lastName: e.target.value })}
              />
            </Flex>

            <Flex
              pos="relative"
              w="280px"
              h={{base:'5rem',md:"70%"}}
              direction="column"
              gap={{base:'5px',md:"10px"}}
            >
              <Text as="p" fontWeight={550}>
                Enter First Name{" "}
                <Text as="span" color="red">
                  *
                </Text>
              </Text>
              <input
                className="SIGNUPinput"
                type="text"
                placeholder="email"
                value={data.email}
                onChange={(e) => setdata({ ...data, email: e.target.value })}
              />
            </Flex>
          </Flex>





          <Flex w="full" h={{base:'auto',md:"6rem"}} gap={{base:'19px',md:"40px"}} direction={{base:'column',md:'row'}} mt={{base:'25px',md:'10px'}}>
            <Flex
              pos="relative"
              w="280px"
              h={{base:'5rem',md:"70%"}}
              direction="column"
              gap={{base:'5px',md:"10px"}}
            >
              <Text as="p" fontWeight={550}>
                Enter First Name{" "}
                <Text as="span" color="red">
                  *
                </Text>
              </Text>
              <input
                className="SIGNUPinput"
                type={flag === true ? "text" : "password"}
                placeholder="password"
                value={data.password}
                onChange={(e) => setdata({ ...data, password: e.target.value })}
              />
              {flag === false ? (
                <Eye
                  className="EYESIGNUPicon"
                  size={18}
                  onClick={(e) => {
                    setflag(true);
                  }}
                />
              ) : (
                <EyeOff
                  className="EYESIGNUPicon"
                  size={18}
                  onClick={(e) => {
                    setflag(false);
                  }}
                />
              )}
            </Flex>

            <Flex
              pos="relative"
              w="280px"
              h={{base:'5rem',md:"70%"}}
              direction="column"
              gap={{base:'5px',md:"10px"}}
            >
              <Text as="p" fontWeight={550}>
                Enter First Name{" "}
                <Text as="span" color="red">
                  *
                </Text>
              </Text>
              <input
                className="SIGNUPinput"
                type={flag === true ? "text" : "password"}
                placeholder="password"
                value={data.confirmPassword}
                onChange={(e) =>
                  setdata({ ...data, confirmPassword: e.target.value })
                }
              />
              {flag === false ? (
                <Eye
                  className="EYESIGNUPicon"
                  size={18}
                  onClick={(e) => {
                    setflag(true);
                  }}
                />
              ) : (
                <EyeOff
                  className="EYESIGNUPicon"
                  size={18}
                  onClick={(e) => {
                    setflag(false);
                  }}
                />
              )}
            </Flex>
          </Flex>

          <Flex w="full" h={{base:'auto',md:"6rem"}} gap={{base:'19px',md:"40px"}} direction={{base:'column',md:'row'}} mt={{base:'25px',md:'10px'}}>
            <Flex
              pos="relative"
              w="280px"
              h={{base:'5rem',md:"70%"}}
              direction="column"
              gap={{base:'5px',md:"10px"}}
            >
              <Text as="p" fontWeight={550}>
                Enter First Name{" "}
                <Text as="span" color="red">
                  *
                </Text>
              </Text>
              <input
                className="SIGNUPinput"
                type="text"
                placeholder="Last Name"
                value={data.lastName}
                onChange={(e) => setdata({ ...data, lastName: e.target.value })}
              />
            </Flex>

            <Flex
              pos="relative"
              w="280px"
              h={{base:'5rem',md:"70%"}}
              direction="column"
              gap={{base:'5px',md:"10px"}}
            >
              <Text as="p" fontWeight={550}>
                Enter First Name{" "}
                <Text as="span" color="red">
                  *
                </Text>
              </Text>
              <input
                className="SIGNUPinput"
                type="text"
                placeholder="Last Name"
                value={data.lastName}
                onChange={(e) => setdata({ ...data, lastName: e.target.value })}
              />
            </Flex>
          </Flex>



          <Flex w="full" h={{base:'5rem',md:"2rem"}} gap={{base:'25px',md:"40px"}} direction={{base:'column',md:'row'}} >

            <Flex mt={0} w="280px" h={{base:'2.5rem',md:"2rem"}} gap="10px">
              <input
                type="checkbox"
                onChange={(e) =>
                  setdata({ ...data, termsncontd: e.target.checked })
                }
              />
              <Text as="p" fontSize="0.8rem" fontWeight={500}>
                I Have Read And Agree All Rerms & Conditions
              </Text>
            </Flex>

            <Flex mt={0} w="280px" h={{base:'2.5rem',md:"2rem"}}  gap="10px" >
              <Text
                m={0}
                as="p"
                fontSize="0.8rem"
                fontWeight={500}
                display="flex"
                alignItems="center"
                gap="10px"
                // className="olduser"
              >
                Already an Member ?
                <Text
                  as="p"
                  color="#6336a8"
                  fontSize="0.9rem"
                  transition="0.5s ease-in-out"
                  _hover={{
                    transform: "scale(1.06)",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  onClick={(e) => {
                    e.preventDefault();
                    navigate("/auth/signin");
                  }}
                >
                  Login
                </Text>
              </Text>
            </Flex>
          </Flex>
        </Flex>




        <Center pos="absolute" bottom="0" fontSize='1.15rem' fontWeight={550} gap='10px'>
          {error ? <ErrorOutlineIcon /> : ""} {error}
        </Center>



        <Flex
          w="90%"
          h={{base:'5rem',md:"3rem"}}
          justify="flex-end"
          align="center"
          my="30px"
          // className="submit"
        >
          <Button
            bgColor="#753fc8"
            border="none"
            color="white"
            padding={{base:'14px 26px',md:"10px 14px"}}
            borderRadius="6px"
            fontSize={{base:'1rem',md:"0.85rem"}}
            fontWeight="550"
            transition="0.5s ease"
            cursor="pointer"
            onClick={check}
            _hover={{bg:'#6336a8',transform:'scale(1.04)'}}
          >
            Create An Account
          </Button>
        </Flex>
      </Flex>

      <Text as='p' pos='absolute' bottom='0' fontSize='0.66rem' fontWeight={570} w='100%' textAlign='center'>
        Copyright © 2023 Jamal Mydeen | Built using ReactJS
      </Text>
    </Center>
  );
};

export default Signup;
