import { useState } from "react"; /* importação da função de estado da biblioteca react */

function NavBar({nome , cor, paragrafo}){
    const [texto, setTexto] = useState("Título inicial");
    /* primeiro parametro passa o nome do estado, o segundo é uma função que vai atualizar esse estado, usestate é para dizer como o método inicializa */
    const [inputTexto, setInputTexto] = useState("");

    function clickBtn(){
        setTexto(inputTexto); /* o setTexto vai ser atualizado para o que eu estiver colocando no meu inputTexto */
    }

    return (
        <div>
            <h1 style={{color : cor}}>
                {texto} {/* state definido fora do return */}
            </h1>

            { paragrafo  ? 
            <p>
                testando condições com if e else 
            </p>
            : 
            <p>
                "else" sendo acionado aqui 
            </p>
            }

            <button onClick={clickBtn}>
                mudar
            </button> {/*botão com a função de click para atualizar o settexto do status definido anteriormente */}

            <input value={(inputTexto)} onChange={(e) => {setInputTexto(e.target.value)}} type="text" /> {/*"e" é um parametro e usamos ele para adicionar com o .target.value o valor que for colocado no input ao setInputTexto que é onde será atualizado o valor do inputText */}

        </div> /*para colocar mais de um elemento do return tem que ser colocado dentro de uma div */
    );
};

/*obs:
    sempre que for colocar tags que não tem fechamento, deverá ser adicionado a contra barra */

export default NavBar /*exportação da função definida como NavBar */