# atividade1-web


Criar um protótipo funcional de uma tela de cadastro de mercadorias em
um mini-mercado, com os campos:

Nome do item (texto, tamanho máximo: 50 caracteres, comprimento: 60
caracteres);

Descrição do item (textarea, largura: 5 linhas, comprimento: 60 caracteres);

Preço (texto, numérico. Validar se está preenchido ao sair do campo.)

Dois botões (Submit e Reset);

Criar uma função, com uma chamada AJAX, de acordo com o valor do preço:

Caso seja maior que 20, carregar o conteúdo de um arquivo texto (ou uma outra
página HTML) em uma div com id “textoAjax”;

Caso seja menor que 20, apresentar um alert com texto “Preço menor que 20”.
