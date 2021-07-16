import axios from 'axios';

export async function getAllCurrencys() {
  const currencyResult = await axios.get('https://economia.awesomeapi.com.br/json/all')
  const { data } = currencyResult
  return data;
}

export async function getSelectCurrencys(from, to) {
  // Receber os valores do estado e colocar na chamada da API
  try {
    const selectedCurrencyResult = await axios.get(`https://economia.awesomeapi.com.br/json/last/${from}-${to}`)
    const { data } = selectedCurrencyResult
    return data;
  } catch(e) {
    if(e.response) {
      const { data: { code } } = e.response
      console.log(code)
    }
  }
}

