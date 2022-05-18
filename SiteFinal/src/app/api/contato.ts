export class Contato{
    id: number = 0;
    nome: string = '';
    email: string = '';
    telefone: string ='';
    texto: string = '';

    createAt: Date = new Date();
    updateAt: Date = new Date();
}