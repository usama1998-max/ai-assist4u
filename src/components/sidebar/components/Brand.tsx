'use client';
// Chakra imports
import { Flex, Text, useColorModeValue } from '@chakra-ui/react';

import { HSeparator } from '@/components/separator/Separator';

export function SidebarBrand() {
  //   Chakra color mode
  let logoColor = useColorModeValue('navy.700', 'white'); 

  return (
    <Flex alignItems="center" flexDirection="column">
      <Text color={logoColor} fontSize="md" fontWeight="600" me="10px">
      AI Tutor
        </Text>
      {/* <HorizonLogo h="26px" w="146px" my="30px" color={logoColor} /> */}
      <HSeparator mb="20px" w="284px" />
    </Flex>
  );
}

export default SidebarBrand;
