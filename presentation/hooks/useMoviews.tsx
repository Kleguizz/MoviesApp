import { nowPLayingActions } from "@/core/actions/movies/now-playing.actions";
import { popularMoviesActions } from "@/core/actions/movies/popular.actions";
import { topRatedActions } from "@/core/actions/movies/topRated.actions";
import { upcomningMoviesActions } from "@/core/actions/movies/upcoming.actions";
import { useQuery } from "@tanstack/react-query";

export const useMovies = () => {
  const nowPlayingQuery = useQuery({
    queryKey: ["movies", "now-playing"],
    queryFn: nowPLayingActions,
    staleTime: 1000 * 60 * 60 * 24, // la data permanece 24 horas en cache
  });

  const popularQuery = useQuery({
    queryKey: ["movies", "popular"],
    queryFn: popularMoviesActions,
    staleTime: 1000 * 60 * 60 * 24, // la data permanece 24 horas en cache
  });

  const topRatedQuery = useQuery({
    queryKey: ["movies", "top-rated"],
    queryFn: topRatedActions,
    staleTime: 1000 * 60 * 60 * 24, // la data permanece 24 horas en cache
  });
  const upcomingQuery = useQuery({
    queryKey: ["movies", "upcoming"],
    queryFn: upcomningMoviesActions,
    staleTime: 1000 * 60 * 60 * 24, // la data permanece 24 horas en cache
  });

  return {
    nowPlayingQuery,
    popularQuery,
    topRatedQuery,
    upcomingQuery,
  };
};
