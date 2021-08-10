import { Container } from './styles'

interface SeparatorProps {
  color?: string
  style?: React.CSSProperties
}

const Separator: React.FC<SeparatorProps> = ({ color, style, ...rest }) => {
  return <Container color={color} style={style} {...rest} />
}

export default Separator
