import { useContextSelector } from 'use-context-selector'
import { PostsContext } from '../../../contexts/PostsContext'
import { InputContainer } from './styles'
import * as z from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

const searchFormShema = z.object({
  query: z.string(),
})

type SearchFormInputs = z.infer<typeof searchFormShema>

export function SeachForm() { // puxa context do posts
  const [posts, filterPost] = useContextSelector(PostsContext, (context) => {
    return [context.posts, context.filterPost]
  })

  const { register, handleSubmit } = useForm<SearchFormInputs>({
    resolver: zodResolver(searchFormShema),
  })

  async function handleSearchTransactions(data: SearchFormInputs) {
    // recebe os valores do campo digitado com a tipagem de string
    await filterPost(data.query)
  }

  return (
    <InputContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <div>
        <strong>Publicações</strong>
        <span>{posts.length} publicações</span>
      </div>

      <input
        type="text"
        color="white"
        placeholder="Buscar conteúdo"
        {...register('query')}
      />
    </InputContainer>
  )
}

  // useForm