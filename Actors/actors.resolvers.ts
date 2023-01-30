import { Query, Resolver, Mutation, Arg } from "type-graphql"
import { Actor, ActorInput } from "./actors.schema"

@Resolver(() => Actor)
export class ActorResolver {
    private Actor: Actor[] = [
        { id: 1, name: "John Doe", yearsactive: 2000},
        { id: 2, name: "Jane Doe", yearsactive: 2010},
        { id: 3, name: "Mike Doe", yearsactive: 2022},
    ]

    @Query(() => [Actor])
    async getActors(): Promise<Actor[]> {
        return this.Actor
    }

    @Query(() => Actor)
    async getActor(@Arg("id") id: number): Promise<Actor | undefined> {
        const Actor = this.Actor.find(u => u.id === id)
        return Actor
    }

    @Mutation(() => Actor)
    async createActor(@Arg("input") input: ActorInput): Promise<Actor> {
        const actor = {
            id: this.Actor[this.Actor.length-1].id + 1,
            ...input,
        }
        
        this.Actor.push(actor)
        return actor    
    }

    @Mutation(() => Actor)
    async deleteActor(@Arg("input") @Arg("id") id: number): Promise<Actor[]> {
        const index = this.Actor.findIndex(x => x.id === id);
        delete this.Actor[index]
        return this.Actor
    }

    @Mutation(() => Actor)
    async updateActor(
        @Arg("id") id: number,
        @Arg("input") input: ActorInput
    ): Promise<Actor> {
        const actor = this.Actor.find(u => u.id === id)
        
        if (!actor) {
            throw new Error("Actor not found")
        }

        const updatedActor = {
            ...actor,
            ...input,
        }

        this.Actor = this.Actor.map(u => (u.id === id ? updatedActor : u))

        return updatedActor
    }
}