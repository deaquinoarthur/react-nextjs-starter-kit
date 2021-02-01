import * as Style from './styles'

function Intro({ title, description }) {
  return (
    <Style.Wrapper>
      <Style.Container>
        <h1>{title}</h1>

        <p>{description}</p>

        <img
          src="/img/hero-illustration.svg"
          alt="A man in front of a computer programming"
        />
      </Style.Container>
    </Style.Wrapper>
  )
}

export default Intro
