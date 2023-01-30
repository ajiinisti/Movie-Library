import { Field, ObjectType, InputType } from "type-graphql"

@ObjectType()
export class Author {
    @Field()
    id!: number
    @Field()
    name!: string
}

@InputType()
export class AuthorInput implements Pick<Author, "name"> {
    @Field()
    name!: string
}