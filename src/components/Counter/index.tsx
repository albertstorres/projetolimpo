import { useState } from 'react';
import './styles.css';

//DEFININDO TIPO PARA O OBJETO QUE SERÁ PARÂMETRO DA FUNÇÃO COUNTER
type Props = {
    tittle: string;
    initialValue?: number;
}


//RECEBENDO COMO ARGUMENTO O OBJETO DO TIPO PROPS
function Counter({ tittle, initialValue }: Props) {
    const [count, setCount] = useState(initialValue || 0); //CRIANDO UM ESTADO E INICIANDO COM 0 OU INITIALVALUE

    function handleChangeValue(value: number) {
        const nextValue = count + (value);

        if (nextValue < 0) {
            return;
        }

        setCount(nextValue);
    }

    return (
        <div className='container-counter'>
            <h1>
                {tittle}
            </h1>

            <h2>
                Contagem atual: {count}
            </h2>

            <div className='content-counter'>
                <button onClick={() => handleChangeValue(1)}>
                    Incrementar
                </button>
                <button onClick={() => handleChangeValue(-1)}>
                    Decrementar
                </button>
            </div>
        </div>
    );
}

export default Counter;