"use client";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button
} from "@chakra-ui/react";
import Big_Other_product from "./Big_Other_product";
import OtherProductData from "./data";

import { ChevronDown } from 'lucide-react';

const DropdownMenu: React.FC = ()=>{
 return(
       <div className="flex items-center justify-start gap-[-2px] ml-[-6px]">
        <Menu>
          <MenuButton
            as={Button}
            variant='outline'
            marginTop="6px"
            color="white"
            border={0}
            _hover={{ bg: "none", opacity: 0.76 }}
            display={{ base: "none", md: "flex" }}
            _active={{ bg: "none" }}
            fontSize="0.83rem"
            fontWeight={430}
            transition="0.4s ease"
            rightIcon={<ChevronDown size={17} />}
          >
            Others
          </MenuButton>
          <MenuList className="text-black bg-black">
            <MenuItem className="text-black">Pricing Policy</MenuItem>
            <MenuItem>terms & conditions</MenuItem>
            <MenuItem>Cookies Policy</MenuItem>
            <MenuItem>Meet The Creators</MenuItem>
          </MenuList>
        </Menu>
        <Menu>
          <MenuButton
            marginTop="6px"
            color="white"
            border={0}
            as={Button}
            variant='outline'
            _hover={{ bg: "none", opacity: 0.76 }}
            display= "flex"
            _active={{ bg: "none" }}
            fontSize="0.83rem"
            fontWeight={430}
            transition="0.4s ease"
            rightIcon={<ChevronDown size={17} />}
          >
            Other Product
          </MenuButton>
          <MenuList color='black' fontSize='0.6rem' >
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
   </div>
 )
}

export default DropdownMenu
