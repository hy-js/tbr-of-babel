import * as React from "react";
import SingleImage from "../../components/SingleImage";
import { images } from "../../constants";

const Page = (props: { index: number }) => {
  return <SingleImage index={props.index} />;
};

export async function getStaticProps(props: { params: { index: string } }) {
  const number = Number.parseInt(props.params.index, 10);
  return {
    props: {
      index: number,
    },
  };
}

export async function getStaticPaths() {
  return {
    paths: images.map((_id, index) => {
      return {
        params: {
          index: `${index}`,
        },
      };
    }),
    fallback: false,
  };
}

export default Page;
