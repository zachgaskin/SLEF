import styled from 'styled-components'
import { styles } from '../utils'

const BannerButton = styled.button`
  display: block;
  color: ${styles.colors.mainWhite};
  background: transparent;
  padding: 0.5rem 1rem;
  text-transform: uppercase;
  font-size: 1.5rem;
  letter-spacing: 0.5rem;
  font-weight: 700;
  ${styles.border({ color: `${styles.colors.mainWhite}` })};
  margin-bottom: 1rem;
  ${styles.transition({})};
  &:hover {
    background: ${styles.colors.mainWhite};
    color: ${styles.colors.mainBlack};
    cursor: pointer;
  }
  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
  @media (max-width: 572px) {
    font-size: 1.2rem;
  }
  @media (max-width: 472px) {
    font-size: 1.1rem;
  }
  @media (max-width: 415px) {
    font-size: 1rem;
  }
  @media (max-width: 325px) {
    font-size: 0.8rem;
  }
`
const SectionButton = styled(BannerButton)`
  color: ${styles.colors.mainBlack};
  ${styles.border({ color: `${styles.colors.mainBlack}` })};
  &:hover {
    background: ${styles.colors.mainBlack};
    color: ${styles.colors.mainWhite};
  }
`
export { BannerButton, SectionButton }
