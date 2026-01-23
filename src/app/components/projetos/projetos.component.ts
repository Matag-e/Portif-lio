import { Component } from '@angular/core';








@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {
  projetos = [
    {
      titulo: 'Roteiro.io',
      descricao: 'Aplicação completa para planejamento de viagens. Inclui roteiros diários, mapa interativo, controle financeiro, checklist de bagagem e exportação em PDF. Desenvolvido com MERN Stack e TypeScript.',
      imagem: 'roteiro-cover.svg',
      tech: ['MERN Stack', 'TypeScript'],
      link: 'https://github.com/Matag-e/roteiro.io',
      github: 'https://github.com/Matag-e/roteiro.io'
    },
    {
      titulo: 'Community Mapper',
      descricao: 'Plataforma de mapeamento colaborativo de problemas urbanos com geolocalização, dashboard administrativo e autenticação.',
      imagem: 'community.png',
      tech: ['FastAPI', 'Python', 'Leaflet', 'MongoDB'],
      link: 'https://github.com/Matag-e/community-map',
      github: 'https://github.com/Matag-e/community-map'
    },
    {
      titulo: 'ReactGram',
      descricao: 'Rede social completa inspirada no Instagram com compartilhamento de fotos, likes e comentários.',
      imagem: 'reactgram.png',
      tech: ['React', 'Node.js', 'MongoDB', 'Redux'],
      link: 'https://react-gram-opal.vercel.app/',
      github: 'https://github.com/Matag-e/React_Gram'
    },
    {
      titulo: 'Mini Blog',
      descricao: 'Um blog pessoal minimalista para compartilhar artigos e ideias.',
      imagem: 'miniblog.png',
      tech: ['Angular', 'TypeScript'],
      link: 'https://github.com/Matag-e/MiniBLOG',
      github: 'https://github.com/Matag-e/MiniBLOG'
    },
    {
      titulo: 'TMDB Movies',
      descricao: 'Catálogo de filmes utilizando a API do The Movie Database (TMDB).',
      imagem: 'tmdb.png',
      tech: ['Angular', 'API REST'],
      link: 'https://github.com/Matag-e/tmdb_api',
      github: 'https://github.com/Matag-e/tmdb_api'
    },
    {
      titulo: 'Gerenciador de Tarefas',
      descricao: 'Aplicação To-Do List para organização pessoal e produtividade.',
      imagem: 'todo.png',
      tech: ['TypeScript', 'Local Storage'],
      link: 'https://github.com/Matag-e/ToDoList_react',
      github: 'https://github.com/Matag-e/ToDoList_react'
    },
    {
      titulo: 'Quiz App',
      descricao: 'Jogo interativo de perguntas e respostas para testar conhecimentos.',
      imagem: 'quiz.png',
      tech: ['JavaScript', 'CSS'],
      link: 'https://github.com/Matag-e/quizreact',
      github: 'https://github.com/Matag-e/quizreact',
      simpleBackground: true
    },
    {
      titulo: 'Dashboard Financeiro',
      descricao: 'Painel administrativo para visualização de métricas e dados.',
      imagem: 'dashboard.png',
      tech: ['Angular', 'Chart.js'],
      link: 'https://github.com/Matag-e/responsive_adminDashboard',
      github: 'https://github.com/Matag-e/responsive_adminDashboard'
    },
    {
      titulo: 'ZooSup',
      descricao: 'Plataforma de gestão para pet shops e clínicas veterinárias.',
      imagem: 'zoosup.png',
      tech: ['Full Stack', 'Node.js'],
      link: 'https://github.com/Matag-e/ZOOSuplementos',
      github: 'https://github.com/Matag-e/ZOOSuplementos'
    },
    {
      titulo: 'Delta System',
      descricao: 'Sistema corporativo para gerenciamento de processos internos.',
      imagem: 'delta.png',
      tech: ['Angular', 'Java'],
      link: 'https://github.com/projetosUninove/delta',
      github: 'https://github.com/projetosUninove/delta'
    },
    {
      titulo: 'Secret Word',
      descricao: 'Jogo de adivinhação de palavras inspirado em clássicos da TV.',
      imagem: 'secret.png',
      tech: ['React', 'CSS'],
      link: 'https://github.com/Matag-e/SecretWord',
      github: 'https://github.com/Matag-e/SecretWord',
      simpleBackground: true
    },
    {
      titulo: 'Accounts Node',
      descricao: 'Simulador bancário via terminal (CLI) permitindo criar contas, depósitos, saques e consultas.',
      imagem: 'accounts.png',
      tech: ['Node.js', 'Inquirer', 'Chalk'],
      link: 'https://github.com/Matag-e/ACCOUNTS_NODE',
      github: 'https://github.com/Matag-e/ACCOUNTS_NODE'
    },
    {
      titulo: 'FastAPI Chat',
      descricao: 'Chat em tempo real com ChatBot inteligente (ELIZA), autenticação JWT, WebSockets e MongoDB.',
      imagem: 'fastapi-chat.png',
      tech: ['FastAPI', 'Python', 'MongoDB', 'WebSocket'],
      link: 'https://github.com/Matag-e/fastapi-chat',
      github: 'https://github.com/Matag-e/fastapi-chat'
    }
  ];
}