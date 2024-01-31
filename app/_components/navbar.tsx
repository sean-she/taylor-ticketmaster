import { Box, Flex, Img, Link, Text } from '@chakra-ui/react'

export default function NavBar() {
  return (
    <Box minHeight="10vh" display="flex" alignItems="center" justifyContent="space-between" px="55px" py="20px" bg="black" textColor="white">
      <Flex align="center" justify="center" gap="18px">
        <Link href="/">
          <Img src='/logo.svg' alt='logo'></Img>
        </Link>
        <Text fontSize="30px" fontWeight="bold">Taylor Swift</Text>
      </Flex>
      
      <Flex align="center" justify="center" gap="30px" fontSize="25px">
        <Link href="/merch">Merch</Link>
        <Link href="/events">Events</Link>
      </Flex>
    </Box>
  )
}
