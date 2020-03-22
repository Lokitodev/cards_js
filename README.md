# Card_js

[![GitHub license](https://img.shields.io/github/license/Lokitodev/cards_js.svg)](https://github.com/Lokitodev/cards_js/blob/master/LICENSE) [![GitHub release](https://img.shields.io/github/release/Lokitodev/cards_js.svg)](https://GitHub.com/Lokitodev/cards_js/releases/) [![Github all releases](https://img.shields.io/github/downloads/Lokitodev/cards_js/total.svg)](https://GitHub.com/Lokitodev/cards_js/releases/)
[![GitHub forks](https://img.shields.io/github/forks/Lokitodev/cards_js.svg?style=social&label=Fork&maxAge=2592000)](https://GitHub.com/Lokitodev/cards_js/network/) [![GitHub stars](https://img.shields.io/github/stars/Lokitodev/cards_js.svg?style=social&label=Star&maxAge=2592000)](https://GitHub.com/Lokitodev/cards_js/stargazers/) [![GitHub watchers](https://img.shields.io/github/watchers/Lokitodev/cards_js.svg?style=social&label=Watch&maxAge=2592000)](https://GitHub.com/Lokitodev/cards_js/watchers/) [![GitHub followers](https://img.shields.io/github/followers/Naereen.svg?style=social&label=Follow&maxAge=2592000)](https://github.com/Lokitodev?tab=followers)

O projeto card_js tem como foco melhorar a visualização de formulários com o foco nas bandeiras aceitas pelo **Pagseguro!** 😱

### Tecnologia utilizada

Para atingir o objetivo de deixar a interface gráfica mais legal, essas foram as tecnologias utilizadas:

* [Card.js](https://github.com/jessepollak/card) - Biblioteca base do projeto.
* [Bootstrap](https://getbootstrap.com/) - Framework de CSS utilizada na demonstração do projeto.
* [Jquery](https://jquery.com/) - Framework de Javascript utilizada na demonstração do projeto.
* [JQuery Validate](https://jqueryvalidation.org/) - Utilizado como validação na demonstração do projeto.
* [Unsplash Source](https://source.unsplash.com/) - Imagens utilizadas no como plano de fundo do cartão.
* [Hero Patterns](https://www.heropatterns.com/) - Padrões utilizadas no como plano de fundo do cartão.
* [Dillinger](https://dillinger.io/) - Utilizado para criar este exato README que está lendo 🤩


### Instalação

Todos os arquivos necessários estão na pasta "dist/" do repositório 😉

```html
<link rel="stylesheet" href="vendor/card.css">
<link rel="stylesheet" href="cartao.css" />
<script src="vendor/card.js"></script>
```

e para iniciar o cartão no javascript você precisa ter isso instanciado no seu projeto:

```html
<div class="card-wrapper"></div>
<form>
    <input required placeholder="Número do cartão" type="text" name="numero_cartao" id="numero_cartao" />
    <input required placeholder="Nome completo" type="text" name="nome_cartao" id="nome_cartao" />
    <input required placeholder="Data de expiração" type="text" name="expiracao_cartao" id="expiracao_cartao" />
    <input required placeholder="CVC" type="text" name="cvc_cartao" id="cvc_cartao" />
</form>
```

e no javascript:

```javascript
var card = new Card({
    form: 'form',
    container: '.card-wrapper',
    formSelectors: {
        numberInput: 'input#numero_cartao',
        expiryInput: 'input#expiracao_cartao',
        cvcInput: 'input#cvc_cartao',
        nameInput: 'input#nome_cartao'
    },
    width: 400,
    formatting: true,
    messages: {
        validDate: 'valido\naté',
        monthYear: 'mes / ano',
    },
    placeholders: {
        number: '•••• •••• •••• ••••',
        name: 'Nome Completo',
        expiry: '••/••',
        cvc: '•••'
    },
    debug: false
});
```

### Cartões e bandeiras para testes

Bandeiras suportadas e os padrões que utilizei para testes/desenvolvimento.

| Bandeira |Número do cartão|
| ------ | ------ |
| Mastercard | 5555666677778884 |
| Visa | 4012001037141112 |
| Elo | 6362970000457013 |
| American Express | 376449047333005 |
| Hipercard | 6062824762285745 |
| Diners Club | 36490102462661 |
| Cabal | 6042001234567890 |
| Grandcard | 6050329990211823 |
| Sorocred | 6278920100000000 |
| Banesecard | 6361170000000000 |


### Todo

 - Traduzir para o projeto para outras stacks.

Licença
----

MIT


[![ForTheBadge built-with-love](http://ForTheBadge.com/images/badges/built-with-love.svg)](https://GitHub.com/Lokitodev/)
