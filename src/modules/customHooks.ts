import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { handleSetIsLoading } from 'middlewares/reduxToolkits/commonSlice';
import { handleSetCatchClause } from './utils';
import { getAPI } from './apis';

/**
 * datas 가져오기 커스텀 훅
 * @param {string} url api url
 * @param {function} cb 에러팝업 콜백
 * @returns
 */
export function useGetDatas(url: string, cb?: () => void) {
  const dispatch = useDispatch();
  const [datas, setDatas] = useState<any[]>([]);

  useEffect(() => {
    (async () => {
      try {
        dispatch(handleSetIsLoading({ isLoading: true }));
        setDatas(await getAPI(url)); // FIXME: 수정 필요
      } catch (error: any) {
        handleSetCatchClause(dispatch, error, cb);
      } finally {
        dispatch(handleSetIsLoading({ isLoading: false }));
      }
    })();
  }, [url, cb]);

  return datas;
}

/**
 * data 가져오기 커스텀 훅
 * @param {string} url api url
 * @param {string} id data id
 * @param {function} cb 에러팝업 콜백
 * @returns
 */
export function useGetData(url: string, id: string, cb?: () => void) {
  const dispatch = useDispatch();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    (async () => {
      try {
        dispatch(handleSetIsLoading({ isLoading: true }));
        setData(await getAPI(url)); // FIXME: 수정 필요
      } catch (error: any) {
        handleSetCatchClause(dispatch, error, cb);
      } finally {
        dispatch(handleSetIsLoading({ isLoading: false }));
      }
    })();
  }, [url, id, cb]);

  return data;
}
