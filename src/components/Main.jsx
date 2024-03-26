import React, { useState } from 'react';
import '/globals.css'; 

export default function Main(){
    const [nome, setNome] = useState("");
    const [tel, setTel] = useState("");
    const [listaContatos, setListaContatos] = useState([]);
    

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
                        onChange={(event)=> setTel(event.target.value)}
                    />
                </div>
            </form>
            <div className='button-wrapper'>
                 <button type="button" onClick={registrar}>Salvar</button>
                </div>
        </main>
    );
}
