import MainSlides from "@/presentation/components/movies/MainSlides";
import MovieHorizontalList from "@/presentation/components/movies/MovieHorizontalList";

import { useMovies } from "@/presentation/hooks/useMoviews";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";

import { useSafeAreaInsets } from "react-native-safe-area-context";

const HomeScreen = () => {
  const safeArea = useSafeAreaInsets();
  const { nowPlayingQuery, popularQuery, topRatedQuery, upcomingQuery } =
    useMovies();

  if (nowPlayingQuery.isLoading) {
    return (
      <View className="justify-center items-center flex-1">
        <ActivityIndicator color="purple" size={30} />
      </View>
    );
  }

  return (
    <ScrollView>
      <View className="mt-2 pb-10" style={{ paddingTop: safeArea.top }}>
        <Text className="text-3xl font-bold px-4 mb-2">Movies App</Text>
        {/* Carousel de imagenes */}
        <MainSlides movies={nowPlayingQuery.data ?? []} />

        {/* Peliculas populares */}
        <MovieHorizontalList
          title="Populares"
          movies={popularQuery.data ?? []}
          className="mb-5"
        />

        {/* Peliculas mejor valoradas */}
        <MovieHorizontalList
          title="Mejor valoradas"
          movies={topRatedQuery.data ?? []}
          className="mb-5"
        />

        {/* Proximamente */}
        <MovieHorizontalList
          title="Próximamente"
          movies={upcomingQuery.data ?? []}
          className="mb-5"
        />
        <MovieHorizontalList
          title="Otros"
          movies={upcomingQuery.data ?? []}
          className="mb-5"
        />
        <MovieHorizontalList
          movies={upcomingQuery.data ?? []}
          className="mb-5"
        />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
