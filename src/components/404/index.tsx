import {
  Box,
  Button,
  Grid,
  Heading,
  Image,
  Link,
  Text,
} from "@chakra-ui/react";
import { useHistory } from "react-router-dom";

const Page404 = () => {
  const history = useHistory();

  const handleBackToHome = () => history.push("/");

  return (
    <Grid gap={4} textAlign="center">
        <Heading> 4️⃣0️⃣️4️⃣ </Heading>
      <Heading>Page not Found</Heading>


      <Box>
        <Button onClick={handleBackToHome}>Let&apos;s Head Back</Button>
      </Box>
    </Grid>
  );
};

export default Page404;
