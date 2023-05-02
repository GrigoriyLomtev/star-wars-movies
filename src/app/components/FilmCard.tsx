import NavButton from './NavButton';

const paragraphStyle = 'text-gray-700 text-base mb-2';

export interface IFilmCard {
  title: string;
  director: string;
  producer: string;
  release_date: string;
  id: number;
}

const FilmCard = ({ director, producer, release_date, title, id }: IFilmCard) => {
  return (
    <div className="bg-slate-200 w-96 h-min-48 rounded shadow-lg text-center mt-6 p-2">
      <h2 className="font-bold text-xl mb-2">{title}</h2>
      <p className={paragraphStyle}>Director: {director}</p>
      <p className={paragraphStyle}>Producer: {producer}</p>
      <p className={`${paragraphStyle} `}>Release Date: {release_date}</p>
      <NavButton href={`films/${id}`} text={'Description'} />
    </div>
  );
};

export default FilmCard;
