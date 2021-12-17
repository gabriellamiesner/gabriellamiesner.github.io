import { Flex, Link, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex
      as="footer"
      width="full"
      align="center"
      alignSelf="flex-end"
      justifyContent="center"
    >

      <Text fontSize="sm">
        © {new Date().getFullYear()} -{" "} Gabriella Miesner.
      </Text>
    </Flex>
  );
};

export default Footer;
