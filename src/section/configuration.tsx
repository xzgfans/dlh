import { Checkbox, HStack, VStack } from '@chakra-ui/react';
import { startCase } from 'lodash';
import { useContext } from 'react';
import { AppContext } from '../../pages';

export const reduceSelectedItems = (state: string[], action: { type: boolean, item: string }) => {
  console.log("reduceSelectedItems", state, action)
  switch (action.type) {
    case true:
      return [...state, action.item];
    case false:
      return state.filter(it => it != action.item);
  }
}
export function Configuration() {
  const { checkedItems, checkItems } = useContext(AppContext);

  return (
    <VStack>
    <HStack pl={6} mt={1} spacing={1} align='left'>
      <Checkbox
        isChecked={checkedItems.includes('2分句')}
        onChange={(e) => checkItems({ type: e.target.checked, item: '2分句' })}
      >
        2分句
      </Checkbox>
      <Checkbox
        isChecked={checkedItems.includes('3分句')}
        onChange={(e) => checkItems({ type: e.target.checked, item: '3分句' })}
      >
        3分句
      </Checkbox>
      <Checkbox
        isChecked={checkedItems.includes('4分句')}
        onChange={(e) => checkItems({ type: e.target.checked, item: '4分句' })}
      >
        4分句
      </Checkbox>
      <Checkbox
        isChecked={checkedItems.includes('5分句')}
        onChange={(e) => checkItems({ type: e.target.checked, item: '5分句' })}
      >
        5+分句
      </Checkbox>
    </HStack>
    <HStack pl={6} mt={1} spacing={1} align='left'>
      <Checkbox
        isChecked={checkedItems.includes('王维')}
        onChange={(e) => checkItems({ type: e.target.checked, item: '王维' })}
      >
        王维
      </Checkbox>
  
    </HStack>
    </VStack>
  );
}
