import { Box, Button, Link, Text } from "@chakra-ui/react";

export default function Home() {
  return (
      <Box minHeight="90vh" bgImage="url('/background.png')" bgPosition="left top" bgRepeat="no-repeat" bgSize="cover">
        <Box color="white" maxW="900px" py="30px" px="40px">
          <Text fontSize="150px" fontWeight="bold">
            Taylor Swift on Tour
          </Text>

          <Link href='/merch' mt="10px">
            <Button fontSize="30px" size="lg">
              See Her Perform
            </Button>
          </Link>
        </Box>
      </Box>
  );
}
