// Discentes: Alicia Yumi F. A. Dota (202426610015) e Joao Harry Oliveira Hudson (2024266100)
// Disciplina: Arquitetura de Software
// T1 - Implementação de Padrao de Projeto 

// Padrao de projeto: Abstract Factory
// Conceito: Uma fabrica que produz jogos de mesa

import promptSync from "prompt-sync";
const prompt = promptSync();

// Interfaces abstratas

interface Bule{
    material(): string;
    descricao_formato(): string;
    cor(): string;
}

interface Xicara{
    material(): string;
    descricao_formato(): string;
    cor(): string;
    qtd(): number;
}

interface Pires{
    material(): string;
    descricao_formato(): string;
    cor(): string;
    qtd(): number;
}

interface Acucareiro{
    material(): string;
    descricao_formato(): string;
    cor(): string;
}

interface Leiteira_Cremeira{
    material(): string;
    descricao_formato(): string;
    cor(): string;
}

interface Jogo_Cha_Factory{
    criarBule(): Bule;
    criarXicara(): Xicara;
    criarPires(): Pires;
    criarAcucareiro(): Acucareiro;
    criarLeiteira_Cremeira(): Leiteira_Cremeira;
}

// Produtos concretos

class Bule_Classico implements Bule{
    material(): string {
        return "Pocelana Fina";
    }
    descricao_formato(): string{
        return "Arredondado, bico bem definido, tampa com botão decorado e bordas douradas";
    }
    cor(): string{
        return "Azul real"
    }
}

class Xicara_Classico implements Xicara{
    material(): string {
        return "Pocelana Fina";
    }
    descricao_formato(): string{
        return "Pequenas e finas, com detalhes em dourado";
    }
    cor(): string{
        return "Azul real"
    }
    qtd(): number{
        return 6;
    }
}

class Pires_Classico implements Pires{
    material(): string{
        return "Pocelana Fina";
    }
    descricao_formato(): string{
        return "Estilo semelhante a xicara do mesmo jogo e bordas douradas";
    }
    cor(): string{
        return "Azul real"
    }
    qtd(): number{
        return 6;
    }
}

class Acucareiro_Classico implements Acucareiro{
    material(): string {
        return "Pocelana Fina";
    }
    descricao_formato(): string{
        return "Arredondado e com tampa";
    }
    cor(): string{
        return "Azul real"
    }
}

class Leiteira_Cremeira_Classico implements Leiteira_Cremeira{
    material(): string {
        return "Pocelana Fina";
    }
    descricao_formato(): string{
        return "Delicada, alca fina e bico pequeno";
    }
    cor(): string{
        return "Azul real"
    }
}

class Bule_Moderno implements Bule{
    material(): string {
        return "Ceramica Moderna";
    }
    descricao_formato(): string{
        return "Formato geometrico, superficie lisa e com infusor imbutido";
    }
    cor(): string{
        return "Cinza"
    }
}

class Xicara_Moderno implements Xicara{
    material(): string {
        return "Ceramica Moderna";
    }
    descricao_formato(): string{
        return "Retos e levemente quadrados";
    }
    cor(): string{
        return "Cinza"
    }
    qtd(): number{
        return 6;
    }
}

class Pires_Moderno implements Pires{
    material(): string{
        return "Ceramica Moderna";
    }
    descricao_formato(): string{
        return "Simples, sem muitas decorações";
    }
    cor(): string{
        return "Cinza"
    }
    qtd(): number{
        return 6;
    }
}

class Acucareiro_Moderno implements Acucareiro{
    material(): string {
        return "Ceramica Moderna";
    }
    descricao_formato(): string{
        return "Pequeno e com tampa reta";
    }
    cor(): string{
        return "Cinza"
    }
}

class Leiteira_Cremeira_Moderno implements Leiteira_Cremeira{
    material(): string {
        return "Ceramica Moderna";
    }
    descricao_formato(): string{
        return "Estilo jarra minimalista";
    }
    cor(): string{
        return "Cinza"
    }
}

class Bule_Vintage implements Bule{
    material(): string {
        return "Porcelana Decorada";
    }
    descricao_formato(): string{
        return "Formato ovalada e muito decorado com flores e arabescos";
    }
    cor(): string{
        return "Estampa Floral"
    }
}

class Xicara_Vintage implements Xicara{
    material(): string {
        return "Porcelana Decorada";
    }
    descricao_formato(): string{
        return "Arredondadas e com bordas onduladas";
    }
    cor(): string{
        return "Estampa Floral"
    }
    qtd(): number{
        return 6;
    }
}

class Pires_Vintage implements Pires{
    material(): string{
        return "Porcelana Decorada";
    }
    descricao_formato(): string{
        return "Combina com a xicara e detalhes florais na borda";
    }
    cor(): string{
        return "Estampa Floral"
    }
    qtd(): number{
        return 6;
    }
}

