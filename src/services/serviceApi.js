import allGenres from 'services/moviesApi/genres.json';

export const getGenres = ids => {
  const fixedNumberIds = ids.slice(0, 3);
  const genres = fixedNumberIds.map(id => {
    const [{ name }] = allGenres.genres.filter(genre => genre.id === id);
    return name;
  });
  if (genres.length === 3) {
    return genres.slice(0, 2).join(', ') + ', Other';
  }
  return genres.join(', ');
};

export const getYear = date => date.slice(0, 4);

export const normalizeTitle = title => {
  if (title.length > 34) {
    return title.slice(0, 31) + '...';
  }
  return title;
};
