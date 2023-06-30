import React from 'react';
import styles from './ErrorPopup.module.scss';

const ErrorPopupPT = ({
  isActive,
  message,
  isNight,
  onBtn
}: typeErrorPopupPT) => {
  return (
    <>
      {isActive && message && message !== '성공' ? (
        <div
          className={
            isNight
              ? [styles.background, styles.night].join(' ')
              : styles.background
          }
        >
          <div className={styles.modal_body}>
            <span>{message}</span>
            <button onClick={onBtn}>확인</button>
          </div>
        </div>
      ) : null}
    </>
  );
};

interface typeErrorPopupPT {
  isActive: boolean;
  message?: string;
  isNight?: boolean;
  onBtn: () => void;
}

export default ErrorPopupPT;
