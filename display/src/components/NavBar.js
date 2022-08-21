import { React} from 'react';
import {
  Flex,
  Button,
  useColorModeValue,
  Tooltip,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { MdCode, MdAccountBox } from 'react-icons/md';

export default function Navbar() {
  let navigate = useNavigate();
  const bg = useColorModeValue('#FFFFFF', '#121212');


  function handleBack() {
    navigate("/");
  }

  function handleGit() {
    window.location.replace('https://github.com/nickchoi10/ValTracker');
  }

  return (
    <Flex
      bg={bg}
      w={{ md: '4%', base: '30%' }}
      className="left-navbar"
      alignItems="center"
      flexDirection="column"
      rowGap={4}
    >
      <Tooltip
        label="Github Source Code"
        placement="right"
        bg="red.600"
      >
        <Button
          onClick={handleGit}
          className="menu-button"
          borderRadius="8px"
        >
          <MdCode size="25px" />
        </Button>
      </Tooltip>


      <Tooltip
        label="Search Different UserID"
        placement="right"
        bg="red.600"
      >
        <Button
          onClick={handleBack}
          className="menu-button"
          borderRadius="8px"
        >
          <MdAccountBox size="25px" />
        </Button>
      </Tooltip>

     
    </Flex>
  );
}