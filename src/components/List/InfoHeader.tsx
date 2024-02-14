import styles from "./InfoHeader.module.css"


interface InfoHeaderProps {
    taskCounter: number
    checkedTasksCounter: number
}

export function InfoHeader({taskCounter, checkedTasksCounter } : InfoHeaderProps) {
    return (
        <div className={styles.container}>
            <aside className={styles.newTask}>
                <p>Tarefas criadas</p>
                <div className={styles.countTask}>
                    <span>{taskCounter}</span>
                </div>

            </aside>
            <aside className={styles.doneTask}>
                <p>Concluídas</p>
                <div className={styles.countTask}>
                    <span>{taskCounter === 0 ? checkedTasksCounter : `${checkedTasksCounter} de ${taskCounter}`}</span>
                </div>
            </aside>
        </div>
    )
}
