import React, { useEffect } from 'react';
import { CommonState } from 'middlewares/reduxToolkits/commonSlice';
import { useGetDatas } from 'modules/customHooks';
import IndexPT from './IndexPT';

function IndexCT({}: typeIndexCT): React.JSX.Element {
  // const docs = useGetDatas('abcdefg');

  // useEffect(() => {
  //   console.log(docs);
  // }, [docs]);

  return <IndexPT />;
}

interface typeIndexCT extends CommonState {}

export default IndexCT;
