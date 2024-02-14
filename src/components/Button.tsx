import { PlusCircle } from "phosphor-react";

type ButtonProps = React.DetailedHTMLProps<
React.ButtonHTMLAttributes<HTMLButtonElement>,
HTMLButtonElement
>


import styles from "./Button.module.css";

export function Button({...rest} : ButtonProps) {
    return (
        <div className={styles.container}>
            <button
                {...rest}
            >
                Criar
                < PlusCircle size={18} />
            </button>
        </div>
    )
}


