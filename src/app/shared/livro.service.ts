import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  livros: Livro[];

  constructor() { 
    this.livros = [
      {
        codigo: 1,
        nome: "LOTR - Fellowship of the ring",
        autor: "J.R.R. Tolkien",
        logo: 'https://images-na.ssl-images-amazon.com/images/I/311cT2c6+UL._SX310_BO1,204,203,200_.jpg',
        isbn: "9780563528883"
      },
      {
        codigo: 2,
        nome: "LOTR - The Two Towers",
        autor: "J.R.R. Tolkien",
        logo: 'https://livrariadavila.vteximg.com.br/arquivos/ids/471044-428-620/9780261102361.jpg?v=637425365905470000',
        isbn: "9780563528883"
      },
      {
        codigo: 3,
        nome: "LOTR - The Return of the King",
        autor: "J.R.R. Tolkien",
        logo: 'https://images-na.ssl-images-amazon.com/images/I/51MlPWDaXGL.jpg',
        isbn: "9780563528883"
      },
      {
        codigo: 4,
        nome: "The Silmarillion",
        autor: "J.R.R. Tolkien",
        logo: 'https://images-na.ssl-images-amazon.com/images/I/41SAdzmroEL._SX327_BO1,204,203,200_.jpg',
        isbn: "9780563528883"
      },
      {
        codigo: 5,
        nome: "The Hobbit",
        autor: "J.R.R. Tolkien",
        logo: 'https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg',
        isbn: "9780563528883"
      },
      {
        codigo: 6,
        nome: "The Children of Húrin",
        autor: "J.R.R. Tolkien",
        logo: 'https://m.media-amazon.com/images/I/51l0B3EVhPL.jpg',
        isbn: "9780563528883"
      },
      {
        codigo: 7,
        nome: "The History of The Hobbit",
        autor: "J.R.R. Tolkien",
        logo: 'https://images-na.ssl-images-amazon.com/images/I/41AlFMyVztL.jpg',
        isbn: "9780563528883"
      },
      {
        codigo: 8,
        nome: "Bilbo's Last Song",
        autor: "J.R.R. Tolkien",
        logo: 'https://images-na.ssl-images-amazon.com/images/I/81HsBuUOo7L.jpg',
        isbn: "9780563528883"
      },
      {
        codigo: 9,
        nome: "Farmer Giles of Ham",
        autor: "J.R.R. Tolkien",
        logo: 'https://images-na.ssl-images-amazon.com/images/I/51n94S4nuoL._SX309_BO1,204,203,200_.jpg',
        isbn: "9780563528883"
      },
      {
        codigo: 10,
        nome: "Tree and Leaf",
        autor: "J.R.R. Tolkien",
        logo: 'https://images-na.ssl-images-amazon.com/images/I/413Dxno6X5L._SX325_BO1,204,203,200_.jpg',
        isbn: "9780563528883"
      }
    ];
  }

  public getLivros() {
    return this.livros;
  }
}
