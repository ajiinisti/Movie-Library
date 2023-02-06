# Movie-Library
![example workflow](https://github.com/ajiinisti/Movie-Library/actions/workflows/node.js.yml/badge.svg)
![example workflow](https://github.com/ajiinisti/Movie-Library/actions/workflows/test.js.yml/badge.svg)
![example workflow](https://github.com/ajiinisti/Movie-Library/actions/workflows/deploy.js.yml/badge.svg)

Description:
This is backend services to provide API call about Movies Library. There are 2 route for accessing the web aplication. The first one is for the graphql and the second is graphiql. The differences is you can use graphql user interface for calling api when you use graphiql. 

[Link for Graphql](https://movie-library-production-8d67.up.railway.app/graphql)                      
[Link for Graphiql](https://movie-library-production-8d67.up.railway.app/graphiql)

## Databases

In the movie library there are 3 main table that we can use. **Actors**, **Authors** and **Movies**. The relationship for the table are Actor has many to many relationship to Movies and Movies has many to many relationship to Author. Because of the m2m rationship, there are another table formed from this. **Writes** is table when relationship between Author and Movie created. **Play** is table when relationship between Actor and Movie created.

## How to Use the Graphql

There are several query and mutation that you can use for this web application. The difference between function for all table is the input. THe example of how to query or insert into the database can be see below.

### Actor
getActors : 
```graphql 
{
    getActors{
        id
        name
        activeyear
        sex
    }
}
```
getActor : 
```graphql
{
    getActor(id:"6219c48b-ab7c-4467-ab21-b7c5ea540612") {
        id
        name
        activeyear
        sex
    }
}
```
createActor : 
```graphql
mutation{
    createActor(name:"Matt Damon" ,sex:"M" ,activeyear:1987){
        id
        name
        sex
        activeyear
    }
}
```
updateActor : 
```graphql
mutation{
    updateActor(id:"56cab785-ecd2-4d29-bd3e-1a514073a456",name:"Matt D." ,sex:"M" ,activeyear:1987){
        id
        name
        sex
        activeyear
    }
}
```
deleteActor : 
```graphql
mutation{
    deleteActor(id:"56cab785-ecd2-4d29-bd3e-1a514073a456"){
        id
        name
        sex
        activeyear
    }
}
```
For the Actor, because we already define the m2m relationship we can get movie who played by the author

### Author
getAuthors : 
```graphql
{
    getAuthors{
        id
        name
        sex
    }
}
```
getAuthor : 
```graphql
{
    getAuthor(id:"2075ab80-e7c0-4a10-a39e-0c120159d1b5") {
        id
        name
        sex
    }
}
```
createAuthor : 
```graphql
mutation{
    createAuthor(name:"Stephen King" ,sex:"M"){
        id
        name
        sex
  }
}
```
updateAuthor : 
```graphql
mutation{
    updateAuthor(id:"2075ab80-e7c0-4a10-a39e-0c120159d1b5",name:"Stephen K" ,sex:"M"){
        id
        name
        sex
    }
}
```
deleteAuthor : 
```
graphqlmutation{
    deleteAuthor(id:"2075ab80-e7c0-4a10-a39e-0c120159d1b5"){
        id
        name
        sex
    }
}
```

For the Author, because we already define the m2m relationship we can get movie who get wrote by the author

### Movies
getMovies : 
```graphql
{
    getMovies{
        id
        title
        releaseyear
        rating
        genre
    }
}
```
getMovie : 
```graphql
{
    getMovie(id:"25c8d1d1-a599-48ce-84f0-6a04f0da8751"){
        id
        title
        releaseyear
        rating
        genre
    } 
}
```
createMovie : 
```graphql
mutation{
    createMovie(title:"Harry Potter and the Sorcerer's Stone" ,releaseyear:2000, rating:7.6 , genre:"Fantasy"){
        id
        title
        releaseyear
        rating
        genre
    }
}
```
updateMovie : 
```graphql
mutation{
    updateMovie(id:"525c8d1d1-a599-48ce-84f0-6a04f0da8751",title:"Harry Potter and the Sorcerer's Stone", releaseyear:2001, rating:7.6, genre:"Fantasy"){
        id
        title
        releaseyear
        rating
        genre
    }
}
```
deleteMovie : 
```graphql
mutation{
    deleteMovie(id:"25c8d1d1-a599-48ce-84f0-6a04f0da8751"){
        id
        title
        releaseyear
        rating
        genre
    }
}
```
updateAuthorInMovie:
```graphql
mutation{
    updateAuthorInMovie(movieId:"25c8d1d1-a599-48ce-84f0-6a04f0da8751",actorId:"56cab785-ecd2-4d29-bd3e-1a514073a456"){
        id
        title
        releaseyear
        rating
        genre
    }
}
```
updateActorInMovie:
```graphql
mutation{
    updateActorInMovie(movieId:"25c8d1d1-a599-48ce-84f0-6a04f0da8751",authorId:"2075ab80-e7c0-4a10-a39e-0c120159d1b5"){
        id
        title
        releaseyear
        rating
        genre
    }
}
```


For the movies, because we already define the m2m relationship we can get the actors and authors from the movie

## Tech Stacks

<img src="https://img.shields.io/badge/GraphQl-E10098?style=for-the-badge&logo=graphql&logoColor=white"/><img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"/><img src="https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white"/><img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white"/><img src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/><img src="https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white" />