class Acucareiro_Vintage implements Acucareiro{
    material(): string {
        return "Porcelana Decorada";
    }
    descricao_formato(): string{
        return "Tampa arredondada e alca decorativa";
    }
    cor(): string{
        return "Estampa Floral"
    }
}

class Leiteira_Cremeira_Vintage implements Leiteira_Cremeira{
    material(): string {
        return "Porcelana Decorada";
    }
    descricao_formato(): string{
        return "Com curvas, detalhes pintados e alca trabalhada";
    }
    cor(): string{
        return "Estampa Floral"
    }
}

// Fabricas abstratas

class Jogo_Classico implements Jogo_Cha_Factory{
    criarBule(): Bule{
        return new Bule_Classico();
    }
    criarXicara(): Xicara{
        return new Xicara_Classico();
    }
    criarPires(): Pires{
        return new Pires_Classico();
    }
    criarAcucareiro(): Acucareiro{
        return new Acucareiro_Classico();
    }
    criarLeiteira_Cremeira(): Leiteira_Cremeira{
        return new Leiteira_Cremeira_Classico();
    }
}

class Jogo_Moderno implements Jogo_Cha_Factory{
    criarBule(): Bule{
        return new Bule_Moderno();
    }
    criarXicara(): Xicara{
        return new Xicara_Moderno();
    }
    criarPires(): Pires{
        return new Pires_Moderno();
    }
    criarAcucareiro(): Acucareiro{
        return new Acucareiro_Moderno();
    }
    criarLeiteira_Cremeira(): Leiteira_Cremeira{
        return new Leiteira_Cremeira_Moderno();
    }
}

class Jogo_Vintage implements Jogo_Cha_Factory{
    criarBule(): Bule{
        return new Bule_Vintage();
    }
    criarXicara(): Xicara{
        return new Xicara_Vintage();
    }
    criarPires(): Pires{
        return new Pires_Vintage();
    }
    criarAcucareiro(): Acucareiro{
        return new Acucareiro_Vintage();
    }
    criarLeiteira_Cremeira(): Leiteira_Cremeira{
        return new Leiteira_Cremeira_Vintage();
    }
}

// Fabrica Concreta

function montarJogo(factory: Jogo_Cha_Factory) {
  const b = factory.criarBule();
  const x = factory.criarXicara();
  const p = factory.criarPires();
  const a = factory.criarAcucareiro();
  const l_c = factory.criarLeiteira_Cremeira();

  console.log("");
  console.log("-- Bule --");
  console.log(`Material: ${b.material()}`);
  console.log(`Descricao: ${b.descricao_formato()}`);
  console.log(`Cor: ${b.cor()}`);
  console.log("");

  console.log("-- Xicara --");
  console.log(`Material: ${x.material()}`);
  console.log(`Descricao: ${x.descricao_formato()}`);
  console.log(`Cor: ${x.cor()}`);
  console.log(`Quantidade = ${x.qtd()}`);
  console.log("");

  console.log("-- Pires --");
  console.log(`Material: ${p.material()}`);
  console.log(`Descricao: ${p.descricao_formato()}`);
  console.log(`Cor: ${p.cor()}`);
  console.log(`Quantidade = ${p.qtd()}`);
  console.log("");

  console.log("-- Acucareira --");
  console.log(`Material: ${a.material()}`);
  console.log(`Descricao: ${a.descricao_formato()}`);
  console.log(`Cor: ${a.cor()}`);
  console.log("");

  console.log("-- Leiteira ou Cremeira --");
  console.log(`Material: ${l_c.material()}`);
  console.log(`Descricao: ${l_c.descricao_formato()}`);
  console.log(`Cor: ${l_c.cor()}`);
  console.log("");
}

// Demonstração

console.log("Seja bem vindo(a) a fabrica de jogos de cha!");

console.log("MENU");
console.log("1 - Jogo de cha Classico");
console.log("2 - Jogo de cha Moderno");
console.log("3 - Jogo de cha Vintage");
console.log("0 - Sair");

var opcao = '-1'; // Apenas para a variavel começar com algum valor

while (opcao !== "0") {
    opcao = prompt("Qual modelo voce deseja visualizar? ");

    switch(opcao) {
        case "1":
            console.log("-- Fabricando jogo de chá I --");
            console.log("Estilo: Classico");
            montarJogo(new Jogo_Classico());
            break;
        case "2":
            console.log("-- Fabricando jogo de chá II --");
            console.log("Estilo: Moderno");
            montarJogo(new Jogo_Moderno());
            break;
        case "3":
            console.log("-- Fabricando jogo de chá III --");
            console.log("Estilo: Vintage");
            montarJogo(new Jogo_Vintage());
            break;
        case "0":
            console.log("Encerrando...");
            console.log("Obrigado por visitar nossa fabrica de jogos de cha!");
            break;
        default:
            console.log("Opção inválida!");
    }
}