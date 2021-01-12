import { FC, useState } from "react";
import { NamedElement, VariantElement,Element } from "../src";

const H1 = VariantElement('h1')
const H3 = NamedElement('h1', 'MyClassNameSpecial', {
  m: 2
})
const H2 = Element('h2')

type IndexProps = {};

export const Index: FC<IndexProps> = ({}) => {
  const [test, setTest] = useState(100);
  const [test2, setTest2] = useState(2);
  
  return <>
    <H1 fz={40} onClick={() => { setTest(test+100) }}>Hello</H1>
    <H2 className={'red'}  fz={40} color={`red.${test}`}>Hello</H2>
    <H2 className={'red'}  fz={40} color={`green.${test}`}>Hello</H2>
    <H2 className={'red'}  fz={40} color={`purple.${test}`}>Hello</H2>
    <H2 className={'red'}  fz={40} color={`blue.${test}`}>Hello</H2>
    <H2 className={'red'}  fz={40} color={`Blue.${test}`}>Hello</H2>
    <H2 className={'red'}  fz={40} color={`yellow.${test}`}>Hello</H2>
    <H2 className={'red'}  fz={40} color={`pink.${test}`}>Hello</H2>
    <H3 p={test2} fz={40} onClick={() => { setTest2(test2+1) }}>Hello</H3>
  </>;
  
}
export default Index; 