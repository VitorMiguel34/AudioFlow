# 🎵 AudioFlow

AudioFlow é um **aplicativo de música** em **fase inicial de desenvolvimento**, com o objetivo de se tornar uma plataforma completa de streaming de áudio.

> ⚠️ **Status:** early stage. Funcionalidades ainda estão em implementação.

---

## 🚀 Visão Geral

O AudioFlow busca entregar os principais recursos de um app de música moderno:

* 🎧 Player de áudio
* 📂 Playlists
* 🔐 Autenticação de usuários
* ❤️ Curtidas e favoritos
* 🔍 Descoberta de músicas e artistas

A aplicação segue uma arquitetura moderna, com **frontend** e **backend** bem definidos.

---

## 🛠️ Tecnologias

### Frontend

* React
* TypeScript
* Tailwind CSS

### Backend

* Django
* Django REST Framework
* Autenticação via JWT

### Linguagens

* TypeScript (frontend)
* Python (backend)

---

## 🔐 Autenticação

A autenticação é feita com **JWT**, oferecendo:

* Login seguro
* Proteção de rotas
* Comunicação stateless entre frontend e backend

---

## ⚙️ Instalação

### Pré-requisitos

* Python 3.10+
* Node.js 18+
* npm ou yarn
* Git

---

### 📦 Backend (Django)

```bash
git clone https://github.com/seu-usuario/audioflow.git
cd audioflow/backend
python -m venv venv
source venv/bin/activate  # Linux/Mac
venv\Scripts\activate     # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```

Backend disponível em:

```
http://localhost:8000
```

---

### 💻 Frontend (React)

```bash
cd ../frontend
npm install  # ou yarn
npm run dev  # ou yarn dev
```

Frontend disponível em:

```
http://localhost:5173
```

---

## 📌 Roadmap

* [ ] Autenticação completa
* [ ] Player de áudio
* [ ] Playlists
* [ ] Sistema de assinaturas
* [ ] Upload e streaming de músicas
* [ ] UI/UX refinada



