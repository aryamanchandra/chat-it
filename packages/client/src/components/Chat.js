import {
  Divider,
  HStack,
  TabPanel,
  TabPanels,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

function Chat() {
  return (
    <VStack p="3">
      <TabPanels>
        <TabPanel>
          <HStack h="5vh">
            <Text m="0">Varun</Text>
            <Divider orientation="vertical" borderColor="gray.500" />
            <Text fontSize="sm" color="gray.500" m="0">
              Online
            </Text>
          </HStack>
        </TabPanel>
        <TabPanel>
          <HStack h="5vh">
            <Text m="0">Shashwat</Text>
            <Divider orientation="vertical" borderColor="gray.500" />
            <Text fontSize="sm" color="gray.500" m="0">
              Online
            </Text>
          </HStack>
        </TabPanel>
        <TabPanel>
          <HStack h="5vh">
            <Text m="0">Ashvin</Text>
            <Divider orientation="vertical" borderColor="gray.500" />
            <Text fontSize="sm" color="gray.500" m="0">
              Online
            </Text>
          </HStack>
        </TabPanel>
      </TabPanels>
    </VStack>
  );
}

export default Chat;
