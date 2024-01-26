'use client';
import React from 'react'
import { Flex ,Center, Text} from '@chakra-ui/react'
import { otherProductProps } from '../../interface/interface';
const Big_Other_product: React.FC<otherProductProps> = (props) => {
  const { icony , name , link , description } = props;
  const str="/images/icon/music.png"
  return (
    <div
     className='homeNavBIGAccordion cursor-pointer'
    >
      <Center opacity={0.5} >
      <img src={icony} alt="wvr" width={18}  height={18} />
      </Center>
      <Flex direction='column' justify='center'  align='flex-start'>
      <Text as='h2' mb={0} p={0} fontSize='0.8rem' fontWeight={600} >{name}</Text>
      <Text as='p' fontSize='0.6rem' p={0}   mt={-0.5}>{description}</Text>
      </Flex>
    </div>
  )
}

export default Big_Other_product