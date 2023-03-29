import { NavLink } from 'react-router-dom'
import { useContextSelector } from 'use-context-selector'
import { Header } from '../../components/Header'
import { Profile } from '../../components/Profile'
import { PostsContext } from '../../contexts/PostsContext'
import { SeachForm } from './SeachForm'
import { Container, FormContainer } from './styles'

export function HomePost() {
  const [posts, setPostClicked] = useContextSelector(PostsContext, (context) => {
    return [context.posts, context.setPostClicked]
  })

  function handleDataIssue
    (title: string, body: string, login: string, comments: number, url: string, number: number) {
    const issues = { // recebe isso de infor
      title: title,
      body: body,
      login: login,
      comments: comments,
      url: url,
      number: number,
    }
    setPostClicked([issues])
  }

  return (
    <div>
      <Header />
      <Profile />
      <SeachForm />

      <FormContainer>
        {posts.map((posts) => {
          return (
            <NavLink to={'/openpost'} title="OpenPost" key={posts.number}>
              <Container action=""
                onClick={() => handleDataIssue
                  (posts.title, posts.body, posts.login, posts.comments, posts.url, posts.number)}>
                <div >
                  <strong>{posts.title}</strong>
                  <span>Há 1 dia</span>
                </div>
                <p>{posts.body}</p>
              </Container>
            </NavLink>
          )
        })}
      </FormContainer>
    </div >
  )
}
