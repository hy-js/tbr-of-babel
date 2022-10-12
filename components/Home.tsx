import Head from "next/head"
import Image from "next/image"

import { breakpoints } from "../utils/breakpoints"
import styled, { keyframes } from "styled-components"

export default function Home() {
  return (
    <>
      <Head>
        <title>TBR of Babel</title>
        <meta name='description' content='TBR of Babel | Home' />
      </Head>
      <PageWrapper>
        <HeaderWrapper>
          <Image
            src='/tower.jpg'
            alt='Tower of Babel illustration'
            width={452}
            height={324}
          />
          <DescriptionWrapper>
            <h1>TBR of Babel</h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis
              numquam odio incidunt unde saepe aliquam reprehenderit a ipsum
              aspernatur eaque, soluta culpa dolore! Optio est, assumenda
              officia atque ratione architecto!
            </p>
            {/* <a href='/create'>Create Shelf→</a> */}
          </DescriptionWrapper>
        </HeaderWrapper>
        {/* <BabelWrapper>
          <h2>Public Shelves:</h2>
          <div className='shelves'>
            {Array.apply(null, { length: 15 }).map((e, i) => (
              <span className='shelf' key={i}>
                {i + 1}
              </span>
            ))}
          </div>
        </BabelWrapper> */}
      </PageWrapper>
    </>
  )
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  * {
    color: #0032a1;
  }

  a {
    color: #20d152;
  }
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

const BabelWrapper = styled.div`
  h2 {
    margin-top: 0rem;
    margin-bottom: 1rem;
  }

  .shelves {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  .shelf {
    background-color: #f0e8dd;
    border: 1px solid black;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 0.8rem;
    padding-right: 0.8rem;
    margin: 0.5rem;
  }

  .shelf:hover {
    background-color: antiquewhite;
  }
`
