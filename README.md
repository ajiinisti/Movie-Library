# Movie-Library
<img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" />![example workflow](https://github.com/ajiinisti/Movie-Library/actions/workflows/node.js.yml/badge.svg)
<img src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white" />![example workflow](https://github.com/ajiinisti/Movie-Library/actions/workflows/test.js.yml/badge.svg)
<img src="https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white" /> ![example workflow](https://github.com/ajiinisti/Movie-Library/actions/workflows/deploy.js.yml/badge.svg)

Description:
This is backend services to provide API call about Movies Library. There are 2 route for accessing the web aplication. The first one is for the graphql and the second is graphiql. The differences is you can use graphql user interface for calling api when you use graphiql. 

[Link for Graphql](https://link-url-here.org)[Link for Graphiql](https://link-url-here.org)

## Databases

In the movie library there are 3 main table that we can use. Actor, Author and Movies. The relationship for the table are Actor has many to many relationship to Movies and Movies has many to many relationship to Author. Because of the m2m rationship, there are another table formed from this. Write is table when relationship between Author and Movie created and Play is table when relationship between Actor and Movie created.

## How to Use

There are several query and mutation that you can use for this web application. The difference between function for all table is the input. How to query or insert into the database can be see below.

### Actor
getActors : 
`{
    getActors{
        id
        name
        activeyear
        sex
    }
}`

getActor : 
`{
    getActor(id:"6219c48b-ab7c-4467-ab21-b7c5ea540612") {
        id
        name
        activeyear
        sex
    }
}
`
createActor : 
`mutation{
  createActor(name:"Matt Damon" ,sex:"M" ,activeyear:1987){
  	id
    name
    sex
    activeyear
  }
}`

updateActor : 
`mutation{
  updateActor(id:"56cab785-ecd2-4d29-bd3e-1a514073a456",name:"Matt D." ,sex:"M" ,activeyear:1987){
  	id
    name
    sex
    activeyear
  }
}`

deleteActor : 
`mutation{
    deleteActor(id:"56cab785-ecd2-4d29-bd3e-1a514073a456"){
        id
        name
        sex
        activeyear
    }
}`

For the Actor, because we already define the m2m relationship we can get movie who played by the author

### Author
getAuthors : 
`{
    getAuthors{
        id
        name
        sex
    }
}`
getAuthor : 
`{
    getAuthor(id:"6219c48b-ab7c-4467-ab21-b7c5ea540612") {
        id
        name
        sex
    }
}
`
createAuthor : 
`mutation{
  createAuthor(name:"Stephen King" ,sex:"M"){
  	id
    name
    sex
  }
}`

updateAuthor : 
`mutation{
  updateAuthor(id:"56cab785-ecd2-4d29-bd3e-1a514073a456",name:"Stephen K" ,sex:"M"){
  	id
    name
    sex
  }
}`

deleteAuthor : 
`mutation{
    deleteAuthor(id:"56cab785-ecd2-4d29-bd3e-1a514073a456"){
        id
        name
        sex
    }
}`

For the Author, because we already define the m2m relationship we can get movie who get wrote by the author

### Movies
getMovies : 
`{
    getMovies{
        id
        title
        releaseyear
        rating
        genre
    }
}`
getMovie : 
`{
    getMovie(id:"25c8d1d1-a599-48ce-84f0-6a04f0da8751"){
        id
        title
        releaseyear
        rating
        genre
    } 
}`
createMovie : 
`mutation{
    createMovie(title:"Harry Potter and the Sorcerer's Stone" ,releaseyear:2000, rating:7.6 , genre:"Fantasy"){
        id
        title
        releaseyear
        rating
        genre
    }
}`

updateMovie : 
`mutation{
    updateMovie(id:"525c8d1d1-a599-48ce-84f0-6a04f0da8751",title:"Harry Potter and the Sorcerer's Stone", releaseyear:2001, rating:7.6, genre:"Fantasy"){
        id
        title
        releaseyear
        rating
        genre
    }
}`

deleteMovie : 
`mutation{
    deleteMovie(id:"25c8d1d1-a599-48ce-84f0-6a04f0da8751"){
        id
        title
        releaseyear
        rating
        genre
    }
}`

For the movies, because we already define the m2m relationship we can get the actors and authors from the movie

## Tech Stacks

<img src="https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white"/><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/><img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"/><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/><img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/><img src="https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white" />