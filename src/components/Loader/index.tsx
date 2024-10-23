import { RotatingLines } from 'react-loader-spinner'
import { Wrapper } from './styles'

const Loader = () => {
  return (
    <Wrapper>
      <RotatingLines
        strokeColor="red"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
      />
    </Wrapper>
  )
}

export default Loader
