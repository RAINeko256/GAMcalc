import { Avatar, Box, Center, Flex, Heading, Text } from '@chakra-ui/react'

export default function Header() {
  return (
    <Box bg="rgba(0,0,0,0)" padding="5px">
      <Flex gap="10px">
        <Center>
          <Avatar bg="rgba(0,0,0,0)" sx={{"filter":"drop-shadow(0px 2px 2px rgba(0, 0, 0, 0.25))"}} src="/images/Genshin-geo-icon-white.png" />
        </Center>
        <Center>
          <Heading size="lg" >
            GAMCalc
          </Heading>
        </Center>
      </Flex>
      <Text fontSize="lg">
        Genshin Ascensions Material Calculator
      </Text>
    </Box>
  )
}
