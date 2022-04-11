
import './App.css';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from './Firebase.init';

function App() {
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  // Google Sing In 
  const googleLogIn = () => {
    signInWithPopup(auth, provider)
      .then(userInfo => {
        console.log(userInfo.user);
      // const user = userInfo.user
      })
      .catch(mistake => {
      console.log(mistake.message);
    })
  }



  const emailSingUp = () => {
    createUserWithEmailAndPassword(auth)
  }
 
  return (
    <div className="auth-form-container ">
    <div className="auth-form">
      <h1>Sign Up</h1>
      <form onSubmit={emailSingUp}>
        <div className="input-field">
          <label htmlFor="email">Email</label>
          <div className="input-wrapper">
            <input
              
              onBlur={onEmailBlur}
              type="email"
              name="email"
              id="email"
            />
          </div>
          
        </div>
        <div className="input-field">
          <label htmlFor="password">Password</label>
          <div className="input-wrapper">
            <input
              
              type="password"
              name="password"
              id="password"
            />
          </div>
          
        </div>
        <div className="input-field">
          <label htmlFor="confirm-password">Confirm Password</label>
          <div className="input-wrapper">
            <input
              type="password"
              name="confirmPassword"
              id="confirm-password"
              
            />
          </div>
         
        </div>
        <button type="submit" className="auth-form-submit">
          Sign Up
        </button>
      </form>
      <p className="redirect">
        Already have an account?{" "}
        <span>Login</span>
      </p>
      <div className="horizontal-divider">
        <div className="line-left" />
        <p>or</p>
        <div className="line-right" />
      </div>
      <div className="input-wrapper">
        <button onClick={googleLogIn}  className="google-auth">
          
          <p> Continue with Google </p>
        </button>
      </div>
    </div>
  </div>
  );
}

export default App;
