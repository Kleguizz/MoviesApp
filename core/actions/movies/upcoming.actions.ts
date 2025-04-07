import { movieApi } from "@/core/api/movie-api";
import { MovieDBMoviesResponde } from "@/infrastructure/interfaces/moviedb-response";
import { MovieMapper } from "@/infrastructure/mappers/movie.mapper";

export const upcomningMoviesActions = async () => {
  try {
    const { data } = await movieApi.get<MovieDBMoviesResponde>("/upcoming");

    // console.log(JSON.stringify(data, null, 2));

    const movies = data.results.map(MovieMapper.fromTheMovieDBToMovie);

    return movies;
  } catch (error) {
    console.log(error);
    throw "Cannot load top rated movies";
  }
};
