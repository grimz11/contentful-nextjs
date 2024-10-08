import React from 'react';
import Link from 'next/link';

import { ContentEntry, BookEntry, MovieEntry, ArticleEntry } from '@/lib/types';

interface ContentListProps {
	items: ContentEntry[];
}

const ContentList: React.FC<ContentListProps> = ({ items }) => {
	const renderContent = (item: ContentEntry) => {
		switch (item.sys.contentType.sys.id) {
			case 'books':
				return renderBook(item as BookEntry);
			case 'movies':
				return renderMovie(item as MovieEntry);
			case 'articles':
				return renderArticle(item as ArticleEntry);
			default:
				return <p>Unknown content type</p>;
		}
	};

	const renderBook = (book: BookEntry) => (
		<>
			<h2 className='text-xl font-semibold text-orange-600'>
				{book.fields.title}
			</h2>
			<p className='text-sm text-gray-600'>By: {book.fields.authors?.join(', ') || ''}</p>
			<p className='text-sm text-gray-600'>Genres: {book.fields.genres?.join(', ')}</p>
			<p className='text-sm text-gray-600'>
				Published: {new Date(book.fields.publicationDate).toLocaleDateString()}
			</p>
		</>
	);

	const renderMovie = (movie: MovieEntry) => (
		<>
			<h2 className='text-xl font-semibold text-orange-600'>
				{movie.fields.title}
			</h2>
			<p className='text-sm text-gray-600'>Directors: {movie.fields.directors?.join(', ')}</p>
			<p className='text-sm text-gray-600'>
				Actors: {movie.fields.actors?.join(', ')}
			</p>
			<p className='text-sm text-gray-600'>
				Released: {new Date(movie.fields.releaseDate).toLocaleDateString()}
			</p>
		</>
	);

	const renderArticle = (article: ArticleEntry) => (
		<>
			<h2 className='text-xl font-semibold text-orange-600'>
				{article.fields.title}
			</h2>
			<p className='text-sm text-gray-600'>By: {article.fields.authors?.join(', ')}</p>
			<p className='text-sm text-gray-600'>
				Published:{' '}
				{new Date(article.fields.publicationDate).toLocaleDateString()}
			</p>
			<p className='mt-2'>{article.fields?.summaries?.join(', ')}</p>
		</>
	);

	return (
		<div className='container mx-auto px-4 py-8'>
			<Link
				href='/'
				className='inline-block mb-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors'
			>
				← Back to Home
			</Link>
			<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				{items.map((item) => (
					<div
						key={item.sys.id}
						className='bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow'
					>
						<div className='mb-4'>
							{renderContent(item)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ContentList;
