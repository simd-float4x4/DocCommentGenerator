<template>
  <TitleText></TitleText>
  <div class="container">
    <ul class="list-group">
      <li class="list-group-item" v-for="item in items" :key="item.id">
        <div class="container" style="white-space: pre-wrap;"  v-if="item.isShow">
          <FormView :title="item.title" :description="item.description" :subText="item.subText" :url="item.url" :isShow="item.isShow"></FormView>
          <div class="input-group">
            <div class="text-danger w-100">
              <div v-if="item.id == 1" class="w-100">
                <input type="text" class="form-control" v-model="item.inputValue" v-on:keydown.enter="onKeyDown()">
              </div>
              <div v-if="item.id == 2" class="w-100">
                <textarea type="text" class="form-control" v-model="item.inputValue"></textarea>
              </div>
              <div v-if="item.id == 3" class="w-100">
                <div class="input-group">
                  <span class="input-group-text" id="basic-addon3">id</span>
                  <input id="basic-addon3" type="text" class="form-control" v-model="addVariable">
                </div>
              </div>
              <div v-if="item.id == 4" class="w-100">
                <textarea type="text" class="form-control" v-model="item.inputValue"></textarea>
              </div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import TitleText from './components/Title-text.vue'
import FormView from './components/Form-view.vue'

var inputMethod = '';
var methodName = '';

export default {
  components: {
    TitleText,
    FormView,
  },
  data() {
    return {
      items: [
        { id: 1, title: "1. INPUT YOUR CODE HERE", description: "メソッドの1行目を入力してください。\n※ なお、Opening Bracketsまで必ず含めてください。", subText: "例) func fetchUserData(id: Int, name: String) -> UserModel ", url: null, isShow: true },
        { id: 2, title: "2. INPUT YOUR DESCRIPTION HERE", description: "このメソッドはどんなメソッドですか？", subText: "例) 引数の値でResponse構造体を作成する。引数がnilの場合はランダムに値を作成する。", url: null, isShow: false },
        { id: 3, title: "3. CHECK YOUR VARIABLE HERE", description: "生成された引数の一覧が正しいか確認してください。", subText: "なお、+ボタン -ボタンで要素の数を調整できます。", url: null, isShow: false },
        { id: 4, title: "4. CHECK YOUR RETURN VALUE", description: "帰り値/戻り値/リターン値がある場合は、その値を入力してください。", subText: "例）　return WeatherModel 　// 帰り値が必要", url: null, isShow: false },
      ],
      isNull: false,
    };
  },
  methods: {
    // 1つ目の要素のnilチェック
    onKeyDown() {
      const value = this.items[0].inputValue;
      if (!value) {
        this.items.forEach((item) => {
          if ( item.id != 1 ) { item.isShow = false; }
        });
      } else {
        this.items.forEach((item) => {
          if ( item.id != 1 ) { item.isShow = true; }
          inputMethod = value;
          this.checkMethod(inputMethod);
        });
      }
    },
    checkMethod(baseMethod) {
      // funcの削除
      var method = baseMethod.replace(/func/g, '');
      // スペースの削除
      if (method.startsWith(' ')) {
        method = method.trimLeft();
      }
      // 関数名の取得
      var brackets = '\(';
      var endBrackets = '\)';
      var index = '\:';
      var comma = '\,';
      methodName = method.substr(0, method.indexOf(brackets));

      // 引数の取得
      var methodAfter = method.substr(method.indexOf(brackets) + 1);
      method = methodAfter;
      console.log("methodAfter: ", method);
      
      var after = method.substr(method.indexOf(endBrackets));
      method = method.replace(after, "");
      console.log("after: ", method);

      const array = [];
      var count = ( method.match(/\:/g) || [] ).length;
      console.log("count: ", count);
      for (var i = 0; i < count; i++) {
        var _variable = method.substr(0, method.indexOf(index));
        console.log("_variable: ", _variable);
        let str = _variable + ":"
        method = method.replace(str, "");

        var _comma = method.substr(0, method.indexOf(comma) + 1);
        method = method.replace(_comma, "");
        console.log("_comma: ", _comma);
          // スペースの削除
          if (method.startsWith(' ')) {
            method = method.trimLeft();
          }
        array.push(_variable);
      }
      console.log("array: ", array);

      var methodEnd = methodAfter.substr(0, method.indexOf(endBrackets));
      // console.log("methodEnd: ", methodEnd);
      if (methodAfter.startsWith(' ')) {
        methodAfter = methodAfter.trimLeft();
      }
    }
  },
};

</script>