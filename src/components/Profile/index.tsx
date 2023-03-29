import { ProfileContainer, ProfilePerfilContainer } from './styles'
import { ArrowSquareUpRight, GithubLogo, Users } from 'phosphor-react'
import { useContextSelector } from 'use-context-selector';
import { PostsContext } from '../../contexts/PostsContext';

export function Profile() {

  const profile = useContextSelector(PostsContext, (context) => {
    return context.profile

  })

  return (

    <div>
      {profile.map((profile) => {
        return (
          <ProfileContainer key={profile.id}>
            <img src={profile.avatar_url} alt="Foto do perfil" />
            <ProfilePerfilContainer>
              <header>
                <strong>{profile.name}</strong>
                <nav>
                  <a href="https://github.com/junior10soares" target="_blank">
                    GITHUB
                    <ArrowSquareUpRight size={17} weight="bold" />
                  </a>
                </nav>
              </header>
              <main>
                <div>{profile.bio}</div>
                <footer>
                  <div>
                    <GithubLogo size={18} color="#3A536B" />
                    <span>{profile.login}</span>
                  </div>
                  <div>
                    <Users size={18} color="#3A536B" />
                    <span>{profile.followers} seguidores</span>
                  </div>
                </footer>
              </main>
            </ProfilePerfilContainer>
          </ProfileContainer>
        )
      })}
    </div>
  )
}
