import styles from './Task.module.css';
const Task = (props) => {
    // const [deleteText, setDeleteText] = useState('');

    const deleteHandler = () => {
        // setDeleteText('(Deleted!)');
        props.onDelete(props.id);
    };

    return (
        <li className={styles["task-item"]} onClick={deleteHandler}>
            {props.children}
        </li>
    );
}
export default Task;