import React, { Component, FormEvent } from 'react'
import { Todo } from '../services/store'

interface Props {
  onAdd(todo: Todo): any
}

interface State {
  idCounter: number
  value: string
}

export class AddTodo extends Component<Props, State> {
  state: State = {
    idCounter: 0,
    value: ''
  }
  onChange(e: FormEvent<HTMLInputElement>) {
    e.preventDefault()
    this.setState({ value: e.currentTarget.value })
  }
  onSubmit() {
    this.onAdd({
      id: this.state.idCounter,
      value: this.state.value
    })
    this.setState({ idCounter: idCounter + 1 })
  }
  render() {
    return <form onSubmit={this.onSubmit.bind(this)}>
      <input onChange={this.onChange.bind(this)} type='text' value={this.state.value} />
    </form>
  }
}
