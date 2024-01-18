import wpp from "./images/wpp.png";
export default function Infos() {
  return (
    <div className="allinfo">
      <div className="divinfo">
        <h2 className="infos">REDES SOCIAIS</h2>
        <img className="wppimg" src={wpp}></img>
      </div>
      <div className="divinfowpp">
        <h2 className="infos">PRECISA DE AJUDA?</h2>

        <button className="btnwpp">WHATSAPP</button>
      </div>
    </div>
  );
}
