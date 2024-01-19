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
        <a target="_blank" href="https://wa.me/31997100742">
          <button
            target="_blank"
            href="https://wa.me/31992837879"
            className="btnwpp"
          >
            WHATSAPP
            <FaWhatsapp className="iconwpp" />
          </button>
        </a>
      </div>
    </div>
  );
}
