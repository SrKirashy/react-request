import { useState, ChangeEvent } from 'react';
import styles from '../styles.module.css';

type Props = {
    onAdd: (title:string,body:string)=> void;
}

export const PostForm = ({onAdd}:Props) => {
    const [addTitleText, setAddTitleText] = useState<string>('');
    const [addCommentText, setAddCommentText] = useState<string>('');

    const handlerAddTitleText = (e: ChangeEvent<HTMLInputElement>) => {
        setAddTitleText(e.target.value);
    }
    const handlerAddCommentText = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setAddCommentText(e.target.value); 
    }

    const handlerAddClick = ()=>{
        if(addTitleText && addCommentText) {
            onAdd(addTitleText,addCommentText);
        } else {
            alert("Preencha os campos!");
        }
    }

    return (
        <>
            <fieldset className={styles.fieldset}>
                <legend className={styles.legend}>Comment</legend>
                <input
                    value={addTitleText}
                    className={styles.inputtext}
                    type="text"
                    placeholder="Digite um título."
                    onChange={handlerAddTitleText}
                />
                <textarea
                    value={addCommentText}
                    className={styles.textarea}
                    placeholder="O que achou do nosso site?"
                    onChange={handlerAddCommentText}>

                </textarea>
                <input
                    className={styles.button}
                    type="button"
                    value="Enviar"
                    onClick={handlerAddClick}
                />
            </fieldset>
        </>
    )
}