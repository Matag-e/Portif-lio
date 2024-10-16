import { Component } from '@angular/core';

interface Projeto {
    titulo: string;
    descricao: string;
    imagem: string;
    link: string;
}

@Component({
    selector: 'app-projetos',
    templateUrl: './projetos.component.html',
    styleUrls: ['./projetos.component.css']
})
export class ProjetosComponent {
    projetos: Projeto[] = [
        {
            titulo: 'Zoosuplementos',
            descricao: 'Site de venda de suplementos desenvolvido com tecnologias de front-end (HTML, CSS, JavaScript, Bootstrap) e back-end (PHP, SQL, AJAX).',
            imagem: 'zoosup.png',
            link: 'https://github.com/Matag-e/ZOOSuplementos'
        },
        {
            titulo: 'MINIBLOG',
            descricao: 'Blog interativo que permite postar fotos com legendas, desenvolvido com React no front-end e Firebase no back-end.',
            imagem: 'miniblog.png',
            link: 'https://github.com/Matag-e/MiniBLOG'
        },
        {
            titulo: 'DeltaService',
            descricao: 'Site de uma loja, desenvolvido com HTML, CSS, JavaScript, Angular, TypeScript e Express. Oferece uma experiência de compra intuitiva e eficiente.',
            imagem: 'delta.png',
            link: 'https://github.com/Matag-e/Delta'
        },
        {
            titulo: 'Movies Lib',
            descricao: 'Site simples que consome a API do TMDB para exibir todos os filmes do banco de dados. Permite busca e filtragem de filmes por categoria.',
            imagem: 'tmdb.png',
            link: 'https://github.com/Matag-e/tmdb_api'
        },
        {
            titulo: 'Dashboard Admin',
            descricao: 'Site simples de dashboard admin, desenvolvido apenas com HTML e CSS.',
            imagem: 'dashboard.png',
            link: 'https://github.com/Matag-e/dashboard_responsive'
        },
        {
            titulo: 'Quiz React',
            descricao: 'Aplicativo de perguntas e respostas interativo, desenvolvido com React. Permite aos usuários responderem perguntas de múltipla escolha, com feedback instantâneo e pontuação ao final.',
            imagem: 'quiz.png',
            link: 'https://github.com/Matag-e/quizreact'
        },
        {
            titulo: 'rpaIngressos',
            descricao: 'Automação simples para compra de ingressos, desenvolvida para facilitar o processo de aquisição de bilhetes.',
            imagem: 'image.png',
            link: 'https://github.com/Matag-e/rpaIngressos'
        },
        {
            titulo: 'Todo List',
            descricao: 'Aplicativo de lista de tarefas desenvolvido com React. Permite que os usuários adicionem, removam e marquem tarefas como concluídas.',
            imagem: 'todo.png',
            link: 'https://github.com/Matag-e/ToDoList_react'
        },
        {
            titulo: 'Secret Word',
            descricao: 'Jogo interativo onde os usuários tentam adivinhar a palavra secreta com base em dicas. Desenvolvido com JavaScript e HTML.',
            imagem: 'secret.png',
            link: 'https://github.com/Matag-e/secretWord'
        },
        {
            titulo: 'ACCOUNTS',
            descricao: 'Projeto simples de Node.js simulando um caixa eletrônico, utilizando as bibliotecas Inquirer e Chalk.',
            imagem: 'accounts.png',
            link: 'https://github.com/Matag-e/ACCOUNTS'
        }
    ];
}
