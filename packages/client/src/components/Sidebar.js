import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Tab,
  TabList,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { CopyIcon } from "@chakra-ui/icons";

function Sidebar() {
  return (
    <VStack py="1.4rem">
      <VStack justify="space-evenly" w="100%">
        <Heading fontSize="25" color="blue.800" mb="3">
          Chat It
        </Heading>
        <Button
          leftIcon={<CopyIcon />}
          px="5"
          py="2"
          mb="0"
          bg="blue.500"
          sx={{
            "&:hover": {
              bgColor: "blue.900",
            },
          }}
        >
          {" "}
          BH34JK203
        </Button>
        <Text color="gray.400" fontSize="13">
          Your code for sharing
        </Text>
      </VStack>
      <Divider />
      <VStack as={TabList} border="0">
        <HStack as={Tab} color="blue.800">
          <Text>Varun</Text>
        </HStack>
        <HStack as={Tab} color="blue.800">
          <Text>Shashwat</Text>
        </HStack>
        <HStack as={Tab} color="blue.800">
          <Text>Ashvin</Text>
        </HStack>
      </VStack>
    </VStack>
  );
}

export default Sidebar;
