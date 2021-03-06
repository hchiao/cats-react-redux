import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

class CatPage extends React.Component {
  render() {
    return (
      <div className="col-md-8 col-md-offset-2">
        <h1>{this.props.cat.name}</h1>
        <p>breed: {this.props.cat.breed}</p>
        <p>weight: {this.props.cat.weight}</p>
        <p>temperament: {this.props.cat.temperament}</p>
      </div>
    );
  }
};

CatPage.propTypes = {
  cat: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  let cat = {
      name: '',
      breed: '',
      weight: '',
      temperament: '',
      hobby_ids: []
  };

  const catId = ownProps.params.id;

  if (state.cats.length > 0) {
    //cat = Object.assign({}, state.cats.find(cat => cat.id == id))
    cat = Object.assign({}, state.cats[0])
  }

  return {cat: cat};
};

export default connect(mapStateToProps)(CatPage);
