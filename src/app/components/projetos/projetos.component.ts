import { Component } from '@angular/core';

@Component({
  selector: 'app-projetos',
  templateUrl: './projetos.component.html',
  styleUrl: './projetos.component.css'
})
export class ProjetosComponent {
  projects = [
    {
      title: 'ReactGram',
      description: 'Rede social completa inspirada no Instagram com compartilhamento de fotos, likes e comentários.',
      image: 'reactgram.png',
      tech: ['React', 'Node.js', 'MongoDB', 'Redux'],
      link: 'https://react-gram-opal.vercel.app/',
      github: 'https://github.com/Matag-e/React_Gram'
    },
    {
      title: 'Mini Blog',
      description: 'Um blog pessoal minimalista para compartilhar artigos e ideias.',
      image: 'miniblog.png',
      tech: ['Angular', 'TypeScript'],
      link: 'https://github.com/Matag-e/MiniBLOG',
      github: 'https://github.com/Matag-e/MiniBLOG'
    },
    {
      title: 'TMDB Movies',
      description: 'Catálogo de filmes utilizando a API do The Movie Database (TMDB).',
      image: 'tmdb.png',
      tech: ['Angular', 'API REST'],
      link: 'https://github.com/Matag-e/tmdb_api',
      github: 'https://github.com/Matag-e/tmdb_api'
    },
    {
      title: 'Gerenciador de Tarefas',
      description: 'Aplicação To-Do List para organização pessoal e produtividade.',
      image: 'todo.png',
      tech: ['TypeScript', 'Local Storage'],
      link: 'https://github.com/Matag-e/ToDoList_react',
      github: 'https://github.com/Matag-e/ToDoList_react'
    },
    {
      title: 'Quiz App',
      description: 'Jogo interativo de perguntas e respostas para testar conhecimentos.',
      image: 'quiz.png',
      tech: ['JavaScript', 'CSS'],
      link: 'https://github.com/Matag-e/quizreact',
      github: 'https://github.com/Matag-e/quizreact',
      simpleBackground: true
    },
    {
      title: 'Dashboard Financeiro',
      description: 'Painel administrativo para visualização de métricas e dados.',
      image: 'dashboard.png',
      tech: ['Angular', 'Chart.js'],
      link: 'https://github.com/Matag-e/responsive_adminDashboard',
      github: 'https://github.com/Matag-e/responsive_adminDashboard'
    },
    {
      title: 'ZooSup',
      description: 'Plataforma de gestão para pet shops e clínicas veterinárias.',
      image: 'zoosup.png',
      tech: ['Full Stack', 'Node.js'],
      link: 'https://github.com/Matag-e/ZOOSuplementos',
      github: 'https://github.com/Matag-e/ZOOSuplementos'
    },
    {
      title: 'Delta System',
      description: 'Sistema corporativo para gerenciamento de processos internos.',
      image: 'delta.png',
      tech: ['Angular', 'Java'],
      link: 'https://github.com/projetosUninove/delta',
      github: 'https://github.com/projetosUninove/delta'
    },
    {
      title: 'Secret Word',
      description: 'Jogo de adivinhação de palavras inspirado em clássicos da TV.',
      image: 'secret.png',
      tech: ['React', 'CSS'],
      link: 'https://github.com/Matag-e/SecretWord',
      github: 'https://github.com/Matag-e/SecretWord',
      simpleBackground: true
    },
    {
      title: 'Accounts Node',
      description: 'Simulador bancário via terminal (CLI) permitindo criar contas, depósitos, saques e consultas.',
      image: 'accounts.png',
      tech: ['Node.js', 'Inquirer', 'Chalk'],
      link: 'https://github.com/Matag-e/ACCOUNTS_NODE',
      github: 'https://github.com/Matag-e/ACCOUNTS_NODE'
    }
  ];
}