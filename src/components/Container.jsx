export default function Container({ children, fluid = false }) {
  return (
    <div className={fluid ? "container-fluid" : "container"}>{children}</div>
  );
}
