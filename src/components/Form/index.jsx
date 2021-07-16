import React, { useEffect, useState } from 'react';

import Modal from 'react-modal';

import { ModalContent } from '../Modal'
import { ErrorMessage } from '../ErrorMessage';

import { Container } from './styles';
import dollarImg from '../../assets/dollar.svg';
import financeImg from '../../assets/finance.svg';
import convertImg from '../../assets/convert.png';

import { getAllCurrencys, getSelectCurrencys } from '../../services';
import { ModalContext } from '../../context/ModalContext';

export function Form() {
  const [allCurrency, setAllCurrency] = useState([])
  const [inputValue, setInputValue] = useState(1)
  const [convert, setConvert] = useState('BRL')
  const [convertTo, setConvertTo] = useState('BRL')
  const [valueConverted, setValueConverted] = useState(0)
  const [modalIsOpen, setIsOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState(false);

  useEffect(() => {
    async function getAllCurrencysFromApi() {
      const getAll = await getAllCurrencys();
      setAllCurrency(Object.values(getAll))
    }
    Modal.setAppElement('body');

    getAllCurrencysFromApi()
  }, [])

  // Cria funcao que chama a api(getSelectCurrencys), pega o bid e faz a conta, após, chama essa função no clique do botão
  async function handleConvertCurrencys(e) {
    e.preventDefault();
    try {
      const convertedCurrencys = await getSelectCurrencys(convert, convertTo)
      const convertCurrencyToArray = Object.values(convertedCurrencys)
  
      convertCurrencyToArray.map(({ bid }) => setValueConverted(inputValue * bid))
  
      setIsOpen(true);
      setErrorMessage(false)
    } catch(e) {
      setErrorMessage(true);
    }
  }

  const modalValues = {
    valueConverted,
    modalIsOpen,
    setIsOpen,
    setInputValue,
    inputValue,
    convert,
    convertTo,
    setConvert,
    setConvertTo
  }

  return (
    <ModalContext.Provider value={modalValues}>
      <ModalContent />
      <Container>
        <form>
          <img className="finance-image" src={financeImg} alt="Finance" />
          <label htmlFor="currencyValue">
            <input 
              type="number" 
              id="currencyValue" 
              placeholder="Valor a ser convertido"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
          </label>

          <select id="resetSelect1" name="valueTo" onChange={(e) => setConvert(e.target.value)}>
            <option value="BRL">Real Brasileiro</option>
            {allCurrency.map(({ name, code }, index ) => (
              <option 
              key={ index }
              value={ code }
              >
                { name.replace('/Real Brasileiro', '') }
              </option>
            ))}
          </select>

          <span> <img className="convert-image" src={ convertImg } alt="convert" /> </span>

          <select id="resetSelect2" name="convertValue" onChange={(e) => setConvertTo(e.target.value)}>
            <option value="BRL">Real Brasileiro</option>
            {allCurrency.map(({ name, code }, index ) => (
              <option 
                value={ code }
                key={ index }
              >
                { name.replace('/Real Brasileiro', '') }
              </option>
            ))}
          </select>

          <button onClick={handleConvertCurrencys}>Converter</button>
          <img className="dollar-image" src={ dollarImg } alt="Dollar" />
        </form>
      </Container>
      {errorMessage && <ErrorMessage />}
    </ModalContext.Provider>
  )
}