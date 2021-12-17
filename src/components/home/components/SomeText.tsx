import { Box, Heading, Image, Text, Center, Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

const SomeText = () => {
  return (
    <Box textAlign="center">
      <Heading>
        Hello, My name is Gabriella. 👋🏻
      </Heading>
        <br />
      <Text>
      I am a student at the University of Missouri, 🐯 studying Information Technology. In 2020, I graduated from <Link fontWeight={'bold'} href = "https://launchcode.org" isExternal>
          LaunchCode's </Link> Web Development Bootcamp. 🚀 </Text>
<br />
          <Text>Currently building a web app to change how we shop online at <Link fontWeight={'bold'} href = 'https://shopallter.com' isExternall>
          Allter</Link> 👗 and learning more about React. I specialize in Front End Development and have some experience with Data Analysis. 📊
      </Text>
        <br />
       <Link href = "https://github.com/gabriellamiesner" isExternal>
           Github  <ExternalLinkIcon mx='2px' />
       </Link>
        <br />
        <Link href = "https://linkedin.com/in/gmiesner" isExternal>
                Linkedin <ExternalLinkIcon mx='2px' />
        </Link>
        <br />
        <br />
        <Center>
        <Image src = "https://avatars.githubusercontent.com/u/51331370?v=4" alignSelf= "center" borderRadius='full' boxSize='15rem'/>
        </Center>
    </Box>
  );
};

export default SomeText;
