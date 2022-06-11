import { useEffect, useState } from 'react';

export const Post = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const res = await fetch('http://localhost:9000', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          query: `
            query {
              post
            }
          `
        })
      });
      const data = await res.json();
      await setData(data.data);
      await setLoading(false);

      console.log(data);
    }

    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;

  return (
    <div>
      <h1>{data.post}</h1>
    </div>
  );
};
