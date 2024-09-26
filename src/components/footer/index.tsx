import './footer.css';

export function Footer(){
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <a href="/login" className="footer-link">Login</a>
        <a href="/register" className="footer-link">Register</a>
        <a href="/dashboard" className="footer-link">Dashboard</a>
      </div>
      <div className='copy-container'>
        <p>FDT Cars - Todos os direitos reservados</p>
      </div>
    </footer>
  );
}