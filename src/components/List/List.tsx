import { InfoTask } from "../../App";
import styles from "./List.module.css"
import { Check, Trash } from "phosphor-react";

interface ListProps {
    data: InfoTask
    removeTask: (id: number) => void
    toggleCheckedStatus: ({ id, value }: { id: number; value: boolean }) => void
}


export function List({ data, toggleCheckedStatus, removeTask }: ListProps) {
    function handleTaskChecked() {
        toggleCheckedStatus({ id: data.id, value: !data.isChecked })
    }

    function handleRemoveTask() {
        removeTask(data.id)
    }


    const checkboxCheckedClassname = data.isChecked ? styles['checkbox-checked'] : styles['checkbox-unchecked']
    const paragraphCheckedClassname = data.isChecked && styles['paragraph-checked']


    return (
        <div className={styles.container}>
            <div className={styles.inputContainer}>
                <label htmlFor="checkbox" onClick={handleTaskChecked}>
                    <input readOnly type="checkbox" checked={data.isChecked} />
                    <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
                        {data.isChecked && <Check size={12} />}
                    </span>
                </label>
                
                <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
                    {data.text}
                </p>
            </div>

    


            <button
                onClick={handleRemoveTask}
            >
                <Trash size={20} />
            </button>
        </div>
    )

}