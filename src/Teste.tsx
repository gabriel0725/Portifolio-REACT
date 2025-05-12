import styled from 'styled-components';

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
background-color: ${(props) => (props.principal ? 'green' : 'yellow')};
font-size: ${(props) => (props.fontSize || '16px')};
`

const BotaoPerigo = styled(Botao)`
background-color: red;
color: #fff;

span {
  text-decoration: line-through;
}
`

function Teste() {
  return(
    <>
    <Botao fontSize='14px' principal>enviar</Botao>
    <Botao principal={false}>cancelar</Botao>

    <BotaoPerigo principal as="a">
      <span>Não clique aqui</span>
    </BotaoPerigo>
  </>
  )
}



export default Teste
