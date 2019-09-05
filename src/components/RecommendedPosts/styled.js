import styled from "styled-components"
import media from "styled-media-query"
import AniLink from "gatsby-plugin-transition-link/AniLink"

export const RecommendedWrapper = styled.section`
  /* border-bottom: 1px solid var(--borders);
  border-top: 1px solid var(--borders);
  background: var(--mediumBackground); */
  border-bottom: 1px solid #38444d;
  border-top: 1px solid #38444d;
  /* background: var(--mediumBackground); */
  background: #192734;
  display: flex;
`

export const RecommendedLink = styled(AniLink)`
  align-items: center;
  /* background: var(--mediumBackground);
  color: var(--highlight); */
  background: #192734;
  color: #1fa1f2;
  display: flex;
  padding: 3rem;
  text-decoration: none;
  transition: background 0.5s;
  width: 50%;
  ${media.lessThan("large")`
    padding: 2rem 1rem;
    line-height: 1.3;
    font-size: .9rem;
  `}
  &:hover {
    /* background: var(--borders); */
    background: #38444d;
  }
  &.previous {
    /* border-right: 1px solid var(--borders); */
    border-right: 1px solid #38444d;
  }
  &.next {
    justify-content: flex-end;
  }
  &.previous:before {
    content: "\\2190";
    margin-right: 0.5rem;
  }
  &.next:after {
    content: "\\2192";
    margin-left: 0.5rem;
  }
`
