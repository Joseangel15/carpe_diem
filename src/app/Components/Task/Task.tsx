`use client`;

import { useState, useEffect } from "react";
import { createBrowserSideClient } from "@/utils/supabase/client"; // Use the browser client

interface MyTableData {
  id: number;
  title: string;
  task_description: string;
  productive_time: number;
  leisure_time: number;  // Add other fields as necessary
}
export default function Task({ task }: { task: { title: string } | null }) {
  const [data, setData] = useState<MyTableData[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      // 1. Get the Supabase browser client
      const supabase = createBrowserSideClient();

      // 2. Fetch data from your table
      const { data: fetchedData, error } = await supabase
        .from("Tasks") // <-- YOUR TABLE NAME HERE
        .select("*");

      if (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } else {
        // TypeScript casting for simplicity, you should generate types for production
        setData(fetchedData as MyTableData[]);
      }
      setLoading(false);
    };

    fetchData();
  }, []); // Empty dependency array ensures it only runs on mount

  if (loading) {
    return <div>Loading data...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!data || data.length === 0) {
    return <div>No data found.</div>;
  }

  // 3. Render the data
  return (
    <div>
      <h1>My Data from Supabase (Client Component)</h1>
      {/* Map over the data to render actual elements, not just a raw string */}
      <ul>
        {data.map((item) => (
          <li className="my-4 border rounded p-4" key={item.id}>{item.title}
            <div className="mt-2">
                <p className="mt-4">{item.task_description}</p>
                <div className="flex gap-4 justify-between mt-4">
                    <span className="font-bold">PT: {item.productive_time / 60}</span> <span className="font-bold">LT: {item.leisure_time / 60}</span>
                </div>
            </div>
          </li>
        ))}
      </ul>

      {/* For demonstration: */}
      <details>
        <summary>Raw Data (Click to view)</summary>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </details>
    </div>
  );
}
