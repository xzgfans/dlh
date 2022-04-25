import { Checkbox, HStack } from "@chakra-ui/react"
import { useContext } from "react";
import { AppContext } from "../../pages";

export function Configuration() {
    const {checkedItems, setCheckedItems} = useContext(AppContext)
    function check(checked: boolean, fenju: string) {
        if (checked) {
          checkedItems.push(fenju)
          console.log("add" + fenju)
          console.log("added" + checkedItems)
          setCheckedItems([...checkedItems])
        } else {
          const index = checkedItems.indexOf(fenju);
          if (index !== -1) {
            checkedItems.splice(index, 1);
          }
          console.log("filter" + fenju)
          console.log("filtered " + checkedItems)
          setCheckedItems([...checkedItems])
        }
      }
    return (
    <HStack pl={6} mt={1} spacing={1}>
        <Checkbox
            isChecked={checkedItems.includes("2分句")}
            onChange={(e) => check(e.target.checked, "2分句")}>2分句</Checkbox>
        <Checkbox
            isChecked={checkedItems.includes("3分句")}
            onChange={(e) => check(e.target.checked, "3分句")}>3分句</Checkbox>
        <Checkbox
            isChecked={checkedItems.includes("4分句")}
            onChange={(e) => check(e.target.checked, "4分句")}>4分句</Checkbox>
        <Checkbox
            isChecked={checkedItems.includes("5分句")}
            onChange={(e) => check(e.target.checked, "5分句")}>5+分句</Checkbox>
        </HStack>
    );
  }