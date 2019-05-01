import React from 'react';
import { Field, reduxForm } from 'redux-form';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import Moment from 'moment';
import momentLocalizer from 'react-widgets-moment';
import 'react-widgets/dist/css/react-widgets.css';

Moment.locale('en');
momentLocalizer();

class CrawlForm extends React.Component {
  renderError(meta) {
    if (meta.touched && meta.error) {
      return (
        <div className="ui error message">
          <div className="header">{meta.error}</div>
        </div>
      );
    }
  }

  renderInput = formProps => {
    const className = `field ${
      formProps.meta.error && formProps.meta.touched ? 'error' : ''
    }`;
    return (
      <div className={className}>
        <label>{formProps.label}</label>
        <textarea
          {...formProps.input}
          autoComplete="off"
          rows={formProps.rows}
        />
      </div>
    );
  };

  renderDateTimePicker = ({ input: { onChange, value }, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
    return (
      <div className={className}>
        <label>Pick Date</label>
        <DateTimePicker
          onChange={onChange}
          dropUp
          min={new Date()}
          value={!value ? null : new Date(value)}
        />
      </div>
    );
  };

  onSubmit = formValues => {
    this.props.onSubmit(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className="ui form error"
      >
        <Field
          name="name"
          component={this.renderInput}
          label="Enter Name of Your Crawl"
          rows="1"
        />
        <Field
          name="description"
          component={this.renderInput}
          label="Enter description"
          rows="5"
        />
        <Field
          name="start_time"
          showTime={false}
          component={this.renderDateTimePicker}
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = formValues => {
  const errors = {};
  if (!formValues.name) {
    errors.name = 'You must enter a name';
  }
  if (!formValues.description) {
    errors.description = 'You must enter a description';
  }
  if (!formValues.start_time) {
    errors.start_time = 'You must enter a date';
  }
  return errors;
};

export default reduxForm({
  form: 'crawlForm',
  validate
})(CrawlForm);
