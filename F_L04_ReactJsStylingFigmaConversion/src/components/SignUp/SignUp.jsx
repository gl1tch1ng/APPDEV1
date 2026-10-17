import styles from "./SignUp.module.css";
import logo from "../../assets/logo.svg";

export default function SignUp({ onSwitchToLogin }) {
    return (
        <div className={styles.signup}>
            {/* ---------- Left panel ---------- */}
            <section className={styles.left}>
                <h1 className={styles.tagline}>
                    Need webdesign
                    <br />
                    for your business?
                    <br />
                    <strong>Design Spacee</strong>
                    <br />
                    will help you.
                </h1>

                <img className={styles.logo} src={logo} alt="Design Spacee logo" />

                <p className={styles.link}>figma.com/@designspacee</p>
            </section>

            {/* ---------- Right panel ---------- */}
            <section className={styles.right}>
                <div className={styles.form}>
                    <h2>Sign-up</h2>

                    <input type="text" placeholder="Full Name" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />

                    <button>Sign Up</button>

                    <p className={styles.loginLink}>
                        Already have an account?{" "}
                        <a 
                            href="#" 
                            onClick={(e) => { 
                                e.preventDefault(); 
                                if (onSwitchToLogin) onSwitchToLogin(); 
                            }}
                        >
                            Login Here
                        </a>
                    </p>
                </div>
            </section>
        </div>
    );
}