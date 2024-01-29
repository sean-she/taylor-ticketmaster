import { Button, Flex } from "@chakra-ui/react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


export default function Socials() {
  return (
    <Flex flexDirection="row" justifyContent="flex-end" alignItems="center" gap={5} paddingTop="20px">
        <Button>
            <FaInstagram />
        </Button>
        <Button>
            <FaTwitter />
        </Button>
        <Button>
            <FaFacebook />
        </Button>
    </Flex>
  )
}