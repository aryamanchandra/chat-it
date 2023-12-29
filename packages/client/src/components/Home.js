import {
  Grid,
  GridItem,
  Tab,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import { createContext, useState } from "react";

export const FriendContext = createContext();

function Home() {
  const [friendList, setFriendList] = useState([]);

  return (
    <FriendContext.Provider value={{ friendList, setFriendList }}>
      <Grid
        templateColumns="repeat(10, 1fr)"
        as={Tabs}
        h="100vh"
        paddingX="20%"
        paddingY="5"
        variant="soft-rounded"
        colorScheme="blue"
      >
        <GridItem colSpan="3" bg="gray.50">
          <Sidebar />
        </GridItem>
        <GridItem colSpan="7" bg="gray.100">
          <Chat />
        </GridItem>
      </Grid>
    </FriendContext.Provider>
  );
}

export default Home;
