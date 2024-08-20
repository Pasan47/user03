import { useState } from 'react'

const usePrintName = (name = "") => {

    const [namex , setName] = useState(name);

    const display = () => setName("Hello World");
  return { namex, display};
}

export default usePrintName