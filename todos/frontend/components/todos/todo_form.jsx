import React from 'react';
import {uniqueId} from '../../util/util';

class TodoForm extends React.Component {

  constructor(props){
    super(props);

    this.state = {title: "", body: ""};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(fieldName){
    return (event) => {
      this.setState( {[fieldName]: event.target.value});

    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const newState = Object.assign({},
      this.state,
      {id: uniqueId()});
    this.props.receiveTodo(newState);
    this.setState({title: '', body: ''});
  }

  render (){
    return (

      <form onSubmit={this.handleSubmit.bind(this)}>
        <input onChange={this.handleChange('title')} type="text" value={this.state.title}/>
        <textarea onChange={this.handleChange('body')} value={this.state.body}></textarea>
        <button>Create Todo!</button>
      </form>
    );
  }

}

export default TodoForm;
