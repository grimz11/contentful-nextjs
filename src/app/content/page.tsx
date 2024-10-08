import { Suspense } from 'react';

import ContentList from '@/app/components/ContentList';
import Pagination from '@/app/components/Pagination';
import ErrorBoundary from '@/app/components/ErrorBoundary';
import { ContentType } from '@/lib/types';
import { getEntries } from '../api/content/route';

export default async function ContentListPage({
	params,
	searchParams
}: {
	params: { type: ContentType };
	searchParams: { page: string; type: ContentType };
}) {
	const page = Number(searchParams.page) || 1;
  const contentType = params.type || searchParams.type || 'books';
	const { items, total } = await getEntries(searchParams.type, page);
	const contentTypeNames = {
		books: 'Books',
		movies: 'Movies',
		articles: 'Articles'
	};

	return (
		<div className='bg-gray-100 min-h-screen'>
			<div className='container mx-auto px-4 py-8'>
				<h1 className='text-3xl font-bold mb-6'>
					{(contentTypeNames[searchParams.type] || params.type || 'Content') +
						' List'}
				</h1>
				<ErrorBoundary>
					<Suspense fallback={<div>Loading...</div>}>
						<ContentList items={items} />
					</Suspense>
				</ErrorBoundary>
        <Pagination currentPage={page} totalItems={total} contentType={contentType} />
			</div>
		</div>
	);
}
