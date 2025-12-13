import { Header } from './components/Header'
import { Post, type PostType } from './components/Post'
import styles  from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'


const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/Lucas-Steffen.png',
      name: 'Lucas Gabriel',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de começar a estudar React e TailwindCSS pela Rockeatseat e admito que estou aprendendo bastante na área do frontend, para mim que odiava, parece um tapa de luva, não é mesmo? kkk'},
      { type: 'link', content: '👉jane.design/doctorcare'},
    ],
    publishedAt: new Date('2025-12-10 12:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/rewrit3.png',
      name: 'Rewrit3',
      role: 'Web Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galeraa 👋'},
      { type: 'paragraph', content: 'Acabei de começar a estudar React e TailwindCSS pela Rockeatseat e admito que estou aprendendo bastante na área do frontend, para mim que odiava, parece um tapa de luva, não é mesmo? kkk'},
      { type: 'link', content: '👉jane/doctorcare'},
    ],
    publishedAt: new Date('2025-12-11 12:00:00'),
  }
]

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
          <Sidebar />
        <main>
          {posts.map(post=>{
            return (
            <Post
              key={post.id} 
              post={post}
            />)
          })}
        </main>
      </div>
    </div>
  )
}
