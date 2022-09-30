import { VStack, Heading, Text, Button, ButtonGroup } from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from '../../pages';

function getColor(a: string[], b: string[]) {
  if (a.length != b.length) return 'steel';
  if (a.every((v, i) => v === b[i])) return 'green';
  return 'red';
}
const Lian = () => {
  const { trys, answers, pre, post } = useContext(AppContext);
  var len = Math.floor(answers.length / 2);
  var shang = trys.slice(0, len);
  var xia = trys.slice(len);
  var color = getColor(trys, answers);
  return (
    <VStack
      w="full"
      h="full"
      p={0}
      spacing={0}
      alignItems="flex-start"
      bg="gray.50"
      minH="20ex"
    > 
      <Text>{pre}</Text>
      <Text fontSize="2xl" bg={color} minH="1em">
        {shang.join(' ')}
      </Text>
      <Text fontSize="2xl" bg={color} minH="1em">
        {xia.join(' ')}
      </Text>
      <Text>{post}</Text>
    </VStack>
  );
};

export default Lian;
