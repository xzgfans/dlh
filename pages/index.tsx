import { Container, TabList, Tabs, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import { useState, createContext, useReducer } from 'react';
import { Configuration, reduceSelectedItems } from '../src/section/configuration';
import Question from '../src/section/question';
import { Yuanwen } from '../src/section/yuanwen';

var any: any = null;
export const AppContext = createContext(any);
const IndexPage = () => {
  const [trys, setTrys] = useState([])
  const [fenjus, setFenjus] = useState([])
  const [answers, setAnswers] = useState([])
  const [yuanwen, setYuanwen] = useState("")
  const [checkedItems, checkItems] = useReducer(reduceSelectedItems, ["3分句"])


  return (
    <AppContext.Provider value={{ checkedItems, checkItems, trys, setTrys, fenjus, setFenjus, answers, setAnswers, yuanwen, setYuanwen }}>
      <Container maxW="container.xl" p={0}>
        <Tabs>
          <TabList>
            <Tab>Question</Tab>
            <Tab>Configuration</Tab>
            <Tab>Yuanwen</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Question />
            </TabPanel>
            <TabPanel>
              <Configuration />
            </TabPanel>
            <TabPanel>
              <Yuanwen />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Container>
    </AppContext.Provider>
  )
};
export default IndexPage;