import { Flex, useColorModeValue } from '@chakra-ui/react';
import Navbar from '../components/NavBar';
import Profile from '../components/Profile';
import RankStats from '../components/RankStats';

export default function ProfilePage() {
  const bg = useColorModeValue('#F4F6F8', '#2C2C2C');

  return (
    <Flex>
        <Navbar />

        <Flex p={{ base: 5, md: 0 }} w={{ md: '30%', base: '100%' }}>
          <Profile />
        </Flex>

        <Flex p={{ base: 5, md: 0 }} w={{ md: '30%', base: '100%' }}>
          <RankStats/>
        </Flex>

    </Flex>
  );
}