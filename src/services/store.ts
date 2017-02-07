import { Emitter } from 'tdux'

export interface Todo {
  createdOn: Date
  id: number
  value: string
}

const store = new Set<Todo>()

type Actions = {
  ADD_TODO: Todo
  REMOVE_TODO: Todo
}

class TodoEmitter extends Emitter<Actions>{ }

export const emitter = new TodoEmitter({
  ADD_TODO({ id, value }) {
    store.add(value)
    return value
  },
  REMOVE_TODO({ id, value }) {
    for (const entry of store) {
      if (entry.id === id) {
        store.delete(entry)
      }
    }
    return value
  }
})
