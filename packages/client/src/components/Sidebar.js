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
  Circle,
} from "@chakra-ui/react";
import React from "react";
import { CopyIcon } from "@chakra-ui/icons";
import { useContext } from "react";
import { FriendContext } from "../components/Home";
import { useDisclosure } from "@chakra-ui/hooks";
import { ChatIcon } from "@chakra-ui/icons";
import AddFriendModal from "./AddFriendModal";

function Sidebar() {
  const { friendList, setFriendList } = useContext(FriendContext);
  const { isOpen, onOpen, onClose } = useDisclosure();

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
      <HStack justify="space-evenly" w="100%">
          <Heading size="md">Add Friend</Heading>
          <Button onClick={onOpen}>
            <ChatIcon />
          </Button>
        </HStack>
      <VStack as={TabList} border="0" pt={5}>
      {friendList.map(friend => (
        <HStack as={Tab} color="blue.800">
          <Circle
              bg={friend.connected ? "green.700" : "red.500"}
              w="20px"
              h="20px"
            />
          <Text>{friend.username}</Text>
        </HStack>
        ))}
      </VStack>
      <AddFriendModal isOpen={isOpen} onClose={onClose} />
    </VStack>    
  );
}

export default Sidebar;
