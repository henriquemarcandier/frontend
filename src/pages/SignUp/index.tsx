import { FiMail, FiCalendar, FiPhone, FiHome, FiUser, FiLock } from "react-icons/fi";

import { Select } from '@chakra-ui/react'

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

export function SignUp() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [user, setUser] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [date, setDate] = useState<string>("");
  const [nationality, setNationality] = useState<string>("");
  const [telephone, setTelephone] = useState<string>("");
  const [address, setAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [type, setType] = useState<string>("");

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
            Cadastro
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
                placeholder="Nome Completo"
                title="Nome Completo"
                onChange={(e) => setName(e.target.value)}
              />
            </InputGroup>

            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FiMail color="grey" />}
              />
              <Input
                _placeholder={{ color: "gray" }}
                color="WHITE"
                bgColor="PURPLE_SECONDARY"
                border="none"
                type="email"
                placeholder="Email"
                title="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </InputGroup>

            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FiCalendar color="grey" />}
              />
              <Input
                _placeholder={{ color: "gray" }}
                color="WHITE"
                bgColor="PURPLE_SECONDARY"
                border="none"
                type="date"
                placeholder="Data de Aniversário"
                title="Data de Aniversário"
                onChange={(e) => setDate(e.target.value)}
              />
            </InputGroup>

            <InputGroup>
              <InputLeftElement
                pointerEvents="none" />
              <Select
                bg='PURPLE_SECONDARY'
                borderColor='PURPLE_SECONDARY'
                color='#666'
                placeholder='Selecione a sua nacionalidade...'
                title="Nacionalidade"
                onChange={(e) => setNationality(e.target.value)}
              >
                <option value='brasileira'>Brasileira</option>
                <option value='outra'>Outra</option>
              </Select>
            </InputGroup>            
            
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FiPhone color="grey" />}
              />
              <Input
                _placeholder={{ color: "gray" }}
                color="WHITE"
                bgColor="PURPLE_SECONDARY"
                border="none"
                type="telephone"
                placeholder="Celular"
                title="Celular"
                onChange={(e) => setTelephone(e.target.value)}
              />
            </InputGroup>      
            
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FiHome color="grey" />}
              />
              <Input
                _placeholder={{ color: "gray" }}
                color="WHITE"
                bgColor="PURPLE_SECONDARY"
                border="none"
                type="text"
                placeholder="Endereço"
                title="Endereço"
                onChange={(e) => setAddress(e.target.value)}
              />
            </InputGroup>    
            
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<FiHome color="grey" />}
              />
              <Input
                _placeholder={{ color: "gray" }}
                color="WHITE"
                bgColor="PURPLE_SECONDARY"
                border="none"
                type="text"
                placeholder="Cidade"
                title="Cidade"
                onChange={(e) => setCity(e.target.value)}
              />
            </InputGroup>

            <InputGroup>
              <InputLeftElement
                pointerEvents="none" />
              <Select
                bg='PURPLE_SECONDARY'
                borderColor='PURPLE_SECONDARY'
                color='#666'
                placeholder='Selecione o seu estado...'
                title="Estado"
                onChange={(e) => setState(e.target.value)}
              >
                <option value='AC'>Acre</option>
                <option value='AL'>Alagoas</option>
                <option value='AP'>Amapá</option>
                <option value='AM'>Amazonas</option>
                <option value='BA'>Bahia</option>
                <option value='CE'>Ceará</option>
                <option value='DF'>Distrito Federal</option>
                <option value='ES'>Espírito Santo</option>
                <option value='GO'>Goiás</option>
                <option value='MA'>Maranhão</option>
                <option value='MT'>Mato Grosso</option>
                <option value='MS'>Mato Grosso do Sul</option>
                <option value='MG'>Minas Gerais</option>
                <option value='PA'>Pará</option>
                <option value="PB">Paraíba</option>
                <option value="PR">Paraná</option>
                <option value="PE">Pernambuco</option>
                <option value="PI">Piauí</option>
                <option value="RJ">Rio de Janeiro</option>
                <option value="RN">Rio Grande do Norte</option>
                <option value="RS">Rio Grande do Sul</option>
                <option value="RO">Rondônia</option>
                <option value="RR">Roraima</option>
                <option value="SC">Santa Catarina</option>
                <option value="SP">São Paulo</option>
                <option value="SE">Sergipe</option>
                <option value="TO">Tocantins</option>
              </Select>
            </InputGroup> 

            <InputGroup>
              <InputLeftElement
                pointerEvents="none" />
              <Select
                bg='PURPLE_SECONDARY'
                borderColor='PURPLE_SECONDARY'
                color='#666'
                placeholder='Selecione o seu tipo...'
                title="Estado"
                onChange={(e) => setType(e.target.value)}
              >
                <option value='1'>CHO</option>
                <option value='2'>Coordenador de recrutamento e seleção</option>
                <option value='3'>Recrutador</option>
                <option value='4'>Supervisor de motoboys</option>
                <option value='5'>Motoboys</option>
              </Select>
            </InputGroup> 

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
                title="Nome de Usuário"
                onChange={(e) => setUser(e.target.value)}
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
                title="Senha"
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
            Cadastrar
          </Button>

          <Link textAlign="center" color="YELLOW" as={LinkNav} to="/">
            Login
          </Link>
        </FormControl>
      </Box>

      <Background
        bgPosition="center"
        bgRepeat="no-repeat"
        flex="1"
        src="/src/assets/ilustracoes/hoje-voce-merece.png"
      />
    </Flex>
  );
}
