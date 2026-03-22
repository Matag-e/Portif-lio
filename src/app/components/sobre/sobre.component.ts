import { Component, OnInit } from '@angular/core';
import { ProjetosComponent } from '../projetos/projetos.component';

@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrl: './sobre.component.css',
})
export class SobreComponent implements OnInit {
  totalProjetos: number = 0;

  ngOnInit(): void {
    const projetosComp = new ProjetosComponent();
    this.totalProjetos = projetosComp.projetos.length;
  }
}
