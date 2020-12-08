import { Component, OnInit } from '@angular/core';
import { Livro } from '../shared/livro';
import { LivroService } from '../shared/livro.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.page.html',
  styleUrls: ['./book-list.page.scss'],
})
export class BookListPage implements OnInit {

  listaLivros: Livro[];

  constructor(private livroService: LivroService) { }

  ngOnInit() {
    this.listaLivros = this.livroService.getLivros();
  }

}
