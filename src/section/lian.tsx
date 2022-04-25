import { VStack, Heading, Text, Button, ButtonGroup} from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../../pages";

const equals = (a:string[], b:string[]) =>
    a.length === b.length && a.every((v, i) => v === b[i]);

function getColor(a:string[], b:string[]) {
    if (a.length != b.length) return 'steel';
    if (a.every((v, i) => v === b[i])) return 'green';
    return 'red';
}
const Lian = () => {
    const {trys, answers} = useContext(AppContext)
    var len = Math.floor(answers.length / 2);
    var shang = trys.slice(0, len);
    var xia = trys.slice(len);
    var color = getColor(trys, answers)
    return (
        <VStack w="full" h="full" p={0} spacing={0} alignItems="flex-start" bg="gray.50" minH='20ex'>
            <Text fontSize='2xl' bg = {color}>
            {shang.join(" ")}    
            </Text>
            <Text fontSize='2xl' bg = {color}>
            {xia.join(" ")}    
            </Text>
        </VStack>
    )
};

export default Lian;