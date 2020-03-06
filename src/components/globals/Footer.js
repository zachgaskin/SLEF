import React, { Component } from 'react'
import styled from 'styled-components'
import { styles } from '../../utils'
import { FaFacebook } from 'react-icons/fa'

export default class Footer extends Component {
  state = {
    icons: [
      {
        id: 1,
        icon: <FaFacebook className="icon facebook-icon" />,
        path: 'https://www.facebook.com/SomersetLittleEagleFootball/',
      },
    ],
  }
  render() {
    return (
      <FooterWrapper>
        <div className="title">Somerset</div>
        <div className="icons">
          {this.state.icons.map(item => {
            return (
              <a
                href={item.path}
                key={item.id}
                target="_blank"
                rel="noopener noreferrer"
              >
                {item.icon}
              </a>
            )
          })}
        </div>
        <p className="copyright">
          copyright &copy; {new Date().getFullYear()} Somerset Little Eagle
          Football
        </p>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
  padding: 2rem 0;
  background: ${styles.colors.mainGrey};
  .icons {
    width: 1.5rem;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
  }
  .icon {
    color: ${styles.colors.mainWhite};
    font-size: 1.3rem;
    ${styles.transition({})};
    &:hover {
      color: ${styles.colors.mainOrange};
    }
  }
  .copyright {
    color: ${styles.colors.mainWhite};
    text-transform: capitalize;
    text-align: center;
    margin: 1rem 0;
  }
  .title {
    text-align: center;
    width: 11rem;
    color: ${styles.colors.mainOrange};
    text-transform: uppercase;
    padding: 0.3rem 1rem;
    margin: 0 auto 2rem auto;
    font-size: 1.5rem;
    ${styles.border({ color: `${styles.colors.mainOrange}` })};
  }
`
