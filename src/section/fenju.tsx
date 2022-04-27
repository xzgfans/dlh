import { VStack, Heading, Text, Button } from '@chakra-ui/react';
import { useContext } from 'react';
import { AppContext } from '../../pages';

export function FenJu({ fenju }) {
  const { trys, setTrys } = useContext(AppContext)
  const selected = trys.some(it => it === fenju)
  const onClick = () => {
    if (!selected) {
      setTrys([...trys, fenju])
    }
  }
  return (
    <Button
      m={[0, 0, 0, 0]}
      colorScheme="twitter"
      variant={selected ? 'outline' : 'solid'}
      onClick={onClick}
    >
      {fenju}
    </Button>
  );
}
