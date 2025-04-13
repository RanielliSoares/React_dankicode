import React, { useState } from 'react';


function Contador() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>Você clicou {count} times</p>
      <button onClick={() => setCount(count + 1)}>

        Contar

      </button>

    </div>

  );

}

export default Contador;