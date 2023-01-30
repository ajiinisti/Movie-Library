import { Field, ObjectType, InputType } from "type-graphql"

@ObjectType()
export class Actor {
    @Field()
    id!: number
    @Field()
    name!: string
    @Field()
    yearsactive!: number
}

@InputType()
export class ActorInput implements Pick<Actor, "name" | "yearsactive"> {
    @Field()
    name!: string
    @Field()
    yearsactive!: number
}