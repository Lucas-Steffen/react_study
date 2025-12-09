//import './App.css';

function Header({ title, links = [] }) {
  return (
    <header>
      <h1>{title}</h1>

      {links.length > 0 && (
        <nav>
          <ul>
            {links.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
