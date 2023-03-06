import { NavLink, Outlet } from 'react-router-dom';
import ModalComponent from './components/shared/ModalComponent';
import { createPortal } from "react-dom";
import { useRef, useState } from "react";
import { API_KEY } from './apiKey';
import { setIsLogged } from './components/userSlice';
import { useSelector, useDispatch } from "react-redux";

function App() {
  const [modalVisible, setModalVisible] = useState(false); // ouverture / fermeture modal
  const [modalConnect, setModalConnect] = useState() // différencier inscription / connexion

  const dispatch = useDispatch()

  const isLogged = useSelector(state => state.user.isLogged)

  const emailRef = useRef();
  const passwordRef = useRef();

  const connectHandler = (mode)=> {
    setModalVisible(true)
    setModalConnect(mode)
  }


  const submitUserFormHandler = async (e) => {
    e.preventDefault()

    //console.log(modalConnect)

    let BASE_URL = ""
    if (modalConnect === "signUp") {
      BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${API_KEY}`
    } else {
      BASE_URL = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`
    }

    try {
      const response = await fetch(BASE_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body : JSON.stringify({
          email: emailRef.current.value,
          password: passwordRef.current.value,
          returnSecureToken: true
        })
      })

      // Si la réponse n'a pas comme code de retour un OK (200), alors on va envoyer une erreur
      if(!response.ok) {
        throw new Error("Il y a eu une erreur !")
      }

      // Si la réponse est concluante, on extrait le body
      const data = await response.json()

      localStorage.setItem('token', data.idToken)

      emailRef.current.value = ""
      passwordRef.current.value = ""

      dispatch(setIsLogged(true));
      setModalVisible(false)
      console.log(isLogged)

    } catch (error) {
      console.error(error.message);
    }
  }

  const logOutHandler = () => {
    localStorage.removeItem('token')
    dispatch(setIsLogged(false));
  }

  return (
    <>
    {modalVisible && createPortal(<ModalComponent closeModal={() => setModalVisible(false)}>
        <div className="d-flex justify-content-between align-items center">
        <h3>{modalConnect === "signUp" ? "S'inscrire" : "Se connecter"}</h3>
        <button onClick={() =>setModalVisible(false)} className="btn btn-outline-dark rounded-circle"><i className="bi bi-x"></i></button>
        </div>
        <hr />
        <form onSubmit={submitUserFormHandler}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email : </label>
            <input type="text" required ref={emailRef} className="form-control" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Mot de passe : </label>
            <input type="password" required ref={passwordRef} className="form-control" />
          </div>
          <div className="text-end">
            <button type="submit" className="btn btn-outline-info me-2">{modalConnect === "signUp" ? "S'inscrire" : "Se connecter"}</button>
          </div>
        </form>
    </ModalComponent>, document.getElementById("modal-root"))}
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
                  {isLogged && <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={`/displayimc`}>Voir mon IMC</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to={`/form`}>Entrer mes données</NavLink>
                  </li>
                  </>
                  }
                  
                </ul>
            </div>
            <div className="collapse navbar-collapse" id="eRecipe-navbar">
              {isLogged ? <button className="ms-auto btn btn-danger" onClick={()=> logOutHandler()}>Se déconnecter</button> : <><button className="ms-auto btn btn-outline-info" onClick={()=> connectHandler("signUp")}>S'inscrire</button>
              <button className="ms-2 btn btn-primary" onClick={()=> connectHandler("signIn")}>Se connecter</button></>}
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
