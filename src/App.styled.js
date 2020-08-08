import styled from 'styled-components'

export const App = styled.div`
  text-align: center;

  @keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

`;
App.displayName = 'App'

export const AppHeader = styled.header`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
}`
AppHeader.displayName = 'AppHeader'


export const AppLogo = styled.img`
  height: 40vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    animation: App-logo-spin infinite 20s linear;
  }
`;
AppLogo.displayName = 'AppLogo'

export const AppLink = styled.a`
  color: #61dafb;
`
AppLink.displayName = 'AppLink'