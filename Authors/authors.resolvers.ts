import { Query, Resolver, Mutation, Arg } from "type-graphql"
import { Author, AuthorInput } from "./authors.schema"

@Resolver(() => Author)
export class AuthorResolver {
    private Author: Author[] = [
        { id: 1, name: "Aji Doe"},
        { id: 2, name: "Jane Wijaya"},
        { id: 3, name: "Udma Inisti Doe"},
    ]

    @Query(() => [Author])
    async getAuthors(): Promise<Author[]> {
        return this.Author
    }

    @Query(() => Author)
    async getAuthor(@Arg("id") id: number): Promise<Author | undefined> {
        const Author = this.Author.find(u => u.id === id)
        return Author
    }

    @Mutation(() => Author)
    async createAuthor(@Arg("input") input: AuthorInput): Promise<Author> {
        const author = {
            id: this.Author.length + 1,
            ...input,
        }
        
        this.Author.push(author)
        return author
    }

    @Mutation(() => Author)
    async deleteAuthor(@Arg("input") @Arg("id") id: number): Promise<Author[]> {
        const index = this.Author.findIndex(x => x.id === id);
        delete this.Author[index]
        return this.Author
    }

    @Mutation(() => Author)
    async updateAuthor(
        @Arg("id") id: number,
        @Arg("input") input: AuthorInput
    ): Promise<Author> {
        const author = this.Author.find(u => u.id === id)
        
        if (!author) {
            throw new Error("Author not found")
        }

        const updatedAuthor = {
            ...author,
            ...input,
        }

        this.Author = this.Author.map(u => (u.id === id ? updatedAuthor : u))

        return updatedAuthor
    }
}