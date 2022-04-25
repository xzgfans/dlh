import { Text, Container } from "@chakra-ui/react"
import { useContext } from "react";
import { AppContext } from "../../pages";

export function Yuanwen() {
    const {yuanwen} = useContext(AppContext)
    return (
        <Container maxW="container.xl" p={0}>
        <Text>{yuanwen}</Text>
      </Container>
    );
  }