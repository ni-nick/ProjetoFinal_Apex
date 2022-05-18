import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { Contato } from '../api/contato';

@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html',
  styleUrls: ['./contato.component.css']
})
export class ContatoComponent implements OnInit {

  public posts: Contato[] = [];
  contato = new Contato;

  constructor(private servico:ApiService) { }

  ngOnInit(): void {
    this.atualizarLista();
  }

  atualizarLista(){
    this.servico.listar().subscribe(posts => {this.posts = posts});
  }

  handleSubmit(){
    this.servico.adicionar(this.contato).subscribe(posts => {this.posts.push(posts)})
    
    window.location.reload();
  }

  handleDelete(id: Number){
    this.servico.remover(id).subscribe(posts => {});

    window.location.reload();
  }

  VerificaLabel(){
    var botao = document.getElementById('botao');
    var nome = document.getElementById('nome');
    var email = document.getElementById('email');
    var texto = document.getElementById('areaTexto');

    // botao?.ariaDisabled = true;
  }

}
