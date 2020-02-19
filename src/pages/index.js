import React from 'react'
import styled, { keyframes } from 'styled-components'
import scrollTo from 'gatsby-plugin-smoothscroll'
import TextLoop from 'react-text-loop'
import Typist from 'react-typist'

import { useStaticQuery, graphql, Link } from 'gatsby'

import Layout from '../layouts'
import SEO from '../components/seo'
import Card from '../components/card'
import Marquee from '../components/marquee'
import Img from 'gatsby-image'

import circle from '../images/circle.svg'
import star from '../images/star.svg'

const StyledCardsWrapper = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  justify-content: space-between;
  padding-top: 4rem;
`
const Stats = styled.div`
  width: 10000px;
  background-color: black;
  padding: 0.5rem 0;
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 0px;
  left: 0px;
  color: white;
  align-items: center;
  z-index: 999;
  p {
    margin: 0px;
    margin-right: 1rem;
    font-size: 1rem;
  }
`

const StyledBody = styled.div`
  font-size: 18px;
  height: 80vh;
  max-height: 900px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-top: 3rem;
  @media (min-width: 1441px) {
    padding-top: 0px;
    justify-content: center;
  }
`

const StyledSection = styled.div`
  /* padding: 4rem; */
  margin-top: 6rem;
`
const StyledTitle = styled.div`
  z-index: 999;
  display: flex;
  mix-blend-mode: color-dodge;
  min-height: 40vh;
  width: 50%;
  flex-direction: column;
  @media (min-width: 1441px) {
    width: 70%;
  }
`

const StyledBodyTitle = styled.div`
  font-family: 'Principal Trial Black';
  color: ${({ theme }) => theme.colors.pink1};
  font-weight: 900;
  font-size: 7.5vw;
  line-height: 6.5rem;
  letter-spacing: -0em;
  margin-bottom: 4rem;
  padding-right: 4rem;
  pointer-events: none;
  @media (min-width: 1441px) {
    font-size: 5.5vw;
    line-height: 5.25vw;
  }

  * {
    white-space: pre-wrap;
    word-break: break-word;
  }
`

const NewInfo = styled(Link)`
  width: 100%;
  position: absolute;
  right: -80px;
  top: 20px;
  width: 63%;
  /* max-width: 600px; */
  transform: rotate(-4deg) scale(0.98);
  font-size: 20px;
  transition: transform 0.3s ease;
  color: ${({ theme }) => theme.colors.grey9};
  margin-right: -120px;
  @media (min-width: 1441px) {
    top: 60px;
    width: 55%;
    right: 0px;
  }

  :hover {
    transform: rotate(-2deg);
  }
  a {
    color: ${({ theme }) => theme.colors.grey9};
  }
`

const StyledUnicornImage = styled(Img)`
  width: 100%;
  /* opacity: 0.4; */
  background-color: none;
  margin-top: 1rem;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadows.huge};
`

const NewPill = styled.span`
  float: left;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.grey9};
  padding: 0rem 0.75rem;
  border-radius: 0.5em;
  text-align: center;
  margin: 0;
  margin-right: 1rem;
  font-size: 18px;
`
const bounce = keyframes`
  0%, 20%, 40%, 60%, 100% {
    transform: translateY(0);
  }
  45% {
    transform: translateY(-10px);
  }
`

const StyledDownArrow = styled.a`
  font-weight: 200;
  font-size: 48px;
  position: absolute;
  left: 0;
  bottom: 0;
  margin-top: 5rem;
  color: ${({ theme }) => theme.colors.link};
  cursor: pointer;
  animation: ${bounce} 5s infinite;
`

const StyledSectionFlex = styled.div`
  padding: 4rem;
  margin-top: 4rem;
  display: flex;
  justify-content: space-around;
  h2 {
    font-family: 'Principal Trial Semibold';
    margin-bottom: 0.5rem;
  }
  p {
    margin-bottom: 0.5rem;
  }
`

const StyledImgSection = styled.div`
  position: relative;
  min-width: 400px;
`

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(9000deg);
  }
`

const StyledCircleImg = styled.img`
  margin: 0;
  max-width: 400px;
  position: absolute;
  top: 0px;
  left: 200px;
  margin-right: 0.5rem;
  animation: ${rotate} 700s linear infinite;
`

const StyledStarImg = styled.img`
  margin: 0;
  max-width: 400px;
  position: absolute;
  top: 0px;
  right: 0px;
  margin-right: 0.5rem;
  z-index: 999;
`

const StyledLineImg = styled(Img)`
  max-width: 300px;
`

const StyledGoal = styled.div`
  padding: 0 2rem 2rem 2rem;
  margin-top: 4rem;
  border: 1px solid ${({ theme }) => theme.colors.grey2};
  border-radius: 0.5rem;
  h2 {
    font-family: 'Principal Trial Semibold';
  }
`

