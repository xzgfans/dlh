import { VStack, Heading, Text, Button } from "@chakra-ui/react";
import { useContext } from "react";
import { AppContext } from "../../pages";
import {FenJu, IFenJu} from './fenju'

const Ju = () => {
    const { trys, setTrys, fenjus, setFenjus} = useContext(AppContext)
    const append = (s: string) => {
        trys.push(s)
        setTrys([...trys])
        setFenjus(fenjus.map((f:IFenJu)=>({fenju:f.fenju, selected:s == f.fenju? true: f.selected})))
      }
    return (
        <VStack w="full" h="full" p={0} spacing={2} alignItems="flex-start" bg="gray.100">
            {
                fenjus.map((ju:IFenJu, index:number)=><FenJu key={index} selected={ju.selected} fenju={ju.fenju} append={append}></FenJu>)
            }
        </VStack>
    )
};

export default Ju;