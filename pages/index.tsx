import { createRef, FC, useEffect, useState } from "react";
import { Element, HTMLElement } from "src";

const Div = Element("div");
const H1 = Element("h1", true);

const Tester = (props) => {
  return <>
    <Div position={`absolute`} backgroundColor={`deeppink`}>{props.children}</Div>
  </>;
};


export const Index: FC = () => {
  
  const h1ref = createRef();
  const [test2, setTest2] = useState(1);
  
  useEffect(() => {
    console.log(h1ref.current);
  });
  
  return <>
    <Div mx={`auto`} p={4}>test</Div>
    <H1 backgroundColor={"red"}
        ref={h1ref}
        padding={test2}
        border="1px solid red"
        m="auto"
        w={[`100%`, `50%`]}
        d="flex"
        content={`This is funny!`}
        onClick={() => { setTest2(test2 + 1); }}>aasd</H1>
    <HTMLElement HTMLTag={`div`} p={2}>Hello</HTMLElement>
    {/*<TEST p={test2} border="1px solid red" m="auto" w={[`100%`, `50%`]} d="flex" onClick={() => { setTest2(test2 + 1); }}>aasd</TEST>
    <TEST p={4} border="1px solid red" m="auto" w={[`100%`, `50%`]} d="flex" onClick={() => { setTest2(test2 + 1); }}>aasd</TEST>*/}
    
    
    
    <Tester>Helllo</Tester>
    <Tester>Helllo</Tester>
    <Tester>Helllo</Tester>
    <Tester>Helllo</Tester>
    <Tester>Helllo</Tester>
    <Tester>Helllo</Tester>
    <div className="w-50">asdasd</div>
    <div className="w-60">asdasdasd</div>
    <style jsx>{`
      @media screen and (min-width: 600px) {
        .w-50 {
          width: 50%;
          padding: 2px;
        }
      }

      .w-50 {
        background-color: deeppink;
      }

      .w-60 {
        background-color: deeppink;
      }
    `}</style>
  </>;
};

export default Index;