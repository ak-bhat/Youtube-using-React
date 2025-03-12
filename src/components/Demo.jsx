import { useMemo, useState } from "react";
import { findPrime } from "../utils/helper";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDark, setIsDark] = useState(false)

  const prime = useMemo(()=>findPrime(text),[text])   // Memoized
//   const prime = findPrime(text)
  return (
    <div className={"border border-black " + (isDark==false?"bg-white":"bg-black text-white")}>
      <input
        type="number"
        className="broder border-black p-2 m-2 bg-red-400"
        value={text}
        onChange={(e)=>setText(e.target.value)}
      />
      <h1>nth Prime: {prime}</h1>
      <button className="p-2 m-10 bg-green-400" onClick={()=>setIsDark(!isDark)}>Toggle</button>
    </div>
  );
};

export default Demo;
