import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Tag,
  Text,
} from "@chakra-ui/react";
import {
  MdAddTask,
  MdCloudDone,
  MdDevicesOther,
  MdInsights,
  MdMemory,
  MdRecordVoiceOver,
} from "react-icons/md";
import Section, { SectionProps } from "../Section";

import React from "react";

export default function Service(props: SectionProps) {
  return (
    <Section {...props}>
      <Container maxW="container.xl">
        <Heading
          mb={16}
          pl="20%"
          position="relative"
          _before={{
            top: "50%",
            left: 0,
            marginTop: "-2.5px",
            width: "18%",
            height: "5px",
            backgroundColor: "currentColor",
            borderRadius: "5px",
            content: "''",
            position: "absolute",
          }}
        >
          Como podemos ajudar?
        </Heading>
        <SimpleGrid columns={[1, 2, 3]} spacing={0}>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            p={8}
            pb={0}
            borderRight="2px solid"
          >
            <Box mb={8}>
              <Icon
                as={MdMemory}
                boxSize={16}
                mb={6}
                p={2}
                border="2px solid #fe735e"
                borderRadius="full"
                color="currentColor"
              />
              <Heading as="p" size="md" mb={2}>
                Engenharia de Produto E Design de Experiência
              </Heading>
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                repudiandae eum vel quos aspernatur! Cum incidunt quos impedit
                blanditiis nesciunt obcaecati a corrupti aperiam, tempore, illum
                aliquid amet, ducimus sapiente?
              </Text>
            </Box>
            <Box>
              <Tag
                size="lg"
                variant="outline"
                colorScheme="orange"
                borderRadius="full"
                mr={4}
                mb={4}
              >
                UI/UX
              </Tag>
              <Tag
                size="lg"
                variant="outline"
                colorScheme="orange"
                borderRadius="full"
                mr={4}
                mb={4}
              >
                Backend
              </Tag>
              <Tag
                size="lg"
                variant="outline"
                colorScheme="orange"
                borderRadius="full"
                mr={4}
                mb={4}
              >
                Desenvolvimento
              </Tag>
            </Box>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            p={8}
            pb={0}
          >
            <Box mb={8}>
              <Icon
                as={MdDevicesOther}
                boxSize={16}
                mb={6}
                p={2}
                border="2px solid #fe735e"
                borderRadius="full"
                color="currentColor"
              />
              <Heading as="p" size="md" mb={2}>
                Lorem ipsum dolor sit amet.
              </Heading>
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                repudiandae eum vel quos aspernatur! Cum incidunt quos impedit
                blanditiis nesciunt obcaecati a corrupti aperiam, tempore, illum
                aliquid amet, ducimus sapiente? Lorem ipsum, dolor sit amet
                consectetur adipisicing elit. Perferendis itaque molestiae
                explicabo, nobis molestias facere eum incidunt, quod ex tempora
                vitae doloribus! Et provident maxime, id quisquam adipisci nihil
                quibusdam!
              </Text>
            </Box>
            <Box>
              <Tag
                size="lg"
                variant="outline"
                colorScheme="orange"
                borderRadius="full"
                mr={4}
                mb={4}
              >
                Desktop
              </Tag>
              <Tag
                size="lg"
                variant="outline"
                colorScheme="orange"
                borderRadius="full"
                mr={4}
                mb={4}
              >
                Web
              </Tag>
              <Tag
                size="lg"
                variant="outline"
                colorScheme="orange"
                borderRadius="full"
                mr={4}
                mb={4}
              >
                Mobile
              </Tag>
            </Box>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            p={8}
            pb={0}
            borderLeft="2px solid"
          >
            <Box mb={8}>
              <Icon
                as={MdInsights}
                boxSize={16}
                mb={6}
                p={2}
                border="2px solid #fe735e"
                borderRadius="full"
                color="currentColor"
              />
              <Heading as="p" size="md" mb={2}>
                Engenharia de dados e Analytics
              </Heading>
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                repudiandae eum vel quos aspernatur!
              </Text>
            </Box>
            <Box>
              <Tag
                size="lg"
                variant="outline"
                colorScheme="orange"
                borderRadius="full"
                mr={4}
                mb={4}
              >
                Chatbots
              </Tag>
              <Tag
                size="lg"
                variant="outline"
                colorScheme="orange"
                borderRadius="full"
                mr={4}
                mb={4}
              >
                Aprendizado de Máquinas
              </Tag>
              <Tag
                size="lg"
                variant="outline"
                colorScheme="orange"
                borderRadius="full"
                mr={4}
                mb={4}
              >
                Engenharia de dados
              </Tag>
            </Box>
          </Flex>
        </SimpleGrid>
        <Box mx="auto" width="95%" my={8} border="1px solid" />
        <SimpleGrid columns={[1, 2, 3]} spacing={0}>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            p={8}
            pb={0}
            borderRight="2px solid"
          >
            <Box mb={8}>
              <Icon
                as={MdRecordVoiceOver}
                boxSize={16}
                mb={6}
                p={2}
                border="2px solid #fe735e"
                borderRadius="full"
                color="currentColor"
              />
              <Heading as="p" size="md" mb={2}>
                Cunsultoria e Treinamento
              </Heading>
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                repudiandae eum vel quos aspernatur! Cum incidunt quos impedit
                blanditiis nesciunt obcaecati a corrupti aperiam, tempore, illum
                aliquid amet, ducimus sapiente?
              </Text>
            </Box>
            <Box>
              <Tag
                size="lg"
                variant="outline"
                colorScheme="orange"
                borderRadius="full"
                mr={4}
                mb={4}
              >
                Lorem, ipsum dolor.
              </Tag>
              <Tag
                size="lg"
                variant="outline"
                colorScheme="orange"
                borderRadius="full"
                mr={4}
                mb={4}
              >
                Lorem ipsum dolor sit.
              </Tag>
              <Tag
                size="lg"
                variant="outline"
                colorScheme="orange"
                borderRadius="full"
                mr={4}
                mb={4}
              >
                Lorem, ipsum.
              </Tag>
            </Box>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            p={8}
            pb={0}
          >
            <Box mb={8}>
              <Icon
                as={MdCloudDone}
                boxSize={16}
                mb={6}
                p={2}
                border="2px solid #fe735e"
                borderRadius="full"
                color="currentColor"
              />
              <Heading as="p" size="md" mb={2}>
                DevOps e Cloud
              </Heading>
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              </Text>
            </Box>
            <Box>
              <Tag
                size="lg"
                variant="outline"
                colorScheme="orange"
                borderRadius="full"
                mr={4}
                mb={4}
              >
                Amazon AWS
              </Tag>
              <Tag
                size="lg"
                variant="outline"
                colorScheme="orange"
                borderRadius="full"
                mr={4}
                mb={4}
              >
                Google Cloud
              </Tag>
              <Tag
                size="lg"
                variant="outline"
                colorScheme="orange"
                borderRadius="full"
                mr={4}
                mb={4}
              >
                Microsoft Azure
              </Tag>
            </Box>
          </Flex>
          <Flex
            flexDirection="column"
            justifyContent="space-between"
            p={8}
            pb={0}
            borderLeft="2px solid"
          >
            <Box mb={8}>
              <Icon
                as={MdAddTask}
                boxSize={16}
                mb={6}
                p={2}
                border="2px solid #fe735e"
                borderRadius="full"
                color="currentColor"
              />
              <Heading as="p" size="md" mb={2}>
                Garantia e Qualidade
              </Heading>
              <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
                repudiandae eum vel quos aspernatur!
              </Text>
            </Box>
            <Box>
              <Tag
                size="lg"
                variant="outline"
                colorScheme="orange"
                borderRadius="full"
                mr={4}
                mb={4}
              >
                Automação de testes
              </Tag>
              <Tag
                size="lg"
                variant="outline"
                colorScheme="orange"
                borderRadius="full"
                mr={4}
                mb={4}
              >
                Técnologias mais recentes
              </Tag>
              <Tag
                size="lg"
                variant="outline"
                colorScheme="orange"
                borderRadius="full"
                mr={4}
                mb={4}
              >
                Qualidade de Código
              </Tag>
            </Box>
          </Flex>
        </SimpleGrid>
      </Container>
    </Section>
  );
}
