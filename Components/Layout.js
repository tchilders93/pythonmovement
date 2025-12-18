export default function Layout({ children }) {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>The Movement App</h1>
      {children}
    </div>
  );
}
