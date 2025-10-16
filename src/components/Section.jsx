export default function Section({ children, id }) {
  return (
    <section id={id} className="py-5">
      <div className="container">{children}</div>
    </section>
  );
}
