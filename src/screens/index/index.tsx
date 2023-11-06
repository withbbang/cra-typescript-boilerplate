import { connect } from 'react-redux';
import { PropState } from 'middlewares/configureReducer';
import { Action } from '@reduxjs/toolkit';
import { CommonState } from 'middlewares/reduxToolkits/commonSlice';
import IndexCT from './IndexCT';

function mapStateToProps(state: PropState): CommonState {
  return { ...state.common };
}

function mapDispatchToProps(dispatch: (actionFunction: Action<any>) => any) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexCT);
