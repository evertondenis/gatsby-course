import styled from "styled-components"

export const ListWrapper = styled.section`
  body#grid & {
    /* background-color: var(--borders);
    border-bottom: 1px solid var(--borders); */
    background-color: #38444d;
    border-bottom: 1px solid #38444d;
    display: grid;
    grid-area: posts;
    grid-gap: 1px;
    grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  }
`
