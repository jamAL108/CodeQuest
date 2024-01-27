'use client';
import React, { useEffect, useState } from "react";
import { LogOut ,Menu } from "lucide-react";
import { user } from "../../interface/interface";
import { Text, Button, Box , Divider ,Flex , Show} from "@chakra-ui/react";
import { dashboardNavProps } from '../../interface/interface'
import Nav from '@/components/commonComponent/nav'
const Settings: React.FC = () => {
  const [user, setuser] = useState<user | null>(null);

  const [useredit, setuseredit] = useState<user | null>(user);

  useEffect(()=>{
    const Data: string | null = localStorage.getItem("codeQuestUSER");
    const userdata: user | null = Data ? JSON.parse(Data) : null;
    setuser(userdata)
  },[])


  const inputStyles = {
    backgroundColor: "transparent",
    width: "90%",
    height: "40%",
    border: "2px solid rgba(209, 203, 203, 0.3)",
    outline: "none",
    borderRadius: "5px",
    fontSize:"0.822rem",
    color: "white",
    paddingLeft: "8px",
    filter: "brightness(1.5)",
  };
  return (
    <Flex  w='100vw' h='100vh' overflow='hidden' fontFamily='Poppins , sans-serif' className="dashboard">
    <Nav/>
    <Flex w={{base:'100%',md:'80%'}} h='100vh' bg='#202029' color='white' borderLeft='1px solid #23232b' justify='flex-start' align='center' direction='column'  className="setting">

      <Box 
           display="flex" 
           justifyContent="space-between" 
           alignItems="center"
           w="92%"
           height={{base:'5.5rem',md:"5rem"}}
           >
                <Flex gap={2} align="center">
          <Show below="786px">
            <Menu
              size={23}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                // navchange(true);
              }}
            />
          </Show>
          <Text fontSize="1.3rem" letterSpacing='1px' fontWeight={600} as="h2">
            Settings
          </Text>
        </Flex>
        <button
        className="bg-[#7299F2] hover:bg-[#6a8de1] text-[#202029] transition duration-500 ease-in-out hover:scale-[1.03] text-[0.83rem] gap-3 rounded-[4px] h-[38px] py-0 px-[5px] "
          >
            Logout <LogOut size={17} />
          </button>


      </Box>

     <Divider w="94%" border="1px solid #ffffff" opacity={0.2}/>

      <Box w="92%" h="auto" color="accent.light">
        <Box 
        display="flex" 
        justifyContent="space-between" 
        alignItems="center"
        marginTop="14px"
        w="full"
        >
          <Text fontSize="1.15rem" fontWeight={600} as="h2" >Your Details</Text>
          <button 
          className="bg-[#7299F2] hover:bg-[#6a8de1] text-[#202029] transition duration-500 ease-in-out hover:scale-[1.03] text-[0.83rem] gap-3 rounded-[4px] h-[38px] py-0 px-[5px]">
            Save Changes
          </button>
        </Box>

          
          <Box 
          marginTop={{base:"25px",md:"15px"}}
          w="full"
          h="auto"
          display={{base:"flex",md:"grid"}}
          flexDirection='column'
          gridAutoRows={{base:"none",md:"auto 1fr auto"}}
          gap={{base:"13px",md:"21px"}}
          >

           <Flex 
           w='full' h='5.5rem'  justify='flex-start' align='center' gap={{base:"20px",md:'30px'}} 
            gridRow={{base:"none",md:1}}
            id="child"
           >
            <Flex justify='center' h='full' w={{base:"46%",md:'270px'}} align='flex-start' direction='column' gap='7px'>
              <Text m={0}  fontSize='0.73rem' fontWeight={500} >First Name</Text>
              <input
                type="text"
                style={
                  useredit?.firstName !== user?.firstName
                  ? {...inputStyles , border: "2px solid #6a8de1" }
                  : {...inputStyles , border: "2px solid rgba(209, 203, 203, 0.3)" }
                }
                value={useredit?.firstName}
                onChange={(e) => {
                  if (useredit) {
                    setuseredit({ ...useredit, firstName: e.target.value });
                  }
                }}
              />

            </Flex>



 
            <Flex justify='center' h='full' w={{base:"46%",md:'270px'}}  align='flex-start' direction='column' gap='7px'>
              <Text m={0}  fontSize='0.73rem' fontWeight={500} >Last Name</Text>
              <input 
                type="text"
