export const pageURL = num => {
  const url = new URL('https://654391be01b5e279de2097c4.mockapi.io/adverts');
  url.searchParams.append('page', num);
  url.searchParams.append('limit', 12);
  return url;
};
