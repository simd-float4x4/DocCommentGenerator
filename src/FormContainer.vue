<template>
  <TitleText></TitleText>
  <div class="container">
    <ul class="list-group">
      <li class="list-group-item" v-for="item in items" :key="item.id">
        <div class="container" style="white-space: pre-wrap;">
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
        {id: 1, title: "1. INPUT YOUR CODE HERE", description: "メソッドの1行目を入力してください。\n※ なお、Opening Brackets( { }まで必ず含めてください。)", subText: "例) func fetchUserData(id: Int, name: String) -> UserModel { ", url: null },
        {id: 2, title: "2. INPUT YOUR DESCRIPTION HERE", description: "このメソッドはどんなメソッドですか？", subText: "例) 引数の値でResponse構造体を作成する。引数がnilの場合はランダムに値を作成する。", url: null },
        {id: 3, title: "3. CHECK YOUR VARIABLE HERE", description: "生成された引数の一覧が正しいか確認してください。", subText: "なお、+ボタン -ボタンで要素の数を調整できます。", url: null },
        {id: 4, title: "4. CHECK YOUR RETURN VALUE", description: "帰り値/戻り値/リターン値が存在していることを確認してください。", subText: "例）　return WeatherModel 　// 帰り値が必要", url: null },
      ]
    }
  }
}
</script>