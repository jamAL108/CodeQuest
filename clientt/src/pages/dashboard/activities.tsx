import React, { useEffect, useState , useRef} from "react";
import "../../scss/dashboard/activities.scss";
import { RootState } from "../../redux";
import { motion, useReducedMotion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { Dispatch } from "redux";
import { fetchSections } from "../../redux/action";
import { Search, ListFilter, MoreHorizontal, Plus, Menu , ChevronLeft , ChevronRight } from "lucide-react";
import { user, Sections } from "../../interface/interface";
import Data from "./data";
import WarningIcon from "@mui/icons-material/Warning";
import {
  Button,
  Center,
  Text,
  Flex,
  Spacer,
  Box,
  Show,
  Input
} from "@chakra-ui/react";
import {  dashboardNavProps } from "../../interface/interface";
const Activities: React.FC<dashboardNavProps> = (props) => {
  const { flagfun, flag , navshow , navchange} = props;
  const dispatch: Dispatch<any> = useDispatch();
  const [data, setdata] = useState<Sections[]>([]);
  const store = useSelector((state: RootState) => state);
  const [navitem , setnavitem] = useState<Number>(0)
  const [datatoshow,setdatatoshow] = useState<Sections[]>([])
  const [itemsPerPage, setItemsPerPage] = useState<number>(calculateItemsPerPage());
  const [page , setpage] = useState<number>(1)
  const [totalpage,settotalpage] = useState<number>(datatoshow.length)
  const box1 = useRef<HTMLDivElement | null>(null)
  const box2 = useRef<HTMLDivElement | null>(null)
  const box3 = useRef<HTMLDivElement | null>(null)



  useEffect(() => {
    const user_string: string | null = localStorage.getItem("codeQuestUSER");
    const user: user | null = user_string ? JSON.parse(user_string) : null;
    const dataa = {
      id: user?._id,
    };
    dispatch(fetchSections(dataa));
  }, []);

  useEffect(() => {
    if (store.user.sections.length !== 0) {
      setdata(store.user.sections);
      setdatatoshow(store.user.sections)
    }
  }, [store?.user?.sections]);


  useEffect(()=>{
    if(navitem===0 && datatoshow.length!== data.length){
      setdatatoshow(data)
    }else if(navitem===1){
      let arr = data.filter((item) => item.status === true)
      setdatatoshow(arr)
    }else if(navitem===2){
      let arr = data.filter((item) => item.status === false)
      setdatatoshow(arr)
    }
  },[navitem])

  useEffect(() => {
    if (box1.current) {
      const currentInnerHTML = box1.current.innerHTML;
      const backgroundColor = Number(currentInnerHTML) === Number(page) ? "#6F8AE9" : "#1C1C24";
      box1.current.style.backgroundColor = backgroundColor;
    }
    if (box2.current) {
      const currentInnerHTML = box2.current.innerHTML;
      const backgroundColor = Number(currentInnerHTML) === Number(page) ? "#6F8AE9" : "#1C1C24";
      box2.current.style.backgroundColor = backgroundColor;
    }
    if (box3.current) {
      const currentInnerHTML = box3.current.innerHTML;
      const backgroundColor = Number(currentInnerHTML) === Number(page) ? "#6F8AE9" : "#1C1C24";
      box3.current.style.backgroundColor = backgroundColor;
    }
  }, [page, datatoshow]);

  useEffect(()=>{
    setpage(1)
    settotalpage(Math.ceil(datatoshow.length/itemsPerPage))
  },[datatoshow])



  useEffect(() => {
    // Update the items per page when the window is resized
    const handleResize = () => {
      setItemsPerPage(calculateItemsPerPage());
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  function calculateItemsPerPage(): number {
    const viewportWidth = window.innerWidth;
    const mobileViewportWidth = 760; // Adjust this threshold based on your requirements
    const itemsPerMobilePage = 5; // Adjust the number of items for mobile
    const itemsPerLargeScreenPage = 10; // Adjust the number of items for larger screens

    return viewportWidth < mobileViewportWidth ? itemsPerMobilePage : itemsPerLargeScreenPage;
  }



  const afterStyle = {
    content: '""',
    position: 'absolute',
    bg: '#6F8AE9',
    h: '2px',
    w: 0,
    left: 0,
    bottom: '0px',
    transition: '0.35s',
  };

  const handlenext =()=>{
    setpage(page+1)
  }
  const handleprev=()=>{
    setpage(page-1)
  }

  return (
    <div className="activites">
      <Flex
        height="5.5rem"
        width="92%"
        alignItems="center"
        color="accent.light"
      >
        <Flex gap={2} align="center">
          <Show below="786px">
            <Menu size={23} onClick={(e)=>{
              e.preventDefault()
              e.stopPropagation()
              navchange(true)
            }} />
          </Show>
          <Text fontSize="1.34rem" fontWeight={600} as="h2">
            Dashboard
          </Text>
        </Flex>
        <Spacer />
        <Button
          color="button.color"
          variant="solid"
          bg="button.bg"
          px={2}
          py={1}
          gap={1}
          h={38}
          transition="0.4s ease-in-out"
          fontSize="0.9rem"
          borderRadius={4}
          _hover={{ bg: "button.hover" }}
        >
          <Plus color="#202029" size={19} />
          Add new Section
        </Button>
      </Flex>

      <Flex
        className="detail"
        width="92%"
        height={{ base: "6rem", md: "3.6rem" }}
        color="accent.light"
        gap={{ base: "10px", md: "auto" }}
      >
        <Flex
          width={{ base: "40%", md: "165px" }}
          justify="center"
          align="flex-start"
          direction="column"
        >
          <Text
            as="h2"
            m={0}
            fontSize={{ base: "0.89rem", md: "0.86rem" }}
            opacity={0.75}
            fontWeight={480}
          >
            Total Interviews
          </Text>
          <Text
            as="h1"
            margin="0"
            marginTop="0.2rem"
            fontSize={{ base: "1.72rem", md: "1.6rem" }}
            fontWeight={500}
          >
            123
          </Text>
        </Flex>

        <Center
          width={{ base: "5%", md: "30px" }}
          height={{ base: "70%", md: "100%" }}
        >
          <Box
            width="full"
            height="80%"
            marginTop="7px"
            position="relative"
            _after={{
              content: '""',
              position: "absolute",
              display: "block",
              width: "2px",
              height: "61%",
              bg: "white",
              opacity: 0.3,
              top: "-6%",
              left: "43%",
              transform: "rotate(-33deg)",
            }}
            _before={{
              content: '""',
              position: "absolute",
              display: "block",
              width: "2px",
              height: "61%",
              bg: "white",
              opacity: 0.3,
              bottom: "-6%",
              left: "47%",
              transform: "rotate(33deg)",
            }}
          ></Box>
        </Center>

        <Box
          width={{ base: "50%", md: "80%" }}
          display="flex"
          marginLeft={{ base: "20px", md: "50px" }}
          gap={{ base: "25px", md: "auto" }}
        >
          <Flex
            width={{ base: "170px", md: "145px" }}
            justify="center"
            align="flex-start"
            direction="column"
          >
            <Text
              as="h2"
              m={0}
              fontSize="0.86rem"
              opacity={0.75}
              fontWeight={480}
            >
              Completed
            </Text>
            <Text
              as="h1"
              margin="0"
              marginTop="0.2rem"
              fontSize="1.6rem"
              fontWeight={500}
            >
              34
            </Text>
          </Flex>
          <Flex
            width={{ base: "170px", md: "145px" }}
            justify="flex-start"
            align="flex-start"
            direction="column"
          >
            <Text
              as="h2"
              m={0}
              fontSize="0.86rem"
              opacity={0.75}
              fontWeight={480}
            >
              Pending
            </Text>
            <Text
              as="h1"
              margin="0"
              marginTop="0.2rem"
              fontSize="1.6rem"
              fontWeight={500}
            >
              45
            </Text>
          </Flex>
        </Box>
      </Flex>

      <Center
        className="ACcontent"
        mt="20px"
        w="100%"
        height="calc(100% - 10rem - 0.6rem)"
        flexDirection="column"
        position="relative"
      >
        <Flex
          className="small"
          w="92%"
          h="calc(100% - 3rem)"
          align="flex-start"
          zIndex={0}
        >
          <Flex
            color="accent.light"
            pl="0px"
            h="1.56rem"
            w="100%"
            justify="flex-start"
            align="center"
            borderBottom="2px solid #38383d"
            gap="25px"
          >
            <Text
              m={0}
              h='full'
              color={navitem===0 ? '#6F8AE9' : '#fff'}
              _after={afterStyle}
              _hover={navitem!==0 ? {color:"white" , 
              cursor:"pointer",
              _after: {
                width: '100%',
              },
            } : { _after:{
              width:0
            }}}
              textTransform="capitalize"
              fontSize="0.82rem"
              position="relative"
              letterSpacing="0.5px"
              p="0 5px"
              onClick={(e)=>setnavitem(0)}
              borderBottom={navitem==0 ? '2px solid #6F8AE9' : "none"}
            >
              All
            </Text>
            <Text
              m={0}
              h='full'
              _after={afterStyle}
              _hover={navitem!==1 ? {color:"white" , 
              cursor:"pointer",
              _after: {
                width: '100%',
              },
            } : { _after:{
              width:0
            }}}
              textTransform="capitalize"
              fontSize="0.82rem"
              position="relative"
              letterSpacing="0.5px"
              p="0 5px"
              color={navitem===1 ? '#6F8AE9' : '#fff'}
              borderBottom={navitem==1 ? '2px solid #6F8AE9' : "none"}
              onClick={(e)=>setnavitem(1)}
            >
              completed
            </Text>
            <Text
              m={0}
              h='full'
              _after={afterStyle}
              _hover={navitem!==2 ? {color:"white" , 
              cursor:"pointer",
              _after: {
                width: '100%',
              },
            } : { _after:{
              width:0
            }}}
              textTransform="capitalize"
              fontSize="0.82rem"
              position="relative"
              letterSpacing="0.5px"
              p="0 5px"
              color={navitem===2 ? '#6F8AE9' : '#fff'}
              borderBottom={navitem==2 ? '2px solid #6F8AE9' : "none"}
              onClick={(e)=>setnavitem(2)}
            >
              pending
            </Text>
          </Flex>

          <Flex className="search" h='3.8rem' justify='flex-start' gap='20px' >

            <Flex className="box" bg='#2A2A36' borderRadius='3.5px' w='230px' h='58%' cursor='pointer' >
              <Search style={{width:"15%",height:"16px",opacity:0.6}} color="white" className="icon" size={15} />
              <Input pl='0' w='85%' bg='transparent' outline='none' border='none' fontSize='0.7rem'  type="text" placeholder="Search"  focusBorderColor='transparent' _placeholder={{color:"white" , opacity:0.5}} />
            </Flex>

            <Flex className="filter">
              <ListFilter size={15} color="white" />
              <p>filter</p>
            </Flex>

          </Flex>



          <div className="table">
            <div className="up">
              <div className="name" id="col">
                <p>Name</p>
              </div>
              <div className="jobID" id="col">
                <p>job id</p>
              </div>
              <div className="duedate" id="col">
                <p>Role Type</p>
              </div>
              <div className="duedate" id="col">
                <p>Due Date</p>
              </div>
              <div className="status" id="col">
                <p>status</p>
              </div>
              <div className="actions" id="col">
                <p>Actions</p>
              </div>
            </div>
            <div className="Tablemain">
              {datatoshow && datatoshow.length !== 0 ? (
                datatoshow?.slice(page*itemsPerPage-itemsPerPage , page*itemsPerPage).map((item, idx) => (
                  <div className="box" key={idx}>
                    <div className="name" id="col">
                      <p>{item?.name}</p>
                    </div>
                    <div className="jobID" id="col">
                      <p>{item?.jobID}</p>
                    </div>
                    <div className="duedate" id="col">
                      <p>{item?.roleType}</p>
                    </div>
                    <div className="duedate" id="col">
                      <p>{item?.dueDate}</p>
                    </div>
                    <div className="status" id="col">
                      <p
                        style={
                          item?.status === true
                            ? { backgroundColor: "#283236", color: "#65BA9E" }
                            : { backgroundColor: "#353033", color: "#BB9870" }
                        }
                      >
                        {item?.status === true ? "Completed" : "Pending"}
                      </p>
                    </div>
                    <div className="actions" id="col">
                      <MoreHorizontal />
                    </div>
                  </div>
                ))
              ) : (
                <div className="no_section">
                  <WarningIcon className="icon" />
                  <h2> No Section Found</h2>
                  <Button
                    color="button.color"
                    variant="solid"
                    bg="button.bg"
                    px={2}
                    py={0}
                    h={37}
                    borderRadius={5}
                    transition="0.4s ease-in-out"
                    fontSize="0.9rem"
                    _hover={{ bg: "button.hover" }}
                    gap={1}
                  >
                    <Plus color="#202029" size={19} />
                    Add new Section
                  </Button>
                </div>
              )}
            </div>
          </div>
        </Flex>
        <Flex w='full' color='white' h='2.6rem' boxShadow='0 -5px 10px rgba(0, 0, 0, 0.29)' borderTop=' 1px solid #23232B' justifyContent='flex-end' align='center' pr='60px' gap='12px' >
          <Center h='70%' w='58px' bg='#1C1C24' borderRadius='4px' fontSize='0.7rem' transition='0.1s ease-in-out'  pr={1} 
          _hover={{bg:"#6F8AE9" , color:"#202029", fontWeight:600}}
          onClick={handleprev}
          opacity={page===1 ? "0.3" : "1"}
          pointerEvents={page===1 ? "none" : "auto"}
          cursor={page===1 ? "none" : "pointer"}
          >
            <ChevronLeft size={15}  />
            Prev
          </Center>

          <Flex justify='center' align='center' w='120px' h='70%' gap='10px' >
          
          
          <Center ref={box1} w='26px' h='77%' pointerEvents='none'  borderRadius='4px' fontSize='0.7rem' onClick={(e)=>e.stopPropagation()}>{page===1 ? 1 : 
          totalpage==2 ? 1 : page===totalpage ? page - 2 : page - 1}
          </Center>

          <Center ref={box2} w='26px' h='77%' pointerEvents='none' opacity={totalpage===1 ? "0.3" : 1}  
          onClick={(e)=>e.stopPropagation()} borderRadius='4px' fontSize='0.75rem'  >{totalpage==1 ? "X" : page=== 1 ? page+1 : totalpage==2 ? page :  page===totalpage ? page-1  : page }</Center>

          <Center ref={box3} w='26px' h='77%' pointerEvents='none' opacity={totalpage===2 || totalpage===1  ? "0.3" : 1}  
          onClick={(e)=>e.stopPropagation()} borderRadius='4px' fontSize='0.7rem'   >{totalpage==2 || totalpage===1 ? "X" :  page===totalpage ? page : page===1 ? page+2 : page+1}</Center>


          </Flex>

          <Center h='70%' w='58px' bg='#1C1C24' borderRadius='4px' transition='0.1s ease-in-out' fontSize='0.7rem' pl={1}
          opacity={page===totalpage ? "0.3" : "1"}
          _hover={{bg:"#6F8AE9" , color:"#202029", fontWeight:600}}
          onClick={handlenext}
          pointerEvents={page===totalpage ? "none" : "auto"}
          cursor={page===totalpage ? "none" : "pointer"}
          >
            Next 
            <ChevronRight size={15} />
          </Center>
        </Flex>
      </Center>
    </div>
  );
};

export default Activities;
