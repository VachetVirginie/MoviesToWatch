import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

class Form extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    error: PropTypes.string
  };

  renderField = data => {
    data.input.className = 'form-control';

    const isInvalid = data.meta.touched && !!data.meta.error;
    if (isInvalid) {
      data.input.className += ' is-invalid';
      data.input['aria-invalid'] = true;
    }

    if (this.props.error && data.meta.touched && !data.meta.error) {
      data.input.className += ' is-valid';
    }

    return (
      <div className={`form-group`}>
        <label
          htmlFor={`movie_${data.input.name}`}
          className="form-control-label"
        >
          {data.input.name}
        </label>
        <input
          {...data.input}
          type={data.type}
          step={data.step}
          required={data.required}
          placeholder={data.placeholder}
          id={`movie_${data.input.name}`}
        />
        {isInvalid && <div className="invalid-feedback">{data.meta.error}</div>}
      </div>
    );
  };

  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field
          component={this.renderField}
          name="title"
          type="text"
          placeholder="Title"
          required={true}
        />
        <Field
          component={this.renderField}
          name="category"
          type="text"
          placeholder="Category"
          required={true}
        />
        <Field
          component={this.renderField}
          name="description"
          type="text"
          placeholder="Description"
          required={false}
        />

        <button  type="submit" className="btn btn-dark">
          Submit
        </button>
        
      </form>
    );
  }
}

export default reduxForm({
  form: 'movie',
  enableReinitialize: true,
  keepDirtyOnReinitialize: true
})(Form);
