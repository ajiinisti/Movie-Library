import { Field, ObjectType, InputType } from "type-graphql"

@ObjectType()
export class Movie {
    @Field()
    id!: number
    @Field()
    name!: string
    @Field()
    releasedate!: number
}

@InputType()
export class MovieInput implements Pick<Movie, "name" | "releasedate"> {
    @Field()
    name!: string
    @Field()
    releasedate!: number
}