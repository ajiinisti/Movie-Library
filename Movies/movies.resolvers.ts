import { Query, Resolver, Mutation, Arg } from "type-graphql"
import { Movie, MovieInput } from "./movies.schema"

@Resolver(() => Movie)
export class MovieResolver {
    private Movie: Movie[] = [
        { id: 1, name: "John Doe", releasedate: 2000},
        { id: 2, name: "Jane Doe", releasedate: 2010},
        { id: 3, name: "Mike Doe", releasedate: 2022},
    ]

    @Query(() => [Movie])
    async getMovies(): Promise<Movie[]> {
        return this.Movie
    }

    @Query(() => Movie)
    async getMovie(@Arg("id") id: number): Promise<Movie | undefined> {
        const Movie = this.Movie.find(u => u.id === id)
        return Movie
    }

    @Mutation(() => Movie)
    async createMovie(@Arg("input") input: MovieInput): Promise<Movie> {
        const movie = {
            id: this.Movie.length + 1,
            ...input,
        }
        
        this.Movie.push(movie)
        return movie
    }

    @Mutation(() => Movie)
    async deleteMovie(@Arg("input") @Arg("id") id: number): Promise<Movie[]> {
        const index = this.Movie.findIndex(x => x.id === id);
        delete this.Movie[index]
        return this.Movie
    }

    @Mutation(() => Movie)
    async updateMovie(
        @Arg("id") id: number,
        @Arg("input") input: MovieInput
    ): Promise<Movie> {
        const movie = this.Movie.find(u => u.id === id)
        
        if (!movie) {
            throw new Error("Movie not found")
        }

        const updatedMovie = {
            ...movie,
            ...input,
        }

        this.Movie = this.Movie.map(u => (u.id === id ? updatedMovie : u))

        return updatedMovie
    }
}