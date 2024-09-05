Django-React Authentication
Este projeto é uma aplicação full-stack que implementa um sistema de autenticação usando Django no backend e React no frontend. Ele demonstra como integrar essas duas tecnologias para construir uma solução de autenticação moderna e escalável.

Funcionalidades
Registro de usuários
Login/Logout
Autenticação com base em tokens (JWT)
Proteção de rotas no frontend
Integração entre frontend e backend para manipulação de sessões
Tecnologias
Django (Backend)
Django REST Framework para criação da API
React (Frontend)
JWT (JSON Web Tokens) para autenticação
CSS e HTML para a interface de usuário
Estrutura do Projeto
O projeto está dividido em dois diretórios principais:

Backend (Django): Localizado em backend/
Frontend (React): Localizado em frontend/
Pré-requisitos
Certifique-se de ter os seguintes softwares instalados:

Python 3.8+
Node.js 14+
npm ou yarn
Configuração e Execução
Backend (Django)
Clone o repositório:

bash
Copiar código
git clone https://github.com/DouglasTardioli/django-react-authentication.git
cd django-react-authentication/backend
Crie um ambiente virtual:

bash
Copiar código
python3 -m venv venv
source venv/bin/activate
Instale as dependências:

bash
Copiar código
pip install -r requirements.txt
Execute as migrações do banco de dados:

bash
Copiar código
python manage.py migrate
Inicie o servidor Django:

bash
Copiar código
python manage.py runserver
Frontend (React)
Acesse o diretório do frontend:

bash
Copiar código
cd ../frontend
Instale as dependências:

bash
Copiar código
npm install
Execute o servidor de desenvolvimento do React:

bash
Copiar código
npm start
Uso
Após iniciar ambos os servidores, acesse a aplicação em seu navegador em http://localhost:3000 (frontend) e o backend estará disponível em http://localhost:8000.

Contribuição
Faça um fork do projeto.
Crie uma branch para sua funcionalidade (git checkout -b feature/nova-funcionalidade).
Faça o commit de suas mudanças (git commit -m 'Adiciona nova funcionalidade').
Envie a branch (git push origin feature/nova-funcionalidade).
Abra um Pull Request.
Licença
Este projeto está licenciado sob a MIT License.