style={  useredit?.lastName !== user?.lastName
                    ? {...inputStyles , border: "2px solid #6a8de1" }
                    : {...inputStyles , border: "2px solid rgba(209, 203, 203, 0.3)" }
                }
                value={useredit?.lastName}
                onChange={(e) => {
                  if (useredit) {
                    setuseredit({ ...useredit, lastName: e.target.value });
                  }
                }}
              />

            </Flex>

            </Flex>



          <Flex       
          w='full' h={{base:'5.5rem',md:'5.5rem'}} gap={{base:"20px",md:'30px'}} flexWrap='wrap' justify='flex-start' align='center'  
          gridRow={{base:"none",md:2}}
            id="child">

            <Flex justify='center' h='full' w={{base:"46%",md:'270px'}} align='flex-start' direction='column' gap='7px'>
             <Text m={0}  fontSize='0.73rem' fontWeight={500} >Email</Text>
              <input
                type="text"
                style={
                  useredit?.email !== user?.email
                  ? {...inputStyles , border: "2px solid #6a8de1" }
                  : {...inputStyles , border: "2px solid rgba(209, 203, 203, 0.3)" }
                }
                value={useredit?.email}
                onChange={(e) => {
                  if (useredit) {
                    setuseredit({ ...useredit, email: e.target.value });
                  }
                }}
              />
            </Flex>

            <Flex justify='center' h='full' w={{base:"46%",md:'270px'}}  align='flex-start' direction='column' gap='7px'>
              <Text m={0}  fontSize='0.73rem' fontWeight={500} >Password</Text>
              <input
                type="text"
                style={
                  useredit?.password !== user?.password
                  ? {...inputStyles , border: "2px solid #6a8de1" }
                  : {...inputStyles , border: "2px solid rgba(209, 203, 203, 0.3)" }
                }
                value={useredit?.password}
                onChange={(e) => {
                  if (useredit) {
                    setuseredit({ ...useredit, password: e.target.value });
                  }
                }}
              />
            </Flex>

            <Flex justify='center' h='full' w='270px' align='flex-start' direction='column' gap='7px'>
              <Text m={0}  fontSize='0.73rem' fontWeight={500} >Confirm Password</Text>
              <input
                type="text"
                style={
                  useredit?.password !== user?.password
                  ? {...inputStyles , border: "2px solid #6a8de1" }
                  : {...inputStyles , border: "2px solid rgba(209, 203, 203, 0.3)" }
                }
                value={useredit?.password}
                onChange={(e) => {
                  if (useredit) {
                    setuseredit({ ...useredit, password: e.target.value });
                  }
                }}
              />
            </Flex>

          </Flex>


          <Flex        
          w='full'  marginTop={{base:"110px",md:"auto"}} h='5.5rem' gap={{base:"20px",md:'30px'}}   justify='flex-start' align='center'    
          gridRow={{base:"none",md:3}}
            id="child"
            >

            <Flex h='full' w='270px' justify='center' align='flex-start' direction='column' gap='7px'>
              <Text m={0}  fontSize='0.73rem' fontWeight={500} >organization</Text>
              <input
                type="text"
                style={
                  useredit?.organization !== user?.organization
                  ? {...inputStyles , border: "2px solid #6a8de1" }
                  : {...inputStyles , border: "2px solid rgba(209, 203, 203, 0.3)" }
                }
                value={useredit?.organization}
                onChange={(e) => {
                  if (useredit) {
                    setuseredit({ ...useredit, organization: e.target.value });
                  }
                }}
              />
            </Flex>

            <Flex h='full' justify='center' w='270px' align='flex-start' direction='column' gap='7px'>
              <Text m={0}  fontSize='0.73rem' fontWeight={500} >type Of Work</Text>
              <input
                type="text"
                style={
                  useredit?.typeOfWork !== user?.typeOfWork
                  ? {...inputStyles , border: "2px solid #6a8de1" }
                  : {...inputStyles , border: "2px solid rgba(209, 203, 203, 0.3)" }
                }
                value={useredit?.typeOfWork}
                onChange={(e) => {
                  if (useredit) {
                    setuseredit({ ...useredit, typeOfWork: e.target.value });
                  }
                }}
              />
            </Flex>

          </Flex>


          </Box>
        </Box>
    </Flex>
    </Flex>
  );
};

export default Settings;
