import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'

interface Show {
  name: string,
  date: string,
  time: string,
};

export default function ShowItem(show:Show) {
  return (
    <Flex alignItems="center" backgroundColor="#D9D9D9" padding="20px" fontSize="40px" border="1px">
        <Box>
            <Text fontWeight="bold">{show.name}</Text>
        </Box>
        <Spacer />
        <Box>
            <Text>{`${show.date} • ${show.time}`}</Text>
        </Box>
    </Flex>
  )
}