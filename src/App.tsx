import { useState, useEffect } from "react";
import { Posts } from './types/Post'
import styles from './styles.module.css';
import { PostForm } from "./componets/PostForm";
import { PostItem } from "./componets/PostItem";
import { api } from './api';

function App() {
  const [posts, setPosts] = useState<Posts[]>([]);

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    let json = await api.getAllPosts();
    setPosts(json);
  }

  const handleAddPost = async (title: string, body: string) => {
    let json = await api.addNewPost(title,body, 875);

    if (json.id) {
      alert('Comentário enviado com sucesso!');
      console.log(json);
    } else {
      alert('Ocorrou um erro.');
    }
  }

  return (
    <>
      <div>
        <div className={styles.container}>

          <PostForm onAdd={handleAddPost} />

          <div className={styles.boxcontainer}>

            {posts.map((item, index) => (
              <PostItem key={index} data={item} />
            ))}

          </div>
        </div>
      </div>
    </>
  )
}

export default App
