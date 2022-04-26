import { VStack, Heading, Text, Button } from '@chakra-ui/react';

export interface IFenJu {
  fenju: string;
  selected: boolean;
}
interface IPros extends IFenJu {
  append: any;
}

export function FenJu({ selected, fenju, append }: IPros) {
  function onClick() {
    if (!selected) {
      append(fenju);
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
