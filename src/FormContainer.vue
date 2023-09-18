<template>
  <TitleText></TitleText>
  <div class="container">
    <ul class="list-group">
      <li class="list-group-item" v-for="item in items" :key="item.id">
        <div class="container">
          <FormView :title="item.title" :description="item.description" :subText="item.subText" :url="item.url"></FormView>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import TitleText from './components/Title-text.vue'
import FormView from './components/Form-view.vue'

export default {
  components: {
    TitleText,
    FormView
  },
  data() {
    return {
      items: [
        {id: 1, title: "1. INPUT YOUR CODE HERE", description: "メソッドの1行目を入力してください。", subText: "例) func fetchUserData(id: Int, name: String) -> UserModel { ", url: null },
        {id: 2, title: "2. INPUT YOUR CODE HERE", description: "メソッドの1行目を入力してください。", subText: "例) func fetchUserData(id: Int, name: String) -> UserModel { ", url: null },
      ]
    }
  }
}
</script>