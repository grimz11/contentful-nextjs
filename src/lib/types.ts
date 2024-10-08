import { Entry, EntryFields } from 'contentful';

export interface BookFields {
  title: EntryFields.Text;
  authors: EntryFields.Text;
  genres: EntryFields.Text;
  publicationDate: EntryFields.Date;
}

export interface MovieFields {
  title: EntryFields.Text;
  directors: EntryFields.Array<EntryFields.Text>;
  actors: EntryFields.Array<EntryFields.Text>;
  releaseDate: EntryFields.Date;
}

export interface ArticleFields {
  title: EntryFields.Text;
  authors: EntryFields.Array<EntryFields.Text>;
  summaries: EntryFields.Array<EntryFields.Text>;
  publicationDate: EntryFields.Date;
}

export interface Book {
  fields: BookFields;
  contentTypeId: 'books';
}

export interface Movie {
  fields: MovieFields;
  contentTypeId: 'movies';
}

export interface Article {
  fields: ArticleFields;
  contentTypeId: 'articles';
}

export type BookEntry = Entry<Book>;
export type MovieEntry = Entry<Movie>;
export type ArticleEntry = Entry<Article>;

export type ContentEntry = BookEntry | MovieEntry | ArticleEntry;

export type ContentType = 'books' | 'movies' | 'articles';