import { React, useContext} from 'react';
import {Heading,Flex,Text,Image,useColorModeValue,SkeletonCircle,Skeleton} from '@chakra-ui/react';
import { UserContext } from '../lib/UserContext';
import { MdEditLocation, MdMeetingRoom, MdRMobiledata } from 'react-icons/md';

export default function Profile() {
  const bg = useColorModeValue('#FFFFFF', '#121212');
  const { data } = useContext(UserContext);
  const { mmr } = useContext(UserContext);


  return (
    <Flex
      bgColor={bg}
      className="status-bar"
      w="100%"
      flexDirection={{ md: 'column', base: 'row' }}
      justifyContent="center">
        
        <Flex flexDirection={{ md: 'column', base: 'column' }} alignItems="center"> 
            <Text color="#C0C2C8" fontWeight="semibold">
                Profile
            </Text>

            <Flex flexDirection="column">
                {data.card ? ( <Image src={data.card.small}/>) : (
                <SkeletonCircle/>
                )}
                {data.name ? (
                    <Heading size={{ md: 'md' }}  >
                    {data.name} #{data.tag}
                    </Heading>
                ) : (
                <Skeleton mt="20px" height="30px">
                </Skeleton>)
                }
            </Flex>

                <Text fontWeight="bold" color="#46B8A3">
                    Level:  {data.account_level}
                </Text>

                <Text fontWeight="bold" color="#46B8A3">
                    Elo:  {mmr.elo}
                </Text>

        </Flex>
    </Flex>
  );
}