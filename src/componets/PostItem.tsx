import styles from "../styles.module.css";
import { Posts } from "../types/Post";

type Props = {
    data: Posts;
}
export const PostItem = ({data}: Props) => {

    return (
        <>
            <div className={styles.userid}>User ID: {data.userId} ID: {data.id}</div>
            <h1 className={styles.h1}>Título</h1>
            <div className={styles.title}>{data.title}</div>
            <span className={styles.span}>Comments</span>
            <div className={styles.comments}>{data.body}</div>
        </>
    );
}