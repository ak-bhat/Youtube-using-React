import React, { useRef, useState } from "react";

const Demo2 = () => {
  let x = 10;
  const [y, setY] = useState(0)
  const ref = useRef(0)

  return (
    <div className="border border-black w-72">
      <button className="p-2 m-2 bg-green-300" onClick={() => {x=x + 1;console.log(x)}}>Add x</button>
      <span> X= {x}</span>
      <button className="p-2 m-2 bg-green-300" onClick={() => {setY(y+1)}}>Add Y</button>
      <span> Y= {y}</span>
      <button className="p-2 m-2 bg-green-300" onClick={() => {ref.current= ref.current+1}}>Add ref</button>
      <span> Ref= {ref.current}</span>
    </div>
  );
};

export default Demo2;
