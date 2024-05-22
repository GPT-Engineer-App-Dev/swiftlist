import { Box, Text, Heading, Container } from '@chakra-ui/react';

const About = () => (
  <Container centerContent maxW="container.md" py={10}>
    <Box textAlign="center" mb={6}>
      <Heading as="h1" size="xl" mb={4}>About Todo App</Heading>
      <Text fontSize="lg">
        The Todo App is a simple and efficient way to manage your daily tasks. 
        Add, complete, and delete tasks to stay organized and productive. 
        This app is designed to help you keep track of your to-do list with ease.
      </Text>
    </Box>
  </Container>
);

export default About;