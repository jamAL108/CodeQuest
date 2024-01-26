'use client';
import React from 'react'
import { Flex ,Center, Text} from '@chakra-ui/react'
import { otherProductProps } from '../../interface/interface';
const Other_product: React.FC<otherProductProps> = (props) => {
  const { icony , name , link , description } = props;
  return (
    <div
     className='homeNavAccordion'
    >
      <Center opacity={0.6}>
      <img src={icony} alt="wvr" />
      </Center>
      <Flex direction='column' justify='center'  align='flex-start'>
      <Text as='h2' mb={0} p={0} fontSize='0.98rem' fontWeight={600} >{name}</Text>
      <Text as='p' fontSize='0.8rem' p={0}   mt={-1}>{description}</Text>
      </Flex>
    </div>
  )
}

export default Other_product