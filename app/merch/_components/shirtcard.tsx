import { Img, Box, Text, Button } from '@chakra-ui/react'

interface Shirt {
  image_name: string,
  name: string,
  sizes: Array<string>,
  price: number
}


export default function ShirtCard(shirt:Shirt) {
  return (
    <Box display="inline-block" role='group'>
      <Img src={`./merch/${shirt.image_name}`} display="block" _groupHover={{display: "none"}} border="1px" borderColor="black" borderRadius={20} width={230} height={230} objectFit='cover'></Img>

      <Box display="none" _groupHover={{display: "block"}}>
        <Box backgroundColor="#D99BFF" display="flex" justifyContent="center" alignItems="center" flexDirection="column" border="1px" borderColor="black" borderRadius={20} width={230} height={230}>
          <Text fontWeight="bold" fontSize="40px">{shirt.name}</Text>
          <Text fontSize="20px">Availabile in: {shirt.sizes.join(", ")}</Text>
          <Text fontSize="20px">${shirt.price} USD</Text>
          <Button marginTop="10px" fontSize="30px" size="lg">Buy</Button>
        </Box>
      </Box>
    </Box>
  )
}

// https://stackoverflow.com/questions/47427056/how-to-replace-on-div-with-another-on-hover-css-only
// https://chakra-ui.com/docs/styled-system/style-props#pseudo