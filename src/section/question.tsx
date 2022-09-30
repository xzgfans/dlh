import { Button, ButtonGroup, Container, Flex } from '@chakra-ui/react';
import Lian from './lian';
import Ju from './ju';
import { api } from '../api/api';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../pages';

const Question = () => {
  const {
    pre,
    setPre,
    post,
    setPost,
    setTrys,
    setFenjus,
    answers,
    setAnswers,
    checkedItems,
    setYuanwen,
    setIndex
  } = useContext(AppContext);
  useEffect(() => {
    nextQ();
  }, []);

  const reset = () => {
    setTrys([]);
  };
  const hint = () => {
    setTrys([answers[0]]);
  };
  const show = () => {
    setTrys([...answers]);
  };
  const nextQ = async () => {
    const q = await api(checkedItems);
    const { pre, fenjus, answers, yuanwen, index, post} = q;
    // console.log("yuanwen", yuanwen)
    setTrys([]);
    setFenjus(fenjus);
    setAnswers(answers);
    setYuanwen(yuanwen);
    setIndex(index);
    setPre(pre);
    setPost(post);
  };

  return (
    <Container maxW="container.xl" p={0} minH="100vh">
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
        minH="100vh">
        <Lian />
        <Ju />
      </Flex>
    </Container>
  );
};
export default Question;
