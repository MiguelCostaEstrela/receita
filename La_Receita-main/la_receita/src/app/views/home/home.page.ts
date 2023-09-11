import { Component } from '@angular/core';
import { Receita } from 'src/app/services/pratos/prato';
import { CadastrarService } from 'src/app/services/cadastrar/cadastrar.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  public receitas : Receita[] = [];


  constructor(private alertController: AlertController,
    private router : Router, 
    private cadastrarService : CadastrarService) {
      this.receitas = this.cadastrarService.obterTodos();
    }

}
