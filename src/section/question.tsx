import { Button, ButtonGroup, Container, Flex } from '@chakra-ui/react';
import Lian from './lian';
import Ju from './ju';
import { api } from '../api/api';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../pages';
import { IFenJu } from './fenju';

const Question = () => {
  const {
    trys,
    setTrys,
    fenjus,
    setFenjus,
    answers,
    setAnswers,
    checkedItems,
    setYuanwen
  } = useContext(AppContext);
  useEffect(() => {
    nextQ();
  }, []);

  const reset = () => {
    setTrys([]);
    setFenjus(fenjus.map((f: IFenJu) => ({ fenju: f.fenju, selected: false })));
  };
  const hint = () => {
    setTrys([answers[0]]);
    setFenjus(
      fenjus.map((f: IFenJu) => ({
        fenju: f.fenju,
        selected: f.fenju == answers[0] ? true : false
      }))
    );
  };
  const show = () => {
    setTrys([...answers]);
    setFenjus(fenjus.map((f: IFenJu) => ({ fenju: f.fenju, selected: true })));
  };
  const nextQ = async () => {
    const { answer, yuanwen } = await api(checkedItems);
    const answers = answer.slice(0, -1).split(/[，；？]/);
    const fenjus: IFenJu[] = answers.map((q: string) => ({
      fenju: q,
      selected: false
    }));
    fenjus.sort(() => Math.random() - 0.5);
    console.log(`Question:\nQ:${answers}\nA:${answers}`);
    setTrys([]);
    setFenjus(fenjus);
    setAnswers(answers);
    setYuanwen(yuanwen);
  };

  return (
    <Container maxW="container.xl" p={0}>
      <ButtonGroup bg="gray.100" width="full">
        <Button onClick={reset}>Reset</Button>
        <Button onClick={hint}>Hint</Button>
        <Button onClick={show}>Show</Button>
        <Button onClick={nextQ}>Next</Button>
      </ButtonGroup>
      <Flex
        h={{ base: 'auto', md: '100vh' }}
        py={[0, 1, 2]}
        direction={{ base: 'column', md: 'row' }}
      >
        <Lian />
        <Ju />
      </Flex>
    </Container>
  );
};
export default Question;