const StyledTradeLink = styled.a`
  padding: 0.75rem 1.25rem;
  background-color: ${({ theme }) => theme.colors.pink1};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
  margin-right: 1.5rem;
  height: 64px;
  transform: rotate(20deg);

  :hover {
    transform: rotate(20deg);
  }
`

const StyledTradeLinkOutlined = styled(Link)`
  padding: 0.75rem 1.25rem;
  border: 1px solid ${({ theme }) => theme.colors.pink1};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.pink1};
  border-radius: 20px;
  margin-right: 1.5rem;
  height: 64px;
`

const IndexPage = props => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          cardlinks {
            cardButton
            cardDesc
            cardTitle
            type
            slug
          }
        }
      }
      unicornImage: file(relativePath: { eq: "uni_image.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      line: file(relativePath: { eq: "sq.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      noise: file(relativePath: { eq: "noise.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1200) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Home" />
      <StyledBody>
        <StyledTitle>
          <StyledBodyTitle>Automated token exchange.</StyledBodyTitle>
          <span>
            <StyledTradeLink href="https://uniswap.exchange/">
              Swap tokens
            </StyledTradeLink>
            <StyledTradeLinkOutlined to="/docs">
              Read the docs
            </StyledTradeLinkOutlined>
          </span>
        </StyledTitle>
        <StyledDownArrow onClick={() => scrollTo('#down')}>↓</StyledDownArrow>
        <StyledStarImg src={star} alt="star logo" />{' '}
        <NewInfo to="/blog/post-01">
          <NewPill>V2 Announced</NewPill>Learn what’s new ↗
          <StyledUnicornImage fluid={data.unicornImage.childImageSharp.fluid} />
        </NewInfo>
      </StyledBody>

      {/* <Stats>
        <Marquee>
          <p>
            Total Liquidity: <b>$26,024,434</b>
          </p>
          <p>Uniswap ETH Price: $185.83</p>
          <a href="/">Total Liquidity: $26,024,434</a>
          <p>Uniswap ETH Price: $185.83</p>
          <p>Total Liquidity: $26,024,434</p>
          <p>Uniswap ETH Price: $185.83</p>
          <p>Total Liquidity: $26,024,434</p>
          <p>Uniswap ETH Price: $185.83</p>
          <p>Total Liquidity: $26,024,434</p>
          <p>Uniswap ETH Price: $185.83</p>
          <p>Total Liquidity: $26,024,434</p>
          <p>Uniswap ETH Price: $185.83</p>
          <p>Total Liquidity: $26,024,434</p>
          <p>Uniswap ETH Price: $185.83</p>
          <p>Total Liquidity: $26,024,434</p>
          <p>Uniswap ETH Price: $185.83</p>
          <a href="/">Total Liquidity: $26,024,434</a>
          <p>Total Liquidity: $26,024,434</p>
          <p>Uniswap ETH Price: $185.83</p>
        </Marquee>
      </Stats> */}

      <StyledSection id="down">
        <StyledCardsWrapper>
          {data.site.siteMetadata.cardlinks.map((node, index) => {
            console.log(node)
            return <Card key={index} index={index} node={node} />
          })}
        </StyledCardsWrapper>
      </StyledSection>
      <StyledSectionFlex>
        <StyledImgSection>
          <StyledLineImg fluid={data.line.childImageSharp.fluid} />
          <StyledCircleImg src={circle} alt="circle logo" />{' '}
        </StyledImgSection>
        <StyledImgSection>
          <div>
            <h2>Documentation</h2>
            <p>Get started building on Uniswap using the SDK.</p>
            <div>
              <a href="">Get Started</a> • <a href="">Javascript SDK</a> •{' '}
              <a href="">Smart Contracts</a>
            </div>
          </div>
          <div>
            <h2>About</h2>
            <p>Learn more about Uniswap.</p>
            <div>
              <a href="">What is Uniswap?</a> • <a href="">FAQ</a> •{' '}
              <a href="">Whitepaper</a>
            </div>
          </div>
          <div>
            <h2>Community</h2>
            <p>Get help and participate in the community.</p>
            <div>
              <a href="">Twitter</a> • <a href="">Discord</a> •{' '}
              <a href="">Github</a> • <a href="">Reddit</a>
            </div>
          </div>
        </StyledImgSection>
      </StyledSectionFlex>
      <StyledGoal>
        <h2>Our goals</h2>
        <p>
          Uniswap is important infrastructure for the emerging crypto economy
          and enables markets to be created that couldn't have existed before.
          As more assets become tokenized, public blockchains and protocols like
          Uniswap provide the opportunity to establish a new financial stack
          that is more efficient, transparent, and equitable than any system in
          the past.
        </p>
        <div>
          <a href="">Read more about how we are working towards this future.</a>
        </div>
      </StyledGoal>
    </Layout>
  )
}

export default IndexPage
