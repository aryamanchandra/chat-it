import {
  Divider,
  HStack,
  Input,
  TabPanel,
  TabPanels,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function Chat() {
  return (
    <VStack p="5" px="10">
      <TabPanels>
        <TabPanel>
          <HStack h="5vh">
            <Text m="0" color="blue.800">
              Varun
            </Text>
            <Divider orientation="vertical" borderColor="gray.500" />
            <Text fontSize="sm" color="gray.500" m="0">
              Online
            </Text>
          </HStack>
        </TabPanel>
        <TabPanel>
          <HStack h="5vh">
            <Text m="0" color="blue.800">
              Shashwat
            </Text>
            <Divider orientation="vertical" borderColor="gray.500" />
            <Text fontSize="sm" color="gray.500" m="0">
              Online
            </Text>
          </HStack>
        </TabPanel>
        <TabPanel>
          <HStack h="5vh">
            <Text m="0" color="blue.800">
              Ashvin
            </Text>
            <Divider orientation="vertical" borderColor="gray.500" />
            <Text fontSize="sm" color="gray.500" m="0">
              Online
            </Text>
          </HStack>
        </TabPanel>
      </TabPanels>
      <Input
        placeholder="Basic usage"
        color="blue.500"
        marginX="20"
        sx={{ border: "2px solid #CBD5E0", marginTop: "auto", marginX: "50px !important" }}
      />
    </VStack>
  );
}

export default Chat;
