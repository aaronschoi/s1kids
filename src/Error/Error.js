export default function Error({ error }) {
  return (
    error && (
      <div className="">Error: {error.message}</div>
    )
  );
}
