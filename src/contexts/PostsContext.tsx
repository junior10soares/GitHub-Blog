import { ReactNode, useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../lib/axios'

interface ProfileProps { // perfil usuario
    id: number
    login: string
    name: string
    bio: string
    avatar_url: string
    followers: number
}

interface IssuePostProps {// issue do posts
    title: string
    body: string
    number: number
    total_count?: string
    comments: number
    login: string
    url: string
}

interface PostsContextType {
    posts: IssuePostProps[]
    profile: ProfileProps[]
    postClicked: IssuePostProps[]
    setPosts: React.Dispatch<React.SetStateAction<IssuePostProps[]>>;
    setPostClicked: React.Dispatch<React.SetStateAction<IssuePostProps[]>>;
    filterPost: (data?: string) => Promise<void>
}

interface PostsProviderProps {
    children: ReactNode
}

export const PostsContext = createContext({} as PostsContextType)//createContext que vem de dentro from 'use-context-selector'

export function PostsContextProvider({ children }: PostsProviderProps) {

    const [posts, setPosts] = useState<IssuePostProps[]>([])//mostra posts
    const [profile, setProfile] = useState<ProfileProps[]>([])// mostra profile
    const [postClicked, setPostClicked] = useState<IssuePostProps[]>([])//post clicado

    const filterPost = useCallback( // filtra todos posts dentra do repositorio da api
        async (query?: string, repoName?: string) => {
            const repoQuery = repoName ? `repo:${repoName}` : `repo:junior10soares/github-blog`
            const response = await api.get('/search/issues', {
                params: {
                    q: `${repoQuery} ${query}`,
                },
            })
            const { items } = response.data
            setPosts(items)
        },
        []
    )

    const showPosts = useCallback(async () => { // mostrar tds post do api
        const response = await api.get('/search/issues?q=repo:junior10soares/github-blog')
        const { items } = response.data
        setPosts(items)
    }, [])

    useEffect(() => {
        showPosts()
    }, [])

    const showProfile = useCallback(async () => {//mostra api do perfil
        const response = await api.get('/users/junior10soares');
        const data = response.data;
        setProfile([data]);
    }, []);

    useEffect(() => {
        showProfile();
    }, [showProfile]);

    return (

        <PostsContext.Provider
            value={{
                posts,
                profile,
                setPosts,
                setPostClicked,
                postClicked,
                filterPost
            }}
        >
            {children}
        </PostsContext.Provider>
    )
}