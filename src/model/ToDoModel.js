export default {
  data: [
  ],
  list (tab) {
    return new Promise(resolve => {
      if (tab === 'todo') resolve(this.data.filter(item => item.state === true))
      if (tab === 'finish') resolve(this.data.filter(item => item.state === false))
    })
  },
  add (todo = '') {
    todo = todo.trim()
    if (!todo) return

    const state = true
    this.data.push({todo, state})
  },
  finish (index) {
    this.data.filter(item => item.state === true)[index].state = false
  },
  reset (index) {
    this.data.filter(item => item.state === false)[index].state = true
  },
  remove (todo) {
    this.data = this.data.filter(item => item.todo !== todo)
  }
}
