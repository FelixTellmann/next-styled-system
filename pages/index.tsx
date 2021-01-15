import { FC, useState } from "react";
import { Element } from "../src";


const H2 = Element('h2')

type IndexProps = {};

export const Index: FC<IndexProps> = ({}) => {
  const [test, setTest] = useState(100);
  const [test2, setTest2] = useState(2);
  
  return <>
    <H2 fz={40} onClick={() => { setTest(test+100) }}>Hello</H2>
    <H2 className={'red'}  fz={40} color={`red.${test}`}>Hello</H2>
    <H2 className={'red'}  fz={40} color={`green.${test}`}>Hello</H2>
    <H2 className={'red'}  fz={40} color={`purple.${test}`}>Hello</H2>
    <H2 className={'red'}  fz={40} color={`blue.${test}`}>Hello</H2>
    <H2 useClass="web" className={'red'}  fz={40} color={`Blue.${test}`} p={20}>Hello</H2>
    <H2 useJsx className={'red'}  fz={40} color={`Blue.${test}`} p={20}>Hello</H2>
    <H2 className={'red'}  fz={40} color={`yellow.${test}`}>Hello</H2>
    <H2 className={'red'}  fz={40} color={`pink.${test}`}>Hello</H2>
    <H2 p={test2} fz={40} onClick={() => { setTest2(test2+1) }}>Hello</H2>
  </>;
  
}
export default Index; 