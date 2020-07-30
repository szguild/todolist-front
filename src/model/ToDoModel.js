export default {
  data: [
    {todo: '할 일 1', state: true},
    {todo: '할 일 2', state: false},
    {todo: '할 일 3', state: true}
  ],
  list (tab) {
    return new Promise(resolve => {
      if (tab === 'todo') resolve(this.data.filter(data => data.state === true))
      if (tab === 'finish') resolve(this.data.filter(data => data.state === false))
    })
  },
  add (todo = '') {
    todo = todo.trim()
    if (!todo) return

    const state = true
    this.data.push({todo, state})
  },
  finish (index) {
    this.data.filter(data => data.state === true)[index].state = false
  },
  reset (index) {
    this.data.filter(data => data.state === false)[index].state = true
  },
  remove (row) {
    this.data.splice(this.data.indexOf(row), 1)
    console.log(this.data)
  },
  addtest (row) {
    console.log('test')
  }
}
