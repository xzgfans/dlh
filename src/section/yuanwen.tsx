import { Text, Container, Box, VStack } from '@chakra-ui/react';
import { useContext } from 'react';
import { useSwipeable } from 'react-swipeable';
import { AppContext } from '../../pages';
import { getTishuByIndex } from '../api/api';

export function Yuanwen() {
  const { yuanwen, setYuanwen } = useContext(AppContext);
  const handlers = useSwipeable({
    onSwipedLeft: async () => {
      const yw = await getTishuByIndex(yuanwen[1] - 0 + 1)
      console.log("yw", yw)
      setYuanwen(yw)
    },
    onSwipedRight: async () => {
      const yw = await getTishuByIndex(yuanwen[1] - 1)
      setYuanwen(yw)
    }
  })

  return (
    <Container
      maxW="container.xl"
      minH="100vh"
      p={0}
      {...handlers}
      style={{ touchAction: 'pan-y' }}>
      <Text>{yuanwen[0]}</Text>
    </Container >
  );
}
