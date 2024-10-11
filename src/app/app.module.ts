import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProjetosComponent } from './components/projetos/projetos.component';
import { ContatoComponent } from './components/contato/contato.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapLaptop } from '@ng-icons/bootstrap-icons';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SobreComponent,
    HabilidadesComponent,
    ProjetosComponent,
    ContatoComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]), // Adicione suas rotas aqui
    NgIconsModule.withIcons({ bootstrapLaptop }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
