🚀 Projeto DevSecOps - Frontend e Backend

Este projeto contém um backend em Node.js com Express e um frontend em React.js, demonstrando um pipeline de DevSecOps em funcionamento.

📦 Requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:

Node.js (v16 ou superior)

NPM (gerenciador de pacotes do Node.js)

Docker (opcional, caso queira rodar em container)

🛠️ Como Rodar o Projeto

📂 1. Clonando o Repositório

# Clone o repositório para sua máquina
git clone https://github.com/seu-repositorio.git
cd seu-repositorio

🔧 2. Instalando Dependências

Backend

cd backend
npm install

Frontend

cd frontend
npm install

🚀 3. Executando os Serviços

Rodar Backend

cd backend
npm start

Isso iniciará o servidor backend na porta 5000.

Rodar Frontend

cd frontend
npm start

O frontend será servido por padrão na porta 3000.

🔍 Testando a API

Com o backend rodando, você pode testar a API com:

curl http://localhost:5000/api

Ou acessar pelo navegador:

http://localhost:5000/api

E verá a resposta:

{ "message": "Olá do backend!" }

🐳 Rodando com Docker (Opcional)

Se desejar rodar o projeto dentro de containers Docker:

# No diretório raiz do projeto
docker-compose up --build

Isso iniciará os serviços do backend e frontend automaticamente.

📌 Configurações de Porta

Backend: 5000

Frontend: 3000

Caso precise alterar a porta do backend, edite app.js:

const port = process.env.PORT || 5000;

E para o frontend, modifique .env:

PORT=3000
