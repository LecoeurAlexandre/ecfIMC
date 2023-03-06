import { Link, NavLink, Outlet } from 'react-router-dom';

function App() {
  return (
    <>
    <header>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
          <div className="container-fluid">
            <span style={{cursor: "pointer"}} className="navbar-brand" ><i className="bi bi-globe"></i> IMC Direct</span>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#eRecipe-navbar" aria-controls="eRecipe-navbar" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink className="nav-link" to={`/`}>Accueil</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={`/displayimc`}>Voir mon IMC</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={`/form`}>Entrer mes données</NavLink>
                  </li>
                </ul>
            </div>
            <div className="collapse navbar-collapse" id="eRecipe-navbar">
              <button className="ms-auto btn btn-outline-info">Register</button>
              <button className="ms-2 btn btn-primary">Sign In</button>
            </div>
          </div>
      </nav>
    </header>
    <main>
      <div className="container">
        <div className="row my-3">
          <div className="col-10 offset-1 bg-dark text-light p-3 rounded">
            <Outlet />
          </div>
        </div>
      </div>
    </main>
    </>
  );
}

export default App;
