import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Grid,
  GridItem,
  HStack,
  Heading,
  Image,
  Link,
  SimpleGrid,
  Spacer,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Landing() {
  const navigate = useNavigate();
  return (
    <Box m="0" p="0" width="full">
      {/* Navbar */}
      <Box bg="gray.50">
        <HStack p="4" px="5" maxWidth="1500px" sx={{ marginX: "auto" }}>
          <Box color="blue.800" p="2">
            <Text fontSize="2xl"> Chat it </Text>
          </Box>
          <HStack color="blue.800" spacing="6" sx={{ marginLeft: "auto" }}>
            <Link as="h6">Home</Link>
            <Link as="h6">About us</Link>
            <Link as="h6">Contact</Link>
          </HStack>
          <Button bg="blue.800" color="gray.50" sx={{ marginLeft: "auto" }}>
            Chat
          </Button>
        </HStack>
      </Box>

      {/* Hero Section */}
      <Box bg="gray.50" height="90vh">
        <VStack display="flex" justifyContent="center" pt="10" height="40vh">
          <Heading as="h1" size="4xl" color="blue.800">
            Connect with people
          </Heading>
          <Text fontSize="2xl" color="blue.300">
            Share your code and start talking right away.
          </Text>
          <Button
            bg="blue.800"
            color="gray.50"
            mt="30px"
            mb="10"
            onClick={() => navigate("/home")}
          >
            Start Chatting
          </Button>
        </VStack>
        <VStack bgColor="gray.50">
        {/* <Center> */}
          <Image src={require("../assets/Group 114.png")} width="30%" />
          <Heading as="h3" size="2xl" color="blue.800" sx={{position:"relative", top:"-5"}} pb="100px">
            Share. Connect. Chat.
          </Heading>
        {/* </Center> */}
      </VStack>
      </Box>

      {/* Info Section */}
      <Box py="200px">
        <Center>
          <SimpleGrid
            maxWidth="1280px"
            display="flex"
            columns={2}
            justifyContent="center"
            gap={2}
          >
            <Box flex="1" sx={{ marginY: "auto" }}>
              <Heading as="h3" size="lg" color="gray.50" pb="5">
                Seamless Communication
              </Heading>
              <Text fontSize="2xl" color="gray.400" noOfLines={3}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                consectetur dapibus nulla sed scelerisque. Mauris consectetur
                dapibus nulla sed scelerisque.
              </Text>
            </Box>
            <Box flex="1">
              <Image
                src={require("../assets/girl-illustration.png")}
                width="80%"
                alt="something"
                marginX="auto"
              />
            </Box>
          </SimpleGrid>
        </Center>
        <Center py="50px">
          <SimpleGrid
            maxWidth="1280px"
            display="flex"
            columns={2}
            justifyContent="center"
            gap={2}
          >
            <Box flex="1">
              <Image
                src={require("../assets/girl-illustration.png")}
                width="80%"
                alt="something"
                marginX="auto"
              />
            </Box>
            <Box flex="1" sx={{ marginY: "auto" }}>
              <Heading as="h3" size="lg" color="gray.50" pb="5">
                Instant Messaging
              </Heading>
              <Text fontSize="2xl" color="gray.400" noOfLines={3}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                consectetur dapibus nulla sed scelerisque. Mauris consectetur
                dapibus nulla sed scelerisque.
              </Text>
            </Box>
          </SimpleGrid>
        </Center>
        <Center>
          <SimpleGrid
            maxWidth="1280px"
            display="flex"
            columns={2}
            justifyContent="center"
            gap={2}
          >
            <Box flex="1" sx={{ marginY: "auto" }}>
              <Heading as="h3" size="lg" color="gray.50" pb="5">
                Secure Encryption
              </Heading>
              <Text fontSize="2xl" color="gray.400" noOfLines={3}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                consectetur dapibus nulla sed scelerisque. Mauris consectetur
                dapibus nulla sed scelerisque.
              </Text>
            </Box>
            <Box flex="1">
              <Image
                src={require("../assets/girl-illustration.png")}
                width="80%"
                alt="something"
                marginX="auto"
              />
            </Box>
          </SimpleGrid>
        </Center>
      </Box>
    </Box>
  );
}

export default Landing;
