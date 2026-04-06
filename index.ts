index.ts

class Livro {
  constructor(
    public titulo: string,
    public autor: string,
    public isbn: string
  ) {}
}

class Usuario {
  constructor(
    public nome: string,
    public email: string
  ) {}
}

console.log("Sistema funcionando");
