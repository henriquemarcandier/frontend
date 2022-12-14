import { FiUser, FiLock } from "react-icons/fi";

import { Link as LinkNav } from "react-router-dom";
import {
  Flex,
  Link,
  Heading,
  FormControl,
  Text,
  Box,
  Image as Background,
  Stack,
  InputGroup,
  InputLeftElement,
  Input,
  Button,
} from "@chakra-ui/react";

import { useState } from "react";

export function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");

  return (
    <Flex height="100vh" bg="PURPLE">
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        padding="0 128px"
      >
        <FormControl display="flex" flexDirection="column">
          <Heading textAlign="center" color="YELLOW" fontSize="48px">
            YouPop
          </Heading>
          <Text textAlign="center" fontSize="16px" color="WHITE">
            Transparência em 1º lugar
          </Text>

          <Heading
            margin="48px 0"
            fontSize="24px"
            textAlign="center"
            color="WHITE"
          >
            Faça seu login
          </Heading>

          <Stack>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FiUser color="grey" />}
              />
              <Input
                _placeholder={{ color: "gray" }}
                color="WHITE"
                bgColor="PURPLE_SECONDARY"
                border="none"
                type="text"
                placeholder="Nome do Usuário"
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>

            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FiLock color="grey" />}
              />
              <Input
                _placeholder={{ color: "gray" }}
                color="WHITE"
                bgColor="PURPLE_SECONDARY"
                border="none"
                type="password"
                placeholder="Senha"
                onChange={(e) => setPhone(e.target.value)}
              />
            </InputGroup>
          </Stack>

          <Button
            margin="16px 0"
            bg="YELLOW"
            color="WHITE"
            _hover={{ opacity: 0.8 }}
          >
            Enviar
          </Button>

          <Link textAlign="center" color="YELLOW" as={LinkNav} to="/register">
            Criar conta
          </Link>
        </FormControl>
      </Box>

      <Background
        bgPosition="center"
        bgRepeat="no-repeat"
        flex="1"
        src="/src/assets/ilustracoes/peca-aqui-e-coma-no-restaurante.png"
      />
    </Flex>
  );
}
