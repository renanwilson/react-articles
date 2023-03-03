# React Challenge 20201113

## Introdução

Este é um desafio para testar seus conhecimentos em JavaScript e React;

Neste desafio existem várias formas de desenvolver com qualidade e reuso de elemento do projeto.

O objetivo é avaliar a sua forma de estruturação e autonomia em decisões para construir algo escalável.

### Antes de começar

- Prepare o projeto para ser disponibilizado no Github, copiando o conteúdo deste repositório para o seu (ou utilize o fork do projeto e aponte para o Github). Confirme que a visibilidade do projeto é pública (não esqueça de colocar no readme a referência a este challenge);
- O projeto deve utilizar a Linguagem específica na sua Vaga (caso esteja se candidatando). Por exempo: Python, R, Scala e entre outras;
- Considere como deadline 5 dias a partir do início do desafio. Caso tenha sido convidado a realizar o teste e não seja possível concluir dentro deste período, avise a pessoa que o convidou para receber instruções sobre o que fazer.
- Documentar todo o processo de investigação para o desenvolvimento da atividade (README.md no seu repositório); os resultados destas tarefas são tão importantes do que o seu processo de pensamento e decisões à medida que as completa, por isso tente documentar e apresentar os seus hipóteses e decisões na medida do possível.

## Desafio / Case

Os sites do cliente Translation, Inc impactam milhões de pessoas mensalmente em diversos países e disponíveis em pelo menos 23 idiomas.
Uma das principais características da Translation, Inc é o posicionamento orgânico no Google (SEO).
Por isso, todos os projetos devem ser muito bem estruturados pensando em SEO, fluidez, reuso (componentes reutilizados em vários projetos) e velocidade de exibição mensurados através do Google PageSpeed (https://developers.google.com/speed/pagespeed/insights/).
O seu objetivo é criar um projeto que dê atenção aos requisitos anteriormente mencionados.

## Recursos

1. Verificar a documentação: https://developer.wordpress.org/rest-api/
2. Consumir a REST API Wordpress do Mejor Con Salud: https://api.beta.mejorconsalud.com/wp-json/mc/v1/
3. O seu ambiente local rodando na porta 9045 (localhost:9045)
4. Webpack
5. React.js
6. Tailwind CSS: https://tailwindcss.com/ (poderá definir outro se achar mais conveniente).

## Passo a Passo

### Home Page

Ao abrir a Home deverá conter um buscador de artigos para facilitar aos usuários encontrarem conteúdos personalizados sobre saúde e nutrição.
Deverá ser possível filtrar os artigos por: "Mais Relevantes" no topo.

Para isso, devemos usar o endpoint de busca:

- https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts?search={{text digitado no input}}
- https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts?search={{text digitado no input}}&page=1&orderby=relevance

> Exemplo https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts?search=calabazas
> Exemplo https://api.beta.mejorconsalud.com/wp-json/mc/v2/posts?search=calabazas&page=1&orderby=relevance

Exemplo de um resposta com artigos:

```
{
"data": [...],
"size": 62,
"pages": 7
}
```

Resposta sem dados:

```
{
"data": [],
"size": 0,
"pages": 0
}
```

Ao ter o resultado é necessário adicionar alguns elementos importantes como:

- A páginação para navegar entre os resultados
- Buscador para realizar a busca novamente
- Adicionar a quantidade de elementos encontrados
- Tratar o resultado sem artigos (Mensagem: "Não existem artigos relacionados ao termo pesquisado!")

### Tela do Single

Após pesquisar, deverá ser possível abrir o artigo. Para isso precisamos de uma tela para exibir o conteúdo do artigo.

Na página do single de um artigo deverá conter alguns elementos básicos: título, categoria, data de publicação, conteúdo(texto para leitura), tags, biografias e nome do autor.

> Exemplo de uma página completa: https://mejorconsalud.com/4-formas-de-preparar-banos-para-suavizar-los-pies/

Para obter a informação por artigo, consumir o endpoint: [GET] baseURL/wp-json/mc/v1/posts/{{ID}}

> Exemplo: [GET] https://api.beta.mejorconsalud.com/wp-json/mc/v1/posts/406721

### Detalhes Gerais do projeto:

- Usar Conceitos de Componentização.
- Usar os conceitos do `Dynamic Import` nos componentes;
- Adicionar recursos para trabalhar com meta-tags, keywords e og:tags na configuração do Server Side Rendering;
- **Configurar a página individual do artigo com as tags essenciais de SEO**;

## Readme do Repositório

- Deve conter o título de cada projeto
- Uma descrição de uma frase
- Como instalar e usar o projeto (instruções)
- Não esqueça o [.gitignore](https://www.toptal.com/developers/gitignore)

## Finalização

Avisar sobre a finalização e enviar para correção em: [https://coodesh.com/review-challenge](https://coodesh.com/review-challenge)
Após essa etapa será marcado a apresentação/correção do projeto.

## Instruções para a Apresentação:

1. Será necessário compartilhar a tela durante a vídeo chamada;
2. Deixe todos os projetos de solução previamente abertos em seu computador antes de iniciar a chamada;
3. Deixe os ambientes configurados e prontos para rodar;
4. Prepara-se pois você será questionado sobre cada etapa e decisão do Challenge;
5. Prepare uma lista de perguntas, dúvidas, sugestões de melhorias e feedbacks (caso tenha).

## Suporte

Use a [nossa comunidade](https://coodesh.com/desenvolvedores#community) para tirar dúvidas sobre o processo ou envie um e-mail para contato@coodesh.com.
