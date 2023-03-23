# **CSI606-2021-02 - Remoto - Trabalho Final - Resultados**

## *Aluna(o): Francisco Figueiredo Vasconcelos*

--------------

### Resumo

O sistema desenvolvido se trata de um sistema para gerenciar e registrar a aplicação de vacinas em uma ou mais salas de vacina, registrando um histórico desta. A aplicação foi feita utilizando NodeJS e React.

### 1. Funcionalidades implementadas

Um cadastro de vacinas, pacientes, unidades e da própria aplicação da vacina em si, além de edição da unidade e exibiçào do histórico de vacinação desta, relacionando ela com o paciente e com o produto utilizado.
  
### 2. Funcionalidades previstas e não implementadas

Uma autenticação de usuário a qual não foi implementada por falta de tempo, já que teria que estudar como fazer tanto no back quanto no front-end, e um mecanismo para disparar mensagens para o paciente quando fosse necessário que ele retornasse para tomar alguma dose seguinte da vacina, o que exigiria algumas regras de negócio um tanto complexas para implementar.

### 3. Outras funcionalidades implementadas

Uma verificação quando a vacina fosse aplicada para que o paciente, a vacina e a unidade de saúde registradas sejam válidas antes do envio para o banco de dados.

### 4. Principais desafios e dificuldades

O maior desafio foi inicialmente estilizar a página pelo front-end, já que foi a primeira aplicação feita nessa módulo do zero, mas o Tailwind foi muito bom durante o desenvolvimento pois ele conseguia me dar autonomia suficiente para fazer o que queria e de uma maneira intuitiva.

### 5. Instruções para instalação e execução

Inicialmente deve-se clonar o código via GitHub, onde estão as pastas app-server e app-cliente.

Para o app-client apenas é necessário rodar o "npm i" e "npm run dev" para iniciar a aplicação de front-end, que pode ser acessada via [http://localhost:5173/](http://localhost:5173/).

Para o app-server será necessário ter o Postgresql instalado na máquina, e ir até o arquivo que está na pasta prisma e se chama "schema.prisma" e apontar o url do banco para o seu. Depois disso devem ser usados os comandos "npm i" para instalar as dependência, "npx prisma migrate dev" para criar o banco de dados e rodar o servidor com "npm run dev", que ficará disponível na porta 3000.
