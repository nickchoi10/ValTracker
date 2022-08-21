import { React, useContext} from 'react';
import {Heading,Flex,Text,Image,useColorModeValue,SkeletonCircle,Skeleton} from '@chakra-ui/react';
import { UserContext } from '../lib/UserContext';

export default function Profile() {
  const bg = useColorModeValue('#FFFFFF', '#121212');
  const { data } = useContext(UserContext);

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

            
            <Flex>
                <Text fontWeight="bold" color="#46B8A3">
                  Level:
                </Text>
                {data.account_level ? (
                  <Text fontWeight="bold">
                    {data.account_level}
                  </Text>
                ) : (
                  <Skeleton>
                  </Skeleton>
                )}
            </Flex>

      </Flex>
    </Flex>
  );
}