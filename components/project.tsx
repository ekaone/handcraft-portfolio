import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  Box,
  SimpleGrid,
  Text,
  Flex,
  HStack,
  Stack,
  Badge,
} from "@chakra-ui/react";
import { FaGithub, FaLink } from "react-icons/fa";
// components
import Layout from "./layout";
import { projects } from "../shared/projects";

interface ProjectProps {
  name: string;
  main: string;
  img: string;
  repo: string;
  demo: string;
  tags: { id: number; name: string; color: string }[];
}

const ProjectCard = ({ name, main, img, repo, demo, tags }: ProjectProps) => (
  <>
    <Box>
      <Text
        fontFamily="'Codystar', cursive"
        bgGradient={[
          "linear-gradient(to left, blue, yellow)",
          null,
          "linear-gradient(to right, red, orange)",
        ]}
        bgClip="text"
        fontSize="4xl"
        fontWeight="extrabold"
      >
        {name}
      </Text>
      <Text fontFamily="'DM Sans', cursive" fontSize="1.5rem">
        {main}
      </Text>
      <HStack marginTop="30px" fontSize="25px" color="white">
        <Link href={repo}>
          <a
            target="_blank"
            style={{ textDecoration: "none", color: "&hover:" }}
          >
            <FaGithub />
          </a>
        </Link>{" "}
        <Link href={demo}>
          <a
            target="_blank"
            style={{ textDecoration: "none", color: "&hover:" }}
          >
            {" "}
            <FaLink />
          </a>
        </Link>
      </HStack>
      <Stack direction="row" marginTop="20px">
        {tags.map((tag) => (
          <Badge key={tag.id} colorScheme={tag.color}>
            {tag.name}
          </Badge>
        ))}
      </Stack>
    </Box>
    <Box
      padding=".4rem"
      background={[
        "linear-gradient(to left, blue, yellow)",
        null,
        "linear-gradient(to right, red, orange)",
      ]}
    >
      <Image
        alt="Images"
        src={img}
        loading="lazy"
        width={500}
        height={225}
        layout="responsive"
      />
    </Box>
  </>
);

function Project() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans&family=Codystar&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Layout>
        {projects.map((project) => (
          <Box
            key={project.id}
            padding=".2rem"
            // background="linear-gradient(to right, red, orange)"
            mt="10px"
          >
            <Box background="rgba(34,2,0,0.3)" padding="1rem">
              <SimpleGrid columns={[1, null, 2]} spacing={5}>
                <ProjectCard
                  name={project.name}
                  main={project.main}
                  img={project.img}
                  repo={project.repo}
                  demo={project.demo}
                  tags={project.tags}
                />
              </SimpleGrid>
            </Box>
          </Box>
        ))}
      </Layout>
    </>
  );
}

export default Project;
