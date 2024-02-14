import { ClipboardText } from "phosphor-react"
import styles from "./Empty.module.css"

export function Empty() {
    return (
        <main className={styles.empty}>
            <ClipboardText size={56} />
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seus itens a fazer
            </p>
        </main>
    )
}