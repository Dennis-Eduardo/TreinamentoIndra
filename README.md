**SOBRE O QUE É O PROJETO?**
========================================================================
O projeto teve como objetivo servir de base para o treinamento de "Formação Java/Angular para Jovens Profissionais", da Indra, unidade de João Pessoa, ministrado por Eder Ferreira (efmendes@indracompany.com) e Rafael Ferreira(rferreiraa@indracompany.com).  Esse projeto consistia em uma API de um banco, onde realizamos o CRUD  de contas bancárias, como as transações.  A partir dessa base passada para nós alunos, conseguimos implementar novas coisas na API e assim finalizando o back-end do projeto. Na segunda parte do projeto a gente fez a conexão com o front-end do projeto. Onde construimos todas as telas de operações e deixamos funcionais usando tecnologias como: Angular, Bootstrap, Node, FontAwesome e SweetAlert2.


**Conteúdo do Treinamento**

- Git
- Lombok 
- Criando um projeto Spring 
- Maven 
- Spring Boot 
- Api (Rest)
- Swagger 
- JPA (Hibernate) 
- Spring Data 
- MySQL
- Angular
- Bootstrap
- Node
- FontAwesome
- SweetAlert2


**COMO CONSTRUIR O AMBIENTE**
========================================================================

Baixar e instalar o Lombok na sua IDE em https://projectlombok.org/download.
Acessar o diretório onde o lombok.jar foi baixado e executar no terminal: java -jar lombok.jar.
Na janela de instalação, especificar o caminho onde se encontra sua IDE e concluir a instalação.

Caso não consiga instalar através da interface, copiar o lombok.jar para o diretório do eclipse e editar o arquivo eclipse.ini e incluir a linha abaixo no final do arquivo:

-javaagent:/DIRETÓRIO_QUE_VOCE_COPIOU_O_LOMBOK.JAR/lombok.jar

**Back-End**

	Primeiramente deve-se clonar o repositório no endereço:

	https://github.com/efmendes/treinamento_202109.git

	Após o projeto ser clonado, abra o terminal no diretório clonado **treinamento**
	e utilize os seguintes comandos:


	mvn install
	../treinamento-controller/target
	java -jar treinamento.war


**É de suma importância aguardar a execução dos comandos acima citados.**

========================================================================


Para acesso à sua API desenvolvida, utilize o endereço: http://localhost:8080/treinamento




Voce pode desenvolver utilizando os recursos abaixo:
========================================================================
- Java 11
- Maven

Imagem do projeto
========================================================================



# Listagem de Clientes

![web](https://github.com/Dennis-Eduardo/TreinamentoIndra/blob/main/imagens/L.%20clientes.png)



# Listagem de Conta



![web](https://github.com/Dennis-Eduardo/TreinamentoIndra/blob/main/imagens/L.contas.png)



# Página de Saque

![web](https://github.com/Dennis-Eduardo/TreinamentoIndra/blob/main/imagens/saque.png)





# Página de Depósito

![web](https://github.com/Dennis-Eduardo/TreinamentoIndra/blob/main/imagens/deposito.png)



# Página de Transferência

![web](https://github.com/Dennis-Eduardo/TreinamentoIndra/blob/main/imagens/transferencia.png)

