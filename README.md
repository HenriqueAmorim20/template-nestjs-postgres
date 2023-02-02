# [NOME_DO_PROJETO]

## AMBIENTES

### DEV

    $ docker-compose up

### TEST

- UNIT

	Com o container de desenvolvimento em execução, acesse o container com o comando:
	```bash
	$ docker-compose exec [NOME_DO_CONTAINER] bash
	```
	E execute os comandos de teste disponíveis no arquivo ***package.json***, por exemplo:
	```bash
	$ npm run test:watch
	```

	- Execução única
	Para apenas rodar os testes unitários e sair do container rode o comando abaixo:
		```bash
		$ TEST=unit docker-compose -f docker-compose.test.yml up --abort-on-container-exit --exit-code-from [NOME_DO_CONTAINER]
		```

- E2E

  Suba o container específico para testes e2e, através do comando:
	```bash
	$ docker-compose -f docker-compose.test.yml up
	```
	E execute os comandos de teste e2e disponíveis no arquivo ***package.json***, por exemplo:
	```bash
	$ npm run test:e2e:watch
	```
	- Execução única
	Para apenas rodar os testes e2e e sair do container rode o comando abaixo:
		```bash
		$ TEST=e2e docker-compose -f docker-compose.test.yml up --abort-on-container-exit --exit-code-from [NOME_DO_CONTAINER]
		```
