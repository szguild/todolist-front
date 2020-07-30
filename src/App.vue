<template>
  <div>
    <header>
      <h2 calss="container">To Do List</h2>
    </header>

    <div calss="container">
      <add-form v-bind:value="query" v-on:@submit="onInputTodo"></add-form>
      <!-- FormComponent.vue에서 inputValue에 넣어준 value를 v-bind가 App.vue의 query와 바인딩해줌 -->
      <!-- v-on:@submit => FormComponent.vue에서 $emit으로 전달한 @submit이라는 이벤트를 받아와서 onInputTodo 메서드와 연결 -->
      <tab v-bind:tabs="tabs" v-bind:selected-tab="selectedTab" v-on:@change="onClickTab"></tab>
    </div>

    <div>
      <list v-bind:selected-tab="selectedTab" v-bind:data="todoList"
        v-on:@finish="onClickFinish"
        v-on:@reset="onClickReset"
        v-on:@remove="onClickRemove"></list>
    </div>

  </div>
</template>

<script>
import ToDoForm from './components/ToDoForm'
import ToDoTab from './components/ToDoTab'
import ToDoList from './components/ToDoList'
import ToDoModel from './model/ToDoModel'

export default {
  name: 'App',
  data () {
    return {
      query: '',
      tabs: ['todo', 'finish'],
      selectedTab: '',
      todoList: []
    }
  },
  created () { // vue 인스턴스가 생성된 후에 실행됨
    this.selectedTab = this.tabs[0] // todo 탭 선택
    this.search() // todo list 출력
  },
  components: { // 사용할 컴포넌트 등록
    'add-form': ToDoForm,
    'tab': ToDoTab,
    'list': ToDoList
  },
  methods: {
    search () { // list 검색
      ToDoModel.list(this.selectedTab).then(data => {
        this.todoList = data
      })
    },
    onClickTab (tab) { // tab 선택
      this.selectedTab = tab
      this.search()
    },
    onClickFinish (index) { // todo 완료
      ToDoModel.finish(index)
      this.search()
    },
    onClickReset (index) { // 완료된 todo 리셋
      ToDoModel.reset(index)
      this.search()
    },
    onClickRemove (index) { // 완료된 todo 리셋
      ToDoModel.remove(index)
      this.search()
    },
    onInputTodo (query) { // todo 입력
      ToDoModel.add(query)
      this.selectedTab = this.tabs[0]
      this.search()
    }
  }
}

</script>
