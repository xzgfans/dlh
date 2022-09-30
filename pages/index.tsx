import { Container, TabList, Tabs, Tab, TabPanels, TabPanel } from '@chakra-ui/react';
import { useState, createContext, useReducer } from 'react';
import { Configuration, reduceSelectedItems } from '../src/section/configuration';
import Question from '../src/section/question';
import { Yuanwen } from '../src/section/yuanwen';

export const AppContext = createContext(null as any);
const IndexPage = () => {
  const [trys, setTrys] = useState([])
  const [fenjus, setFenjus] = useState([])
  const [answers, setAnswers] = useState([])
  const [yuanwen, setYuanwen] = useState("")
  const [index, setIndex] = useState("")
  const [pre, setPre] = useState("")
  const [post, setPost] = useState("")

  const [checkedItems, checkItems] = useReducer(reduceSelectedItems, ["3分句"])

  return (
    <AppContext.Provider value={{ checkedItems, checkItems, trys, setTrys, fenjus, setFenjus, answers, setAnswers, yuanwen, setYuanwen, index, setIndex, pre, setPre, post, setPost }}>
      <Container maxW="container.xl" p={0} minH="100vh">
        <Tabs minH="100vh">
          <TabList>
            <Tab>Question</Tab>
            <Tab>Configuration</Tab>
            <Tab>Yuanwen</Tab>
          </TabList>
          <TabPanels minH="100vh">
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