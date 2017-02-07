import React, { Component } from 'react'
import { emitter, Todo } from '../services/store'
import { AddTodo } from './AddTodo'
import { TodoList } from './TodoList'

interface State {
  todos: Todo[]
}

export class App extends Component<void, State> {
  state: State = {
    todos: []
  }
  constructor() {
    super()
    emitter.on('ADD_TODO').subscribe(_ => this.setState({ todos: this.state.todos.concat(_.value) }))
  }
  onAdd(todo: Todo) {
    emitter.dispatch('ADD_TODO', {
      id: todo.id,
      value: todo
    })
  }
  onRemove(todo: Todo) {
    emitter.dispatch('REMOVE_TODO', {
      id: todo.id,
      value: todo
    })
  }
  render() {
    return <div>
      <AddTodo onAdd={this.onAdd.bind(this)} />
      <TodoList onRemove={this.onRemove.bind(this)} todos={this.state.todos} />
    </div>
  }
}
