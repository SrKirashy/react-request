import { useState, useEffect, ChangeEvent } from "react";
import { Posts } from './types/post'
import styles from './styles.module.css';

function App() {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [addTitleText, setAddTitleText] = useState<string>('');
  const [addCommentText, setAddCommentText] = useState<string>('');



  useEffect(() => {
    handlerPosts()
  }, [])


  const handlerPosts = async () => {
    try {
      let url = "https://jsonplaceholder.typicode.com/posts";
      let response = await fetch(url);
      let json = await response.json();
      setPosts(json);
    } catch {
      setPosts([]);
      alert('Ocorreu um erro, tente mais tarde.')
    }
  }
  const handlerAddTitleText = (e: ChangeEvent<HTMLInputElement>) => {
    setAddTitleText(e.target.value);
  }
  const handlerAddCommentText = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setAddCommentText(e.target.value);
  }
  const handlerAddClick = async () => {
    if (addTitleText && addCommentText) {
      let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'POST',
        body: JSON.stringify({
          title: addTitleText,
          body: addCommentText,
          userId: 777
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      let json = await response.json();
      
      if (json.id) {
        alert('Comentário enviado com sucesso!');
        console.log(json);
      } else {
        alert('Ocorrou um erro.');
      }



    } else {
     alert('É necessário preencher os campos.');
    }
  }


  return (
    <>
      <div>
        <div className={styles.container}>
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

          <div className={styles.boxcontainer}>
            {posts.map((item, index) => (
              <>
                <div className={styles.userid}>User ID: {item.userId} ID: {item.id}</div>
                <h1 className={styles.h1}>Título</h1>
                <div className={styles.title}>
                  {item.title}
                </div>
                <span className={styles.span}>Comments</span>
                <div className={styles.comments}>
                  {item.body}
                </div>
              </>
            ))}

          </div>
        </div>
      </div>
    </>
  )
}

export default App
