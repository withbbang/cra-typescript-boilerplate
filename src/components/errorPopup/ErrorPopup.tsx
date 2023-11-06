import React, { useEffect, useRef } from 'react';
import { PropState } from 'middlewares/configureReducer';
import { CommonState } from 'middlewares/reduxToolkits/commonSlice';
import { connect } from 'react-redux';
import { Action } from 'redux';
import styles from './ErrorPopup.module.scss';

function mapStateToProps(state: PropState): CommonState {
  return {
    ...state.common,
  };
}

function mapDispatchToProps(dispatch: (actionFunction: Action<any>) => any) {
  return {};
}

function ErrorPopup({
  isErrorPopupActive,
  message,
  handleErrorBtn,
}: CommonState): React.JSX.Element {
  const buttonRef = useRef(
    null,
  ) as React.MutableRefObject<HTMLButtonElement | null>;

  useEffect(() => {
    buttonRef.current?.focus();
  }, [isErrorPopupActive]);

  return (
    <div
      className={styles.background}
      style={
        isErrorPopupActive !== undefined && isErrorPopupActive
          ? { display: '' }
          : { display: 'none' }
      }
    >
      <div className={styles.modalBody}>
        <span>{message}</span>
        <div>
          <button onClick={handleErrorBtn} ref={buttonRef}>
            OK
          </button>
        </div>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(ErrorPopup);
