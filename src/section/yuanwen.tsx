import { Text, Container, Box, VStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { useSwipeable } from 'react-swipeable';
import { AppContext } from '../../pages';
import { getTishuByIndex } from '../api/api';

export function Yuanwen() {
  const { yuanwen, setYuanwen, index, setIndex } = useContext(AppContext);
  const handlers = useSwipeable({
    onSwipedLeft: async () => {
      const [yw, idx] = await getTishuByIndex(index + 1)
      console.log("yw", yw)
      setYuanwen(yw)
      setIndex(idx)
    },
    onSwipedRight: async () => {
      const [yw, idx] = await getTishuByIndex(index -1)
      setYuanwen(yw)
      setIndex(idx)
    }
  })

  return (
    <Container
      maxW="container.xl"
      minH="100vh"
      p={0}
      {...handlers}
      style={{ touchAction: 'pan-y' }}>
      <Text>{yuanwen}</Text>
    </Container >
  );
}
