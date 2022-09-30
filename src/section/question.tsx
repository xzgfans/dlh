import { Button, ButtonGroup, Container, Flex } from '@chakra-ui/react';
import Lian from './lian';
import Ju from './ju';
import { api } from '../api/api';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../pages';

const Question = () => {
  const {
    setPre,
    setPost,
    setTrys,
    setDaan,
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
    setDaan([...answers]);
  };
  const nextQ = async () => {
    const q = await api(checkedItems);
    const { pre, fenjus, answers, yuanwen, index, post} = q;
    // console.log("yuanwen", yuanwen)
    setTrys([]);
    setDaan([]);
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
        <Button onClick={reset}>重置</Button>
        <Button onClick={hint}>提示</Button>
        <Button onClick={show}>答案</Button>
        <Button onClick={nextQ}>下一联</Button>
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
