import React from 'react'
import { Flex , Text} from '@chakra-ui/react'
import { otherProductProps } from '../../interface/interface';
const Other_product: React.FC<otherProductProps> = (props) => {
  const { icony , name , link , description } = props;
  console.log(icony.Bot)
  return (
    <Text
     as="h2"
     h="55px"
     w="100%"
     fontSize='1rem'
     display='flex'
     justifyContent='flex-start'
     alignItems='center'
    >
      <Text>{name}</Text>
      <img src={icony.Bot} alt="wvr" />
    </Text>
  )
}

export default Other_product