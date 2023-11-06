import React from 'react';
import { PropState } from 'middlewares/configureReducer';
import { CommonState } from 'middlewares/reduxToolkits/commonSlice';
import { connect } from 'react-redux';
import { Action } from 'redux';
import styles from './Loader.module.scss';

function mapStateToProps(state: PropState): CommonState {
  return {
    ...state.common,
  };
}

function mapDispatchToProps(dispatch: (actionFunction: Action<any>) => any) {
  return {};
}

function Loader({ isLoading }: CommonState): React.JSX.Element {
  return (
    <div
      className={styles.background}
      style={
        isLoading !== undefined && isLoading
          ? { display: '' }
          : { display: 'none' }
      }
    >
      <span className={styles.loader} />
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
