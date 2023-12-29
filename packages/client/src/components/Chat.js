import {
  Divider,
  Grid,
  GridItem,
  HStack,
  Input,
  TabPanel,
  TabPanels,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import { useContext } from "react";
import { FriendContext } from "../components/Home";

function Chat() {
  const { friendList } = useContext(FriendContext);
  return friendList.length > 0 ? (
    <VStack p="5" px="10" height="100%">
      <Grid width="full" height="100%" templateRows="repeat(12, 1fr)">
        <GridItem rowSpan={2}>
          <TabPanels>
            <TabPanel>
              <HStack h="4vh">
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
              <HStack h="4vh">
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
              <HStack h="4vh">
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
        </GridItem>
        <GridItem rowSpan={10}>
          {/* <Text>Hello this is some text</Text> */}
        </GridItem>
        <GridItem rowSpan={2}>
          <Input
            placeholder="Type a message"
            variant="filled"
            type="text"
            color="gray.500"
            marginTop="auto"
            marginBottom="20px"
            sx={{
              border: "2px solid #CBD5E0",
              marginTop: "auto",
              _placeholder: { color: "gray.500" },
              "&:hover": {
                border: "2px solid #A0AEC0",
              },
            }}
          />
        </GridItem>
      </Grid>
    </VStack>
  ): (
    <VStack
      justify="center"
      pt="5rem"
      w="100%"
      textAlign="center"
      fontSize="lg"
    >
      <TabPanels>
        <Text>No friend, Click add friend to start chatting</Text>
      </TabPanels>
    </VStack>
  );
}

export default Chat;
