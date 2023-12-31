import React, { useState } from "react";
import { LogOut ,Menu } from "lucide-react";
import { user } from "../../interface/interface";
import { Text, Button, Box , Divider ,Flex , Show} from "@chakra-ui/react";
import { dashboardNavProps } from '../../interface/interface'

const Settings: React.FC<dashboardNavProps> = (props) => {
  const { navchange } = props;
  const Data: string | null = localStorage.getItem("codeQuestUSER");
  const userdata: user | null = Data ? JSON.parse(Data) : null;
  const [user, setuser] = useState<user | null>(userdata);

  const [useredit, setuseredit] = useState<user | null>(user);


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
                navchange(true);
              }}
            />
          </Show>
          <Text fontSize="1.3rem" letterSpacing='1px' fontWeight={600} as="h2">
            Settings
          </Text>
        </Flex>
        <Button
            variant="solid"
            px={5}
            paddingY={0}
            h={38}
            fontSize="0.83rem"
            bg="button.bg"
            color="button.color"
            transition="0.5s ease-in-out"
            borderRadius={4}
            gap={3}
            _hover={{ bg: "button.hover", transform: "scale(1.03)" }}
          >
            Logout <LogOut size={17} />
          </Button>


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
          <Button
            variant="solid"
            px={4}
            paddingY={0}
            h={38}
            fontSize="0.85rem"
            bg="button.bg"
            color="button.color"
            transition="0.5s ease-in-out"
            borderRadius={4}
            _hover={{ bg: "button.hover", transform: "scale(1.05)" }}
          >
            Save Changes
          </Button>
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
  );
};

export default Settings;
