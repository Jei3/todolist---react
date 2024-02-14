import styles from "./Header.module.css";

import listLogo from "../assets/rocket.svg"

export function Header(){
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <img 
                    src={listLogo} 
                    alt="" 
                />

                <p>
                    to<span>do</span>
                </p>
            </div>


        </header>
    )
}