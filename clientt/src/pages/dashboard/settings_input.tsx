import React from 'react'
import { Text , Flex ,Input } from '@chakra-ui/react'
const SettingsInput = () => {
  return (
    <Flex h='full' w='270px' align='flex-start' direction='column' gap='7px' >
      <Text m={0}  fontSize='0.73rem' fontWeight={500} >First Name</Text>
      <Input readOnly={false} bg='transparent' w='50%' h='40%' outline='none' border='2px solid rgba(209, 203, 203, 0.3)' borderRadius='5px' pl='8px' filter='brightness(1.5)'  />
    </Flex>
  )
}

export default SettingsInput