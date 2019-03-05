import Typography from 'typography'
import funstonTheme from 'typography-theme-funston'
funstonTheme.baseLineHeight = '1.4' // was 20px.
funstonTheme.letterSpacing = '.01em'

const typography = new Typography(funstonTheme)

export default typography
