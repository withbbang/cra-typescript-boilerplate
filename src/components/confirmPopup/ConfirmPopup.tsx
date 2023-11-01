import React from 'react';
import { PropState } from 'middlewares/configureReducer';
import { CommonState } from 'middlewares/reduxToolkits/commonSlice';
import { connect } from 'react-redux';
import { Action } from 'redux';
import styles from './ConfirmPopup.module.scss';

function mapStateToProps(state: PropState): CommonState {
  return {
    ...state.common,
  };
}

function mapDispatchToProps(dispatch: (actionFunction: Action<any>) => any) {
  return {};
}

function ConfirmPopup({
  isActive,
  confirmMessage,
  confirmType,
  onConfirm,
}: typeConfirmPopup): React.JSX.Element {
  return (
    <>
      {isActive ? (
        <div className={styles.background}>
          <div className={styles.modal_body}>
            <span>{confirmMessage}</span>
            <div>
              <button onClick={() => onConfirm()}>취소</button>
              <button onClick={() => onConfirm(confirmType)}>확인</button>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

interface typeConfirmPopup extends CommonState {
  isActive: boolean;
  confirmMessage: string;
  confirmType: string | undefined;
  onConfirm: (type?: string) => void;
}

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmPopup);
