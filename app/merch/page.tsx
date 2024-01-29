import { Box, Text, SimpleGrid } from "@chakra-ui/react";
import ShirtCard from "./_components/shirtcard";
import { item_descriptions } from "./data";
import Socials from "../_components/socials";

export default function MerchPage() {

  const items = item_descriptions.map((item) => <ShirtCard key={item.image_name} image_name={item.image_name} name={item.name} sizes={item.sizes} price={item.price}></ShirtCard>)

  return (
    <Box minHeight="90vh">
        <Box py="30px" px="40px">
          <Text fontSize="100px" fontWeight="bold">
              Merch
          </Text>

          <SimpleGrid  spacing={10} columns={5} justifyItems="center">
            {items}
          </SimpleGrid>
          <Socials />
        </Box>
    </Box>
  );
}