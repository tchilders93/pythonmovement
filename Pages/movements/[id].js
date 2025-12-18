import Layout from "../../components/Layout";
import movements from "../../public/data/movements.json";

export default function MovementPage({ movement }) {
  return (
    <Layout>
      <h2>{movement.name}</h2>
      <p>{movement.description}</p>

      <h3>Regressions</h3>
      <ul>
        {movement.regressions.map((r, i) => <li key={i}>{r}</li>)}
      </ul>

      <h3>Progressions</h3>
      <ul>
        {movement.progressions.map((p, i) => <li key={i}>{p}</li>)}
      </ul>

      <a href="/movements">⬅ Back to all movements</a>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: movements.map(m => ({ params: { id: m.id } })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const movement = movements.find(m => m.id === params.id);
  return { props: { movement } };
}
