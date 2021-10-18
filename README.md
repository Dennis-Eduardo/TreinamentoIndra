**SOBRE O QUE É O PROJETO?**
========================================================================
O projeto teve como objetivo servir de base para o treinamento de "Formação Java/Angular para Jovens Profissionais", da Indra, unidade de João Pessoa, ministrado por Eder Ferreira (efmendes@indracompany.com) e Arthur Leony (aldantas@indracompany.com). Esse projeto consistia em uma API de um banco, onde realizamos o CRUD  de contas bancárias, como as transações.  A partir dessa base passada para nós alunos, conseguimos implementar novas coisas na API e assim finalizando o back-end do projeto. Na segunda parte do projeto a gente fez a coneção com o front-end do projeto. Onde construimos todas as telas de operações e deixamos funcionais.


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



#*Listagem de Clientes*

![Captura de tela 2021-10-18 133207](C:\Users\Denis\Desktop\Dennis E\Ciência da Computação\Captura de tela 2021-10-18 133207.png)



# *Listagem de Conta*



![Captura de tela 2021-10-18 133117](C:\Users\Denis\Desktop\Dennis E\Ciência da Computação\Captura de tela 2021-10-18 133117.png)



#*Página de Saque*



![Captura de tela 2021-10-18 133207](C:\Users\Denis\Desktop\Dennis E\Ciência da Computação\Captura de tela 2021-10-18 133207.png)



# Página de Depósito

![Captura de tela 2021-10-18 133237](C:\Users\Denis\Desktop\Dennis E\Ciência da Computação\Captura de tela 2021-10-18 133237.png)



# Página de Transferência

![Captura de tela 2021-10-18 133224](C:\Users\Denis\Desktop\Dennis E\Ciência da Computação\Captura de tela 2021-10-18 133224.png)

