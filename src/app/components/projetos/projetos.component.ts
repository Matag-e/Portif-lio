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
      link: '#',
      github: '#'
    },
    {
      title: 'TMDB Movies',
      description: 'Catálogo de filmes utilizando a API do The Movie Database (TMDB).',
      image: 'tmdb.png',
      tech: ['Angular', 'API REST'],
      link: '#',
      github: '#'
    },
    {
      title: 'Gerenciador de Tarefas',
      description: 'Aplicação To-Do List para organização pessoal e produtividade.',
      image: 'todo.png',
      tech: ['TypeScript', 'Local Storage'],
      link: '#',
      github: '#'
    },
    {
      title: 'Quiz App',
      description: 'Jogo interativo de perguntas e respostas para testar conhecimentos.',
      image: 'quiz.png',
      tech: ['JavaScript', 'CSS'],
      link: '#',
      github: '#',
      simpleBackground: true
    },
    {
      title: 'Dashboard Financeiro',
      description: 'Painel administrativo para visualização de métricas e dados.',
      image: 'dashboard.png',
      tech: ['Angular', 'Chart.js'],
      link: '#',
      github: '#'
    },
    {
      title: 'ZooSup',
      description: 'Plataforma de gestão para pet shops e clínicas veterinárias.',
      image: 'zoosup.png',
      tech: ['Full Stack', 'Node.js'],
      link: '#',
      github: '#'
    },
    {
      title: 'Delta System',
      description: 'Sistema corporativo para gerenciamento de processos internos.',
      image: 'delta.png',
      tech: ['Angular', 'Java'],
      link: '#',
      github: '#'
    },
    {
      title: 'Secret Word',
      description: 'Jogo de adivinhação de palavras inspirado em clássicos da TV.',
      image: 'secret.png',
      tech: ['React', 'CSS'],
      link: '#',
      github: '#',
      simpleBackground: true
    }
  ];
}
