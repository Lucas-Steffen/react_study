import { ThumbsUp, Trash } from 'phosphor-react'
import { Avatar } from './Avatar'
import styles from './Comment.module.css'

export function Comment(){
    return(
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/lucascostabueno.png" />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Lucas Bueno</strong>
                            <time title="09 de Dezembro às 12:00" dateTime="2025-09-12 12:00:00">Cerca de 1h atrás</time>
                        </div>

                        <button title='Deletar comentário'>
                            <Trash  size={24}/>
                        </button>
                    </header>

                    <p>O homem simplesmente decidiu encostar no frontend e já está evoluindo como se fosse rotina. Lucas Gabriel é assim: pega a stack, destrincha, aprende e entrega. É isso aí, backender, mostrando que quando resolve estudar algo novo, o nível sobe rápido.</p>
                </div>

                <footer>
                    <button>
                        <ThumbsUp/>
                        Aplaudir <span>20</span>
                    </button>
                </footer>
            </div>
        </div>
    )
}