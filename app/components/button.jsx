"use client"

import { useState } from "react";

export const ClickButton = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
      setCount(count + 1);
    };
    return (
        <button className="bg-sky-500 px-8 py-4 w-fit mx-auto" onClick={increment}>
        {count}
      </button>
    )
}