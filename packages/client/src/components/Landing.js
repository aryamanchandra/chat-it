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
import data from "../data";

function Landing() {
  const navigate = useNavigate();
  return (
    <Box m="0" p="0" width="full" bg="gray.50">
      <Box maxWidth="70rem" sx={{ marginX: "auto" }}>
        {/* Navbar */}
        <Box>
          <HStack p="4" px="5">
            <Box color="blue.800" p="2">
              <Text fontSize="2xl"> Chat it </Text>
            </Box>
            <HStack color="blue.800" spacing="6" sx={{ marginLeft: "auto" }}>
              <Button>
                <Link as="h4" fontSize="xl" color="blue.800">
                  Home
                </Link>
              </Button>
              <Button>
                <Link as="h4" fontSize="xl" color="blue.800">
                  About us
                </Link>
              </Button>
              <Button>
                <Link as="h4" fontSize="xl" color="blue.800">
                  Contact
                </Link>
              </Button>
            </HStack>
            <Button
              bg="blue.800"
              color="gray.50"
              sx={{
                marginLeft: "auto",
                "&:hover": {
                  bgColor: "blue.900",
                },
              }}
            >
              Chat
            </Button>
          </HStack>
        </Box>

        {/* Hero Section */}
        <Box bg="gray.50" height="110vh">
          <VStack display="flex" justifyContent="center" pt="10" height="50vh">
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
              sx={{
                "&:hover": {
                  bgColor: "blue.900",
                },
              }}
            >
              Start Chatting
            </Button>
          </VStack>
          <VStack bgColor="gray.50" py={20}>
            {/* <Center> */}
            <Image src={require("../assets/Group 114.png")} width="60%" />
            <Heading
              as="h3"
              size="2xl"
              color="blue.800"
              sx={{ position: "relative", top: "-5" }}
            >
              Share. Connect. Chat.
            </Heading>
            <Text
              color="blue.500"
              fontSize="xl"
              sx={{ position: "relative", top: "-5" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </Text>
            {/* </Center> */}
          </VStack>
        </Box>

        <Box>
          {/* Info Section */}
          {data &&
            data.map((element, index) => (
              <Box py="50" bgColor="gray.50" key={index}>
                <Center>
                  <SimpleGrid
                    display="flex"
                    columns={2}
                    justifyContent="center"
                    gap={2}
                  >
                    <Box flex="1" sx={{ marginY: "auto" }}>
                      <Heading as="h3" size="lg" color="blue.500" pb="5">
                        {element.heading}
                      </Heading>
                      <Text fontSize="2xl" color="gray.400" noOfLines={3}>
                        {element.description}
                      </Text>
                    </Box>
                    <Box flex="1">
                      <Image
                        src={require(`../assets/Group 85.png`)}
                        width="50%"
                        alt="something"
                        marginX="auto"
                      />
                    </Box>
                  </SimpleGrid>
                </Center>
              </Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
}

export default Landing;
