import React, { StatelessComponent } from 'react'
import { Todo } from '../services/store'

interface Props {
  onRemove(todo: Todo): any
  todos: Todo[]
}

export const TodoList: StatelessComponent<Props> = props =>
  <ul className='TodoList'>
    {props.todos.map(_ => <li key={_.id}>
      {_.value}
      <a className='RemoveButton' href='#' onClick={props.onRemove(_)} title='Remove Todo'>✕</a>
    </li>)}
  </ul>
