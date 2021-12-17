import { Box, Image, Badge, Link, Center} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons';


// Sample card from Airbnb
const Project = (props:any) => (
    <Center>
    <Box maxW='xl' borderWidth='1px' borderRadius='lg' overflow='hidden'>
        <Image src={props.image} alt={props.imageAlt}/>

        <Box p='6'>
            <Box display='flex' alignItems='baseline'>
                <Badge borderRadius='full' px='2' colorScheme='purple'>
                    {props.division}
                </Badge>
                <Box
                    color='gray.500'
                    fontWeight='semibold'
                    letterSpacing='wide'
                    fontSize='sm'
                    textTransform='uppercase'
                    ml='2'
                >
                    {props.languages}
                </Box>
            </Box>
<Link href = {props.link} isExternal>
            <Box
                mt='1'
                fontWeight='semibold'
                as='h4'
                lineHeight='tight'
                isTruncated
                fontSize = 'lg'
            >
                {props.title} <ExternalLinkIcon mx='2px' />
            </Box>
</Link>
            <Box
            fontSize = 'sm'>
                {props.description}
            </Box>

        </Box>
    </Box>
    </Center>
);

export default Project;