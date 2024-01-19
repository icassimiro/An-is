import anelone from "./images/anelone.png";
import aneltwo from "./images/aneltwo.png";
import anelthree from "./images/anelthree.png";
export default function Itens() {
  return (
    <div className="alldiv">
      <div className="divanel">
        <img className="img2" src={aneltwo}></img>
        <div className="divdescription">
          <h2 className="subanel">
            ANEL DE VEDAÇÃO 6895 PARA RESPIRADOR 3800 - 3M
          </h2>
          <div className="divprice">
            <h3 className="rs">R$</h3>
            <h3 className="price">7,99</h3>
          </div>
          <button className="btnbuy">COMPRAR PRODUTO</button>
        </div>
      </div>
      <div className="divanel">
        <img className="img1" src={anelone}></img>
        <div className="divdescription">
          <h2 className="subanel">
            ANEL DE VEDAÇÃO PARA BACIA SANITÁRIA NOVA GERAÇÃO CENSI ÚNICO
          </h2>
          <div className="divprice">
            <h3 className="rs">R$</h3>
            <h3 className="price">19,99</h3>
          </div>
          <button className="btnbuy">COMPRAR PRODUTO</button>
        </div>
      </div>

      <div className="divanel">
        <img className="img3" src={anelthree}></img>
        <div className="divdescription">
          <h2 className="subanel">ANEL DE VEDAÇÃO ORING ENCAPSULADO</h2>
          <div className="divprice">
            <h3 className="rs">R$</h3>
            <h3 className="price">2,99</h3>
          </div>
          <button className="btnbuy">COMPRAR PRODUTO</button>
        </div>
      </div>
    </div>
  );
}
