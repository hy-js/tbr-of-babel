import Head from "next/head"
import Image from "next/image"
import { breakpoints } from "../utils/breakpoints"
import styled from "styled-components"

export default function Create() {
  return (
    <>
      <Head>
        <title>TBR of Babel</title>
        <meta name='description' content='TBR of Babel | Explore' />
      </Head>
      <PageWrapper>
        <HeaderWrapper>
          <a href='/'>
            <Image
              src='/babel-people.jpg'
              alt='Destruction of the Tower of Babel illustration'
              width={452}
              height={324}
            />
          </a>
          <DescriptionWrapper>
            <h1>Explore</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              numquam odio incidunt unde saepe aliquam reprehenderit a ipsum
              aspernatur eaque, soluta culpa dolore! Optio est, assumenda
              officia atque ratione architecto!
            </p>
          </DescriptionWrapper>
        </HeaderWrapper>
      </PageWrapper>
    </>
  )
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
const HeaderWrapper = styled.div`
  max-width: 600px;
  padding-top: 7.5vh;
  padding-bottom: 2rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: ${breakpoints.s}px) {
    flex-direction: column;
  }
`

const DescriptionWrapper = styled.div`
  max-width: 200px;
  margin: 0 2rem;

  p {
    margin-top: 0rem;
  }
  a {
    display: inline-block;
    padding: 0.25rem 0;
  }
  @media (max-width: ${breakpoints.s}px) {
    max-width: 70vw;
    width: 250px;
    margin: 0rem auto;
    margin-bottom: 1rem;

    h1 {
      padding-top: 2rem;
    }
  }
`

const InputWrapper = styled.div`
  max-width: 500px;

  .results {
    display: flex;
    justify-content: space-between;
  }

  .in-shelf {
    color: #05a100;
  }
`
const ListWrapper = styled.div`
  ul {
    margin: 0.2rem;
    padding: 0;
    list-style-type: none;
  }
  .book {
    padding: 0.25rem;
  }

  .book:hover {
    background-color: antiquewhite;
  }
`
