import { useState, useEffect } from "react";

function Cadastro() {
  const [input, setInput] = useState("");
  const [tarefas, setTarefas] = useState([]);
  const [nomeUsuario, setNomeUsuario] = useState("");
  const [corFundo, setCorFundo] = useState("#f0f0f0"); // Cor de fundo inicial suave

  // Carregar tarefas e nome do usuário do localStorage ao montar o componente
  useEffect(() => {
    const tarefasStorage = localStorage.getItem("@tarefa");
    const nomeStorage = localStorage.getItem("@nomeUsuario");

    if (tarefasStorage) {
      setTarefas(JSON.parse(tarefasStorage));
    }

    if (nomeStorage) {
      setNomeUsuario(nomeStorage);
    } else {
      const nome = prompt("Por favor, insira seu nome:");
      if (nome) {
        setNomeUsuario(nome);
        localStorage.setItem("@nomeUsuario", nome);
      }
    }
  }, []);

  // Salvar tarefas no localStorage sempre que houver alteração
  useEffect(() => {
    localStorage.setItem("@tarefa", JSON.stringify(tarefas));
  }, [tarefas]);

  // Função para registrar uma nova tarefa
  function handleRegistro(e) {
    e.preventDefault();

    if (input.trim() === "") {
      alert("Por favor, insira uma tarefa válida.");
      return;
    }

    setTarefas([...tarefas, input]);
    setInput("");
  }

  // Função para mudar a cor de fundo da página
  const handleCorChange = (cor) => {
    setCorFundo(cor);
  };

  return (
    <div style={{ backgroundColor: corFundo, minHeight: "100vh", padding: "20px" }}>
      <h1>{nomeUsuario ? `${nomeUsuario}, sua lista de tarefas` : "Lista de Tarefas"}</h1>

      <form onSubmit={handleRegistro}>
        <label>Nome da tarefa: </label>
        <br />
        <input
          placeholder="Digite uma tarefa"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <br />
        <br />
        <button type="submit">Registrar</button>
      </form>
      <br />
      <br />

      <div>
        <h3>Escolha a cor de fundo:</h3>
        <label>
          <input
            type="radio"
            name="cor"
            value="#e0f7fa" // Ciano claro suave
            onChange={() => handleCorChange("#e0f7fa")}
          /> Ciano Claro
        </label>
        <label>
          <input
            type="radio"
            name="cor"
            value="#f3e5f5" // Lilás claro suave
            onChange={() => handleCorChange("#f3e5f5")}
          /> Lilás Claro
        </label>
        <label>
          <input
            type="radio"
            name="cor"
            value="#fff8e1" // Amarelo claro suave
            onChange={() => handleCorChange("#fff8e1")}
          /> Amarelo Claro
        </label>
        <label>
          <input
            type="radio"
            name="cor"
            value="#e8f5e9" // Verde claro suave
            onChange={() => handleCorChange("#e8f5e9")}
          /> Verde Claro
        </label>
      </div>

      <br />
      <br />

      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>{tarefa}</li>
        ))}
      </ul>
    </div>
  );
}

export default Cadastro;