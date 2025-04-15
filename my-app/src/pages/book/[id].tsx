import { useRouter } from 'next/router';

const BookDetail = () => {
  const { query } = useRouter();
  const { id } = query;  
  return (
    <div>
      <h1>Book Details for {id}</h1>
      {}
    </div>
  );
};

export default BookDetail;
