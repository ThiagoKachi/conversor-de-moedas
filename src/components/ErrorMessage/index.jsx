import React from 'react';

import { ErrorMessageReq } from './styles';
import sadImg from '../../assets/sadsmile.svg'

export function ErrorMessage() {
  return (
    <ErrorMessageReq>
      <div className="error-message">
        <h1>Não conseguimos realizar essa conversão!</h1>
        <img src={ sadImg } alt="Sad face" />
      </div>
    </ErrorMessageReq>
  )
}
