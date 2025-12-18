export default function MovementCard({ movement }) {
  return (
    <a
      href={`/movements/${movement.id}`}
      style={{
        display: "block",
        padding: "12px",
        margin: "10px 0",
        border: "1px solid #ccc",
        borderRadius: "8px"
      }}
    >
      <strong>{movement.name}</strong>
      <p style={{ margin: 0 }}>{movement.description}</p>
    </a>
  );
}
