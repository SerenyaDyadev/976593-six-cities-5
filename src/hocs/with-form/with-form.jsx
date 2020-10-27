import React, {PureComponent} from "react";
import PropTypes from "prop-types";

const withForm = (Component) => {
  return class WithForm extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        id: null,
        name: `Max`,
        picture: `img/avatar-max.jpg`,
        rating: null,
        text: null,
        date: new Date(),
      };

      this._handleRatingChange = this._handleRatingChange.bind(this);
      this._handleTextFieldChange = this._handleTextFieldChange.bind(this);
      this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleSubmit(evt) {
      evt.preventDefault();
    }

    _handleRatingChange(evt) {
      this.setState({
        rating: evt.target.value,
      });
    }

    _handleTextFieldChange(evt) {
      this.setState({
        text: evt.target.value,
      });
    }

    render() {
      return <Component
        {...this.props}
        onSubmit={this._handleSubmit}
        onRatingChange={this._handleRatingChange}
        onTextFieldChange={this._handleTextFieldChange}
      />;
    }
  };
};


withForm.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default withForm;
