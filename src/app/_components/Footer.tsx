export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 p-6 mt-12">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} My Song Lyrics. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}