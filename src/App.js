import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateUser } from './actions/user-actions';

class App extends Component {
  onUpdateUser = event => {
    this.props.onUpdateUser(event.target.value);
  };
  render() {
    console.log(this.props);
    return (
      <section className="container">
        <input onChange={this.onUpdateUser} />
        <p className="blue-text">
          {this.props.user ? this.props.user : 'No User'}
        </p>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user,
});

const mapDispatchToProps = {
  onUpdateUser: updateUser,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
