import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamCreate extends React.Component {
  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
      <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(
  null,
  { createStream }
)(StreamCreate);


// class StreamCreate extends React.Component {
//   renderError(meta) {
//     if (meta.touched && meta.error) {
//       return (
//         <div className="ui error message">
//           <div className="header">{meta.error}</div>
//         </div>
//       );
//     }
//   }

//   renderInput = formProps => {
//     const className = `field ${
//       formProps.meta.error && formProps.meta.touched ? 'error' : ''
//     }`;
//     return (
//       <div className={className}>
//         <label>{formProps.label}</label>
//         <input {...formProps.input} autoComplete="off" />
//         {this.renderError(formProps.meta)}
//       </div>
//     );
//   };

//   onSubmit = formValues => {
//     this.props.createStream(formValues);
//   };

//   render() {
//     return (
//       <form
//         onSubmit={this.props.handleSubmit(this.onSubmit)}
//         className="ui form error"
//       >
//         <Field name="title" component={this.renderInput} label="Enter Title" />
//         <Field
//           name="description"
//           component={this.renderInput}
//           label="Enter Description"
//         />
//         <button className="ui button primary">Submit</button>
//       </form>
//     );
//   }
// }

// const validate = formValues => {
//   const errors = {};
//   if (!formValues.title) {
//     errors.title = 'You must enter a title';
//   }
//   if (!formValues.description) {
//     errors.description = 'You must enter a description';
//   }
//   return errors;
// };

// const formWrapped = reduxForm({
//   form: 'streamCreate',
//   validate
// })(StreamCreate);

// export default connect(
//   null,
//   { createStream }
// )(formWrapped);
