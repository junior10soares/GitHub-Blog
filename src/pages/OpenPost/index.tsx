import {
  ArrowSquareUpRight,
  Calendar,
  CaretLeft,
  ChatCircle,
  GithubLogo,
} from 'phosphor-react'
import { NavLink } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { PostsContext } from '../../contexts/PostsContext'
import { OpenPostContainer, TextPostContainer } from './styles'

export function OpenPost() {

  const postClicked = useContextSelector(PostsContext, (context) => { //pega contexto post clicado
    return context.postClicked.find(postClicked => postClicked)
  })

  const profile = useContextSelector(PostsContext, (context) => {//pega contexto profile clicado
    return context.profile.find(profile => profile)
  })

  return (

    <div>

      <Header />
      <OpenPostContainer>
        <header>
          <NavLink to="/" title="HomePost">
            <CaretLeft />
            VOLTAR
          </NavLink>

          <a
            href={`https://github.com/junior10soares/Github-Blog/issues/${postClicked?.number}`}// abre o post clicado
            target="_blank">
            VER NO GITHUB
            <ArrowSquareUpRight size={17} weight="bold" />
          </a>
        </header>

        <strong>{postClicked?.title}</strong>

        <footer>
          <div>
            <GithubLogo size={18} color="#3A536B" />
            <span>{profile?.login}</span>
          </div>
          <div>
            <Calendar size={18} color="#3A536B" />
            <span>Há um dia</span>
          </div>
          <div>
            <ChatCircle size={18} color="#3A536B" />
            <span>{postClicked?.comments} comentários</span>
          </div>
        </footer>
      </OpenPostContainer>

      <TextPostContainer>
        <p>{postClicked?.body}</p>
      </TextPostContainer>
    </div>
  )
}
