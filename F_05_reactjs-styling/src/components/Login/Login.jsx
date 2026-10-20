import styles from './Login.module.css';
import heroBanner from '../../assets/login-banner.jpg';
import googleIcon from '../../assets/google-icon.svg';
import facebookIcon from '../../assets/facebook-icon.svg';

export default function Login() {
  return (
    <div className={styles.card}>
      {/* Left Panel Banner */}
      <img 
        src={heroBanner} 
        alt="Login Banner" 
        className={styles.heroImage} 
      />

      {/* Right Panel Form Content */}
      <div className={styles.content}>
        <div className={styles.greeting}>
          <span className={styles.hello}>Hello</span>
          <span className={styles.comma}>,</span>
          <span className={styles.guys}> Guyss!</span>
        </div>

        <div className={styles.tabs}>
          <span className={styles.tabActive}>Login</span>
          <span className={styles.tabInactive}>SignUp</span>
        </div>

        <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="Enter your email" 
            className={styles.inputField} 
            required 
          />
          <input 
            type="password" 
            placeholder="Enter Password" 
            className={styles.inputField} 
            required 
          />
          <button type="submit" className={styles.submitBtn}>
            Login
          </button>
        </form>

        <div className={styles.divider}>Or</div>

        <div className={styles.socials}>
          <img src={googleIcon} alt="Google Sign In" className={styles.socialIcon} />
          <img src={facebookIcon} alt="Facebook Sign In" className={styles.socialIcon} />
        </div>
      </div>
    </div>
  );
}