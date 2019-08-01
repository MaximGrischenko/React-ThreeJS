import AppLayout from '../components/app.component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions/collection-actions';

const mapStateToProps = ({ scene, controls }) => ({
  collection: scene.collection,
  selected: controls.selected
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(actions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AppLayout);