import {
  Grid,
  GridItem,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import Chat from "./Chat";
import Sidebar from "./Sidebar";

function Home() {
  return (
    <Grid templateColumns="repeat(10, 1fr)" as={Tabs} h="100vh" paddingX="20%" paddingY="5">
      <GridItem colSpan="3" bg="gray.50">
        <Sidebar />
      </GridItem>
      <GridItem colSpan="7" bg="gray.100">
        <Chat />
      </GridItem>
    </Grid>
  );
}

export default Home;
