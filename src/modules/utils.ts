import {
  handleMessage,
  handleSetErrorBtn,
  handleSetIsErrorPopupActive,
} from 'middlewares/reduxToolkits/commonSlice';
import { Dispatch } from 'react';
import { AnyAction } from 'redux';

/**
 * catch 절 처리 모듈
 * @param {Dispatch<AnyAction>} dispatch 함수형 컴포넌트에서만 선언이 가능하여 파라미터로 전달받음. store action을 일으키기 위해 필요
 * @param {any} error 에러 객체
 * @param {function} cb 에러팝입 확인 버튼 추가 콜백함수
 */
export function handleSetCatchClause(
  dispatch: Dispatch<AnyAction>,
  error: any,
  cb?: () => void,
) {
  dispatch(handleMessage({ message: error.message }));
  dispatch(handleSetIsErrorPopupActive({ isErrorPopupActive: true }));
  dispatch(
    handleSetErrorBtn({
      callback: () => {
        dispatch(handleSetIsErrorPopupActive({ isErrorPopupActive: false }));
        dispatch(handleMessage({ message: '' }));
        cb?.();
      },
    }),
  );
}
