import {Container,Flex,Text,HStack,Button} from '@chakra-ui/react'
import {Link} from 'react-router-dom'
import { FaRegPlusSquare } from "react-icons/fa";

export default function NavBar(){
    return (
        <Container maxW={'1140px'} px={4}>
            <Flex
                h={16}
                alignItems={'center'}
                justifyContent={'space-between'}
                flexDir={{
                    base:'column',
                    sm:'row'
                }}
            >
                <Text
                    fontSize={{base:'22',sm:'28'}}
                    fontWeight={'bold'}
                    textTransform={'uppercase'}
                    textAlign={'center'}
                    bgGradient={'linear(to-l, #7928ca,#ff0080'}
                    bgClip={'text'}
                >
                    <Link to={'/'}>
                        Product Store 🛒 
                    </Link>
                </Text>

                <HStack spacing={2} alignItems={'center'}>
                    <Link to={'/create'}>
                        <Button>
                            <FaRegPlusSquare fontSize={20} />
                        </Button>
                    </Link>

                </HStack>

            </Flex>
        </Container>
    )
}