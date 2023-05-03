import NavButton from '@/app/components/NavButton';
import { baseUrl } from '@/consts/base-url';

export const metadata = {
  title: `Description star wars film`,
};
const paragraphStyle = 'text-gray-700 text-base mb-2';

interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
}

const getFilm = async (filmId: string) => {
  const res = await fetch(`${baseUrl}films/${filmId}`);
  const data = await res.json();
  return data as Film;
};

const FilmDescriptionPage = async ({ params }: { params: { id: string } }) => {
  const film = await getFilm(params.id);
  return (
    <div className="flex">
      <div className="mx-auto mt-10">
        <div className="bg-slate-200 w-96 h-min-48 rounded shadow-lg text-center mt-3 p-2">
          <h2 className="font-bold text-xl mb-2">{film.title}</h2>
          <p className={paragraphStyle}>Episode: {film.episode_id}</p>
          <p className={paragraphStyle}>Opening: {film.opening_crawl}</p>
          <NavButton href={'/'} text={'Back'} />
        </div>
      </div>
    </div>
  );
};
export default FilmDescriptionPage;
