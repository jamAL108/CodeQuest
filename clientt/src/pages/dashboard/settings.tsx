import React, { useState } from "react";
import "../../scss/dashboard/settings.scss";
import { LogOut } from "lucide-react";
import { motion } from "framer-motion";
import { user } from "../../interface/interface";
import { Text, Button, Box , Divider , Input} from "@chakra-ui/react";
const Settings = () => {
  const Data: string | null = localStorage.getItem("codeQuestUSER");
  const userdata: user | null = Data ? JSON.parse(Data) : null;
  console.log(userdata);
  const [user, setuser] = useState<user | null>(userdata);

  const [useredit, setuseredit] = useState<user | null>(user);

  console.log(useredit);

  return (
    <div className="setting">
      {/* <motion.div
        className="upper"
        initial={{ scale: 0, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ type: "tween" }}
      >
        <Text fontSize="1.3rem" fontWeight={600} as="h2">
          Settings
        </Text>
        <div className="btn">
          logout <LogOut size={17} />
        </div>
      </motion.div> */}

      <Box 
           display="flex" 
           justifyContent="space-between" 
           alignItems="center"
           w="92%"
           height="5rem"
           >
         <Text fontSize="1.3rem" color="white" fontWeight={600} as="h2">
          Settings
        </Text>

        {/* <div className="btn">
          logout <LogOut size={17} />
        </div> */}

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

      {/* <motion.div
        className="line"
        initial={{ scale: 0, opacity: 0 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 0.2, scale: 1 }}
        transition={{ type: "tween" }}
      ></motion.div> */}

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

        {/* <div className="form"> */}
          
          <Box 
          marginTop="15px"
          w="full"
          h="auto"
          display="grid"
          gridAutoRows="auto 1fr auto"
          gap="30px"
          >
{/* 
          <div style={{ gridRow: "1" }} id="child"> */}

           <Box 
            gridRow={1}
            id="child"
           >
            <div className="input-section">
              <p>First Name</p>
              {/* <input
                type="text"
                style={
                  useredit?.firstName !== user?.firstName
                    ? { border: "2px solid #6a8de1" }
                    : { border: "2px solid rgba(209, 203, 203, 0.3)" }
                }
                value={useredit?.firstName}
                onChange={(e) => {
                  if (useredit) {
                    setuseredit({ ...useredit, firstName: e.target.value });
                  }
                }}
              /> */}
             <Input variant='outline' placeholder='Enter Your firstName'
             border={ 
              useredit?.firstName !== user?.firstName
              ? { border: "2px solid #6a8de1" }
              : { border: "2px solid rgba(209, 203, 203, 0.3)" }
            }
              value={useredit?.firstName}
                onChange={(e) => {
                  if (useredit) {
                    setuseredit({ ...useredit, firstName: e.target.value });
                  }
                }} />
            </div>
            <div className="input-section">
              <p>Last Name</p>
              <input
                type="text"
                style={
                  useredit?.lastName !== user?.lastName
                    ? { border: "2px solid #6a8de1" }
                    : { border: "2px solid rgba(209, 203, 203, 0.3)" }
                }
                value={useredit?.lastName}
                onChange={(e) => {
                  if (useredit) {
                    setuseredit({ ...useredit, lastName: e.target.value });
                  }
                }}
              />
            </div>
            </Box>


          <Box           
            gridRow={2}
            id="child">
            <div className="input-section">
              <p>Email ID</p>
              <input
                type="text"
                style={
                  useredit?.email !== user?.email
                    ? { border: "2px solid #6a8de1" }
                    : { border: "2px solid rgba(209, 203, 203, 0.3)" }
                }
                className="readonly"
                readOnly
                value={useredit?.email}
                onChange={(e) => {
                  if (useredit) {
                    setuseredit({ ...useredit, email: e.target.value });
                  }
                }}
              />
            </div>
            <div className="input-section">
              <p>password</p>
              <input
                type="text"
                style={
                  useredit?.password !== user?.password
                    ? { border: "2px solid #6a8de1" }
                    : { border: "2px solid rgba(209, 203, 203, 0.3)" }
                }
                value={useredit?.password}
                onChange={(e) => {
                  if (useredit) {
                    setuseredit({ ...useredit, password: e.target.value });
                  }
                }}
              />
            </div>
            <div className="input-section">
              <p>confirm password</p>
              <input
                type="text"
                style={
                  useredit?.password !== user?.password
                    ? { border: "2px solid #6a8de1" }
                    : { border: "2px solid rgba(209, 203, 203, 0.3)" }
                }
                className="readonly"
                readOnly
                value={useredit?.password}
                onChange={(e) => {
                  if (useredit) {
                    setuseredit({ ...useredit, password: e.target.value });
                  }
                }}
              />
            </div>
          </Box>


          <Box          
             gridRow={3}
            id="child"
            >
            <div className="input-section">
              <p>Organization</p>
              <input
                type="text"
                style={
                  useredit?.organization !== user?.organization
                    ? { border: "2px solid #6a8de1" }
                    : { border: "2px solid rgba(209, 203, 203, 0.3)" }
                }
                value={useredit?.organization}
                onChange={(e) => {
                  if (useredit) {
                    setuseredit({ ...useredit, organization: e.target.value });
                  }
                }}
              />
            </div>
            <div className="input-section">
              <p>work type</p>
              <input
                type="text"
                style={
                  useredit?.typeOfWork !== user?.typeOfWork
                    ? { border: "2px solid #6a8de1" }
                    : { border: "2px solid rgba(209, 203, 203, 0.3)" }
                }
                value={useredit?.typeOfWork}
                onChange={(e) => {
                  if (useredit) {
                    setuseredit({ ...useredit, typeOfWork: e.target.value });
                  }
                }}
              />
            </div>
          </Box>


          </Box>
        </Box>
    </div>
  );
};

export default Settings;
