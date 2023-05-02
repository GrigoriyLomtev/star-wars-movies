import FilmCard, { IFilmCard } from './components/FilmCard';

export interface Films {
  results: IFilmCard[];
}

async function getFilms() {
  const response = await fetch('https://swapi.dev/api/films/', {
    cache: 'no-cache',
  });
  const data = await response.json();
  return data as Films;
}

const Home = async () => {
  const films = await getFilms();

  if (!films) {
    return <div>Loading...</div>;
  }
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-2">
      <div className="w-full max-w-5xl items-center justify-between font-mono text-sm flex flex-col">
        {films.results.map(({ director, producer, release_date, title }, index) => (
          <FilmCard
            key={title}
            title={title}
            director={director}
            producer={producer}
            release_date={release_date}
            id={index + 1}
          />
        ))}
      </div>
    </main>
  );
};
export default Home;
