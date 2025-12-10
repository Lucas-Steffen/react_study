import { Header } from './components/Header'
import { Post } from './Post'
import styles  from './App.module.css'
import './global.css'
import { Sidebar } from './components/Sidebar'

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
          <Sidebar />
        <main>
          <Post 
              author="Lucas Gabriel" 
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam harum nostrum asperiores enim quis corrupti repudiandae praesentium. Accusamus porro harum eligendi in mollitia voluptate asperiores dolores nam expedita laboriosam!"
            />

            <Post 
              author="João Gabriel" 
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus magnam harum nostrum asperiores enim quis corrupti repudiandae praesentium. Accusamus porro harum eligendi in mollitia voluptate asperiores dolores nam expedita laboriosam!"
            />
        </main>
      </div>
    </div>
  )
}