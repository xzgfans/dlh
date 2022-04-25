import { Button, Container, Flex, TabList, Tabs, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import { create } from 'domain';
import { useState, useContext, createContext } from 'react';
import { api, IQuestion } from '../src/api/api';
import { Configuration } from '../src/section/configuration';
import Question from '../src/section/question';
import { Yuanwen } from '../src/section/yuanwen';

var any:any = null;
export const AppContext = createContext(any);
const IndexPage = () => {
  const [trys, setTrys] = useState([])
  const [fenjus, setFenjus] = useState([])
  const [answers, setAnswers] = useState([])
  const [checkedItems, setCheckedItems] = useState(["3分句"])
  const [yuanwen, setYuanwen] = useState("")
  

  return (
    <AppContext.Provider value={{checkedItems, setCheckedItems,trys, setTrys, fenjus, setFenjus, answers, setAnswers, yuanwen,setYuanwen}}>
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