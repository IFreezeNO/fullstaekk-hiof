import { render, screen } from '@testing-library/react';
import App from './App';

import React from 'react';
import RetApi from './component/retrievedData';

const data = [{ "Title": "Flåklypa Grand Prix", "Year": "1975", "imdbID": "tt0073000", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BYzdkNjZmZWEtMzVmNi00Y2YwLWEyZDQtMzBlMDc2ZDlkNGFlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg" }, { "Title": "Solan og Ludvig - Jul i Flåklypa", "Year": "2013", "imdbID": "tt2769896", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BMjIxOTAwMjQwOF5BMl5BanBnXkFtZTgwMTQ5MDkzMzE@._V1_SX300.jpg" }, { "Title": "Solan og Ludvig: Herfra til Flåklypa", "Year": "2015", "imdbID": "tt4970552", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BNjgwYjNlMWEtOTUwMS00ZWQyLWE2ZDAtNWZjZTgzNThkNzliXkEyXkFqcGdeQXVyNTI5NjIyMw@@._V1_SX300.jpg" }, { "Title": "Månelyst i Flåklypa", "Year": "2018", "imdbID": "tt7533756", "Type": "movie", "Poster": "https://m.media-amazon.com/images/M/MV5BM2M3Mzg4NmUtYjQ5Mi00ZTdlLTk5MzUtZDU0NmNiYTJlZGI2XkEyXkFqcGdeQXVyNjk4MzY1MTk@._V1_SX300.jpg" }, { "Title": "Flåklypa Grand Prix", "Year": "2000", "imdbID": "tt0271509", "Type": "game", "Poster": "N/A" }];


 //tester 
test('Sjekker om riktig film vises', () => {
  render(<RetApi data={data} />);
  let forstelinje = document.querySelector("li:nth-child(1)")
  expect(forstelinje).toHaveTextContent("Flåklypa Grand Prix");

});

it('Validerer promise med fetching', async () => {
  const response =  await fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=fb108aae&s=fl%C3%A5klypa`);
  try {
    const retrievedUrlData = await response.json();
    const promise = retrievedUrlData.length;
    const verdi = await promise
    expect(verdi).toBe(5)
  } catch (error) {}
})

test('Antall riktige filmer vises', () => {
  render(<RetApi data={data} />);

  let forstelinje = document.querySelector("p")
  expect(forstelinje).toHaveTextContent("Det er 5 filmer i objektet.");

});


test('Sjekker om det er en h1 tag på siden', () => {
  render(<App />);
  const linkElement = document.querySelector('h1');
  expect(linkElement).toBeInTheDocument();
});
