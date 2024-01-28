'use client';
import React, { useEffect, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { signupInterface } from "../../../interface/interface";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { Text, Flex, Center, Button, Image } from "@chakra-ui/react";
import { Dispatch } from "redux";
import {  addEmail , addSignupError , signup } from "@/redux/userSlice";
import {  signupWithEmailPassword  } from '@/auth/index'
import { ColorRing } from 'react-loader-spinner'
import storeNewUserDataFunction from '@/apireq/storeNewUserData'

const Signup: React.FC = () => {
  useEffect(() => {
    document.title = "codeQuest - signup";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const router = useRouter();
  const dispatch: Dispatch<any> = useDispatch();
  const userStore = useSelector((state: any) => state.user);
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
  const [request , setrequest] = useState<boolean>(false);

  useEffect(() => {
    if (userStore.email.length !== 0) {
      setdata({ ...data, email: userStore.email });
      dispatch(addEmail(""));
    }
  }, [userStore?.email]);

  useEffect(() => {
    if (userStore.signuperror !== "") {
      seterror(userStore.signuperror);
      dispatch(addSignupError(""));
    }
    // eslint-disable-next-line
  }, [userStore.signuperror]);

  const check = () => {
    setrequest(true)
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
      API();      
    }
  };

  const API = async ()=>{
     try{
      const dataToBePassed={
        data, router
      }
     dispatch(signup(dataToBePassed));
     const objectForSupabaseSignup ={
      email:data.email,
      password:data.password
     }
     const result = await signupWithEmailPassword(objectForSupabaseSignup);
     const newUserRowCreateInSupaBase = await storeNewUserDataFunction(data)
     console.log(newUserRowCreateInSupaBase)
     console.log(result)
     setrequest(false)
     }catch(err){
        console.log(err)
        setrequest(false)
     }
  }

  const Alert = (msg: string) => {
    setrequest(false)
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
            <Image width={{base:'50px',md:"30%"}} height={{base:'50px',md:"55%"}} src='/images/mainlogog.png' alt="ds" />

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
              h={{base:'5rem',md:"90%"}}
              direction="column"
              gap={{base:'5px',md:"10px"}}
            >
              <Text as="p" fontWeight={550} fontSize={{base:'1.08rem',md:'auto'}} >
                Enter First Name{" "}
                <span  className="text-[#FF0000]" >
                  *
                </span>
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
              h={{base:'5rem',md:"90%"}}
              direction="column"
              gap={{base:'5px',md:"10px"}}
            >
              <Text as="p" fontWeight={550}>
                Enter Last Name{" "}
                <span  className="text-[#FF0000]" >
                  *
                </span>
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
              h={{base:'5rem',md:"90%"}}
              direction="column"
              gap={{base:'5px',md:"10px"}}
            >
              <Text as="p" fontWeight={550}>
                Enter Email{" "}
                <span  className="text-[#FF0000]" >
                  *
                </span>
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
              h={{base:'5rem',md:"90%"}}
              direction="column"
              gap={{base:'5px',md:"10px"}}
            >
              <Text as="p" fontWeight={550}>
                Enter Password{" "}
                <span  className="text-[#FF0000]" >
                  *
                </span>
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
              h={{base:'5rem',md:"90%"}}
              direction="column"
              gap={{base:'5px',md:"10px"}}
            >
              <Text as="p" fontWeight={550}>
                confirm Password{" "}
                <span  className="text-[#FF0000]" >
                  *
                </span>
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
              h={{base:'5rem',md:"90%"}}
              direction="column"
              gap={{base:'5px',md:"10px"}}
            >
              <Text as="p" fontWeight={550}>
                Enter organization{" "}
              </Text>
              <input
                className="SIGNUPinput"
                type="text"
                placeholder="organization"
                value={data.organization}
                onChange={(e) => setdata({ ...data, organization: e.target.value })}
              />
            </Flex>

            <Flex
              pos="relative"
              w="280px"
              h={{base:'5rem',md:"90%"}}
              direction="column"
              gap={{base:'5px',md:"10px"}}
            >
              <Text as="p" fontWeight={550}>
                Enter typeOfWork{" "}
              </Text>
              <input
                className="SIGNUPinput"
                type="text"
                placeholder="typeOfWork"
                value={data.typeOfWork}
                onChange={(e) => setdata({ ...data, typeOfWork: e.target.value })}
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
                as="h1"
                fontSize="0.8rem"
                fontWeight={500}
                display="flex"
                alignItems="center"
                gap="10px"
                // className="olduser"
              >
                Already an Member ?
                <p className="text-[#6336a8] hover:scale-[1.06] hover:underline cursor-pointer text-[0.9rem] transition duration-500 ease-in-out" 
                  onClick={(e) => {
                    e.preventDefault();
                    router.push("/auth/signin");
                  }}
                >
                  Login
                </p>
              </Text>
            </Flex>
          </Flex>
        </Flex>




        <Center pos="absolute" bottom="10" left="10" fontSize='1.15rem' fontWeight={550} gap='10px'>
          <p className="text-[#FF0000] text-[0.9rem] tracking-[1px] font-[400] gap-[10px] flex">{error ? <ErrorOutlineIcon className="w-[20px] h-[20px]" /> : ""} {error}</p>
        </Center>



        <Flex
          w="90%"
          h={{base:'5rem',md:"3rem"}}
          justify="flex-end"
          align="center"
          my="30px"
          // className="submit"
        >



{/* <Button className="gap-1" disabled={request} style={request===true ? {opacity:0.67} : {opacity:1}} onClick={(e) => {
          handlesubmit();
        }}> <ColorRing
                visible={request}
                height="30"
                width="30"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#fff', '#fff', '#fff', '#fff', '#fff']}
              />
             Translate</Button> */}



          <button
          className="flex justify-center items-center gap-1   bg-[#753fc8] border-none text-white base:py-[14px] md:py-[10px] base:px-[26px] md:px-[14px] rounded-[6px] base:text-[1rem] md:text-[0.85rem] font-[550] tranition duration-500 ease-in-out cursor-pointer hover:bg-[#6336a8] hover:scale-[1.04)" 
          onClick={check}
          disabled={request} style={request===true ? {opacity:0.67} : {opacity:1}}
          >  
          <ColorRing
                visible={request}
                height="30"
                width="30"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#fff', '#fff', '#fff', '#fff', '#fff']}
              />
            Create An Account
          </button>
        </Flex>
      </Flex>

      <Text as='p' pos='absolute' bottom='0' fontSize='0.66rem' fontWeight={570} w='100%' textAlign='center'>
        Copyright © 2023 Jamal Mydeen | Built using ReactJS
      </Text>
    </Center>
  );
};

export default Signup;
