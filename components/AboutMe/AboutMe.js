import React from 'react';
import { Link,Text } from '@chakra-ui/react';

const AboutMe = () => {
  return (
    <section id="about-me">
      <Text align="center" fontSize="5xl" my="1em">
        Hi, I&apos;m Andrew Horn, owner of Karuna Code LLC.
      </Text>
      <Text align="center" fontSize="2xl" mx="2em" mb="2em">
        I am a full-stack web developer with a passion for creating efficient and scalable applications. With experience in both front-end and back-end technologies, I enjoy building seamless user experiences and robust server-side solutions. When I&apos;m not coding, I love writing and organizing.
      </Text>
            <Text align="center" fontSize="2xl" mx="2em" mb="2em"><Link href="/contact" color="teal.500" textDecoration="underline">
Contact me here      </Link></Text>
    </section>
  );
};

export default AboutMe;
