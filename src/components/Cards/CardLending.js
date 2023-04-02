import React, { useEffect } from "react";
import ModalDevolver from "../Modal/Livro/ModalDevolver.js";
import ModalRenovar from "../Modal/Livro/ModalRenovar.js";
import "../../styles/Cards.css";
import "../../styles/Botoes.css";

function CardBook(props) {

  return (
    <div id="card-main-container">
      <div className="card-main">
        {props.days_delay > 0 ? (
          <p className="titulo-card-main com-atraso">{props.user_name}</p>
        ) : (
          <p className="titulo-card-main sem-atraso">{props.user_name}</p>
        )}
        <p className="info-card-main">E-mail: {props.user_email}</p>
        <p className="info-card-main">Telefone: {props.user_phone}</p>
        <p className="info-card-main">Livro: {props.book_name}</p>
        <p className="info-card-main">Código do empréstimo: {props.lending_id}</p>
        <p className="info-card-main">Emprestado em: {props.withdraw_date}</p>
        <p className="info-card-main">Previsão: {props.return_prediction}</p>
        <p className="info-card-main">Dias de atraso: {props.days_delay}</p>
        <p className="info-card-main">Emprestado por: {props.librarian_name}</p>
        <p className="info-card-main">Multa: R$ {props.penalty},00</p>
        <div className="btn-card-container">
          <div className="btn-excluir-container">
            <ModalDevolver lending_id={props.lending_id} />
          </div>
          <div className="btn-renovar-container">
            <ModalRenovar id={props.lending_id} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardBook;
