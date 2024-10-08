import Link from 'next/link';

interface PaginationProps {
  currentPage: number;
  totalItems: number;
  itemsPerPage?: number;
  contentType: string;
}

const Pagination: React.FC<PaginationProps> = ({ 
  currentPage, 
  totalItems, 
  itemsPerPage = 10,
  contentType
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className="flex justify-center space-x-2 mt-4">
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
        <Link
          key={page}
          href={`/content?type=${contentType}&page=${page}`}
          className={`px-3 py-2 rounded ${
            currentPage === page
              ? 'bg-blue-500 text-white'
              : 'bg-white text-blue-500 hover:bg-blue-100'
          }`}
        >
          {page}
        </Link>
      ))}
    </div>
  );
};

export default Pagination;