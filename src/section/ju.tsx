import { VStack, Heading, Text, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from '../../pages';
import { FenJu } from './fenju';

const Ju = () => {
  const { trys, setTrys, fenjus, setFenjus } = useContext(AppContext);
  const append = (s: string) => {
    trys.push(s);
    setTrys([...trys]);
    setFenjus(
      fenjus.map((f: string) => ({
        fenju: f,
      }))
    );
  };
  return (
    <VStack
      w="full"
      h="full"
      p={0}
      spacing={2}
      alignItems="flex-start"
      bg="gray.100"
    >
      {fenjus.map((ju: string, index: number) => (
        <FenJu
          key={index}
          fenju={ju} />
      ))}
    </VStack>
  );
};

export default Ju;
