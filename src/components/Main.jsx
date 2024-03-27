import React, { useState } from 'react';
import '/globals.css'; 

export default function Main(){
    const [nome, setNome] = useState("");
    const [tel, setTel] = useState();
    const [listaContatos, setListaContatos] = useState([]); //Colchetes representa estado vazio.
    

    const registrar = (event) => {
        event.preventDefault(); 
        setNome("");
        setTel("");
        

        setListaContatos([...listaContatos,
            {
                nomeSalvo: nome,
                telefoneSalvo: tel
            }
        ]);
    };

    console.table(listaContatos);

    return(
        <main>
            <form className="formulario" action=''>
                <div className="input-wrapper">
                    <label htmlFor='nome'>Nome:</label>
                    <input 
                        type="text"
                        name="nome"
                        id="nome" 
                        value={nome}
                        onChange={(event)=> setNome(event.target.value)}
                    />
                </div>
                <div className="input-wrapper">
                    <label htmlFor='tel'>Telefone:</label>
                    <input 
                        type="text"
                        name="tel"
                        id="tel" 
                        value={tel}
                        onChange={(event)=> setTel(event.target.value)} //onChange é responsável por disparar uma função a cada mudança no input. event.target.value = É o valor digitado na input.
                    />
                </div>
             
                <div className='info'>
                <h6> Nome: {nome}, Telefone: {tel} </h6>
                
                </div>
                
                
            </form>
            <div className='button-wrapper'>
                 <button type="button" onClick={registrar}>Salvar</button>
                </div>
        </main>
    );
}
