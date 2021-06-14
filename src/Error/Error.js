export default function Error({ error }) {
  return (
    error && (
      <div className="error">Error: {error.message}</div>
    )
  );
}
