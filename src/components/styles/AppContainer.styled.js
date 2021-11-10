import styled from 'styled-components';

export const AppContainer = styled.div`
    position: relative;
    color: #fff;
    min-height: 100vh;
    max-width: 832px;
    margin: 0 auto;
    padding: 0;

    @media (max-width: 480px) {
        max-width: 100%;
        padding: 10px;
      }
`
