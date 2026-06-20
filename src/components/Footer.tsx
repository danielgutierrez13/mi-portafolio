export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <span>Hecho con cuidado por Daniel Gutiérrez · {year}</span>
    </footer>
  );
}
