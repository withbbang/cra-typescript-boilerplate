import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CommonState } from 'middlewares/reduxToolkits/commonSlice';
import ErrorPopupPT from './ErrorPopupPT';

const ErrorPopupCT = (props: typeErrorPopupCT): JSX.Element => {
  const navigate = useNavigate();

  const [isActive, setIsActive] = useState<boolean>(false);
  const [errorType, setErrorType] = useState<string>('');

  useEffect(() => {
    let code = -1;
    if (props.code !== undefined) code = +props.code;
    else return;

    if (!isNaN(code) && code !== 0) {
      setErrorType('server');
    } else if (isNaN(code) && props.code !== '') {
      setErrorType('client');
    }
    setIsActive(true);
  }, [props.code, props.message]);

  const handleBtn = () => {
    switch (errorType) {
      case 'server':
      case 'client':
        props.handleCodeMessage('', '');
        break;
      default:
        props.handleCodeMessage('', '');
        break;
    }

    setIsActive(false);
    setErrorType('');
  };

  return (
    <ErrorPopupPT
      isActive={isActive}
      message={props.message}
      onBtn={handleBtn}
    />
  );
};

interface typeErrorPopupCT extends CommonState {
  requestForceLogOut: (id: string) => void;
  handleCodeMessage: (code: string, message: string) => void;
}

export default ErrorPopupCT;
