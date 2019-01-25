import React, { Component } from 'react'
import styled from 'styled-components'
import {Link} from 'gatsby'
import { styles } from '../../../utils'


export default class NavbarLinks extends Component {
  state={
    links:[
      {
        id:0,
        path:'/',
        name:'home'
      },
      {
        id:1,
        path: '/aboutus',
        name: 'aboutus'
      },
      {
        id:2,
        path: '/signup',
        name: 'signup'
      },
      {
        id:3,
        path: '/contact',
        name: 'contact'
      },
    ]
  }
  render() {
    return (
      <LinkWrapper open={this.props.navbarOpen}>
        {
          this.state.links.map(item =>{
            return(
              <li key={item.id}>
                <Link to={item.path} className="nav-link">
                  {item.name}
                </Link>
              </li>
            )
          })
        }
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled.ul`
li {
  list-style-type: none;
}
.nav-link {
  display: block;
  text-decoration: none;
  padding: 0.5rem 1rem 0.5rem 1rem;
  color: ${styles.colors.mainGrey}

}
`

