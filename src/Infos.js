import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

export default function Infos() {
  return (
    <div className="allinfo">
      <div className="divinfo">
        <h2 className="infos">REDES SOCIAIS</h2>
        <FaInstagram className="icons" />
      </div>
      <div className="divinfowpp">
        <h2 className="infos">PRECISA DE AJUDA?</h2>

        <button className="btnwpp">
          WHATSAPP
          <FaWhatsapp className="iconwpp" />
        </button>
      </div>
    </div>
  );
}
