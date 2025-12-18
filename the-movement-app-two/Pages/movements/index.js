import { useState } from "react";
import Layout from "../../components/Layout";
import MovementCard from "../../components/MovementCard";
import movements from "../../public/data/movements.json";

export default function MovementsPage() {
  const [query, setQuery] = useState("");

  const filtered = movements.filter(m =>
    m.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <Layout>
      <h2>All Movements</h2>

      <input
        type="text"
        placeholder="Search movements..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px",
          width: "100%",
          marginBottom: "20px",
          fontSize: "16px"
        }}
      />

      {filtered.map(m => (
        <MovementCard key={m.id} movement={m} />
      ))}

      {filtered.length === 0 && <p>No movements found.</p>}
    </Layout>
  );
}
