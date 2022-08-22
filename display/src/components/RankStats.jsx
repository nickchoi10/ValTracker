import { React, useContext} from 'react';
import {Heading,Flex,Text,Image,useColorModeValue,Skeleton,Stack} from '@chakra-ui/react';
import { UserContext } from '../lib/UserContext';

export default function RankStats() {
  const bg = useColorModeValue('#FFFFFF', '#121212');
  const { mmr } = useContext(UserContext);

  return (
    //Base container of your profile
    <Flex
      bgColor={bg}
      className="status-bar"
      w="100%"
      alignItems="center"
      marginLeft={{ base: 0, md: 1 }}
      h={{ base: null, md: '100vh' }}
      justifyContent="center"
    >
      <Stack>

        <Text fontSize="lg" fontWeight="semibold">
          Current rank
        </Text>
            <Flex flexDirection="column">
                
                  {mmr.currenttierpatched ? (
                    <Heading color="#46B8A3" size={{ md: 'lg', base: 'lg' }}>
                      {mmr.currenttierpatched}
                    </Heading>
                  ) : (
                    <Skeleton isLoaded>
                    </Skeleton>
                  )}

                    <Text color="#46B8A3" as="i">
                      Current RR: {mmr.ranking_in_tier}
                    </Text>
                    <Text color="#46B8A3" as="i">
                      RR Required for Rank Up: {100-mmr.ranking_in_tier}
                    </Text>
            </Flex>

            <Image
              src={
                'https://media.valorant-api.com/competitivetiers/564d8e28-c226-3180-6285-e48a390db8b1/18/largeicon.png'
              }
              boxSize={{ md: '100px', base: '85px' }}
            />
          
      </Stack>
    </Flex>
  );
}