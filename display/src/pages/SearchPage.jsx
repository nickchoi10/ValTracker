import { React, useRef, useContext} from 'react';
import {Flex,Heading,Input,Button} from '@chakra-ui/react';
import { UserContext } from '../lib/UserContext';
import { MdArrowForward } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import wallpaper from '../assets/wallapaper2.jpg';
import Navbar from '../components/NavBar';

export default function SearchPage() {
  let navigate = useNavigate();
  const usernameTemp = useRef();
  const tagTemp = useRef();
  const { userData } = useContext(UserContext);
  const { fetchData } = useContext(UserContext);
  const { fetchDataMMR } = useContext(UserContext);


  function handleSubmit() {
    userData.username = usernameTemp.current.value;
    userData.tag = tagTemp.current.value;
    localStorage.setItem('username', userData.username);
    localStorage.setItem('tag', userData.tag);
    fetchData();
    fetchDataMMR();
    navigate('/Profile');
  }

  return (
    <Flex>
      <Navbar />
      <Flex
        bgImage={wallpaper}
        backgroundSize="cover"
        h="100vh"
        w={'1920px'}
        justifyContent="center"
        alignItems="center"
      >
        <Flex
          w={{ md: '45%', base: '95%' }}
          className="Login"
          bgColor="#ffffffd1"
          px="40px"
          pt="65px"
          pb="40px"
          borderRadius="20px"
          alignItems="center"
          flexDirection="column"
        >
          <Heading color="black" mb={8} size="lg">
            Valorant Stat Tracker
          </Heading>

            <Flex
              className="inputField"
              as="form"
              onSubmit={handleSubmit}
              flexDirection="column"
              gap={2}
              pt={5}
              pb={4}
              alignItems="center"
              color="#535353"
            >
            
              <Input
                ref={usernameTemp}
                borderRadius="7px"
                bgColor="#EDEDED"
                placeholder="userID"
                width="306px"
                height="51px"
                fontWeight="semibold"
                fontSize="md"
                _placeholder={{ color: '#535353' }}
              ></Input>

              <Input
                ref={tagTemp}
                borderRadius="7px"
                bgColor="#EDEDED"
                placeholder="#0000"
                width="306px"
                height="51px"
                fontWeight="semibold"
                fontSize="md"
                _placeholder={{ color: '#535353' }}
              ></Input>

              <Button
                type="submit"
                bgColor="#D13639"
                mt="60px"
                borderRadius="18px"
                w="60px"
                h="60px"
                color="white"
                _hover={{ color: 'black', bgColor: '#E2E8F0' }}
              >
                <MdArrowForward size="30px" />
              </Button>

            </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
}