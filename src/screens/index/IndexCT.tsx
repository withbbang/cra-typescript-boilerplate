import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CommonState } from 'middlewares/reduxToolkits/commonSlice';
import IndexPT from './IndexPT';

const IndexCT = ({
  handleLoaderTrue,
  handleLoaderFalse
}: typeIndexCT): JSX.Element => {
  const navigate = useNavigate();

  // 로그인 여부 판단 훅
  useEffect(() => {
    handleLoaderTrue();
    handleLoaderFalse();
  }, []);

  return <IndexPT />;
};

interface typeIndexCT extends CommonState {
  handleLoaderTrue: () => void;
  handleLoaderFalse: () => void;
}

export default IndexCT;
