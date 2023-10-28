import {
    Box,
    Button,
    Container,
    Flex,
    Grid,
    HStack,
    Heading,
    Link,
    Spacer,
    Text,
    VStack,
  } from "@chakra-ui/react";
  import React from "react";
  import {useNavigate} from "react-router-dom";
  
  function Landing() {
    const navigate= useNavigate();
    return (
      <Container m="0" p="0" maxW="container.xl" bg="gray.50">
        <Flex minWidth="max-content" alignItems="center" p="4">
          <Box as="h6" color="blue.800" p="2">
            Chat it
          </Box>
          <Spacer />
          <HStack color="blue.800" spacing="6">
            <Link as="h6">Home</Link>
            <Link as="h6">About us</Link>
            <Link as="h6">Contact</Link>
          </HStack>
          <Spacer />
          <Button bg="blue.800" color="gray.50">
            Chat
          </Button>
        </Flex>
        <VStack display="flex" justifyContent="center" mt="10">
          <Heading as="h1" color="blue.800">
            Connect with people
          </Heading>
          <Text as="p" color="blue.800">
            Share your code and start talking right away.
          </Text>
          <Button bg="blue.800" color="gray.50" mt="5" mb="10"
          onClick={()=> navigate("/home")}>
            Start Chatting
          </Button>
        </VStack>
      </Container>
    );
  }
  
  export default Landing;
  