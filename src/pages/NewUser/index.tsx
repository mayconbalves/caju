import { HiOutlineArrowLeft } from 'react-icons/hi'
import { useHistory } from 'react-router-dom'
import { IconButton } from '~/components/Buttons'
import routes from '~/router/routes'
import NewUserForm from './components/Form'
import * as S from './styles'

const NewUserPage = () => {
  const history = useHistory()

  const goToHome = () => {
    history.push(routes.dashboard)
  }

  return (
    <S.Container>
      <S.Card>
        <IconButton onClick={() => goToHome()} aria-label="back">
          <HiOutlineArrowLeft size={24} />
        </IconButton>
        <NewUserForm />
      </S.Card>
    </S.Container>
  )
}

export default NewUserPage
