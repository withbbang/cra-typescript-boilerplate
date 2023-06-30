import React from 'react';
import { PropState } from 'middlewares/configureReducer';
import { CommonState } from 'middlewares/reduxToolkits/commonSlice';
import { connect } from 'react-redux';
import { Action } from 'redux';
import styles from './Loader.module.scss';

const mapStateToProps = (state: PropState): CommonState => {
  return {
    ...state.common
  };
};

const mapDispatchToProps = (dispatch: (actionFunction: Action<any>) => any) => {
  return {};
};

const Loader = ({ isFetching }: CommonState): JSX.Element => (
  <div
    className={styles.background}
    style={
      isFetching !== undefined && isFetching
        ? { display: '' }
        : { display: 'none' }
    }
  >
    <span className={styles.loader}></span>
  </div>
);

export default connect(mapStateToProps, mapDispatchToProps)(Loader);
