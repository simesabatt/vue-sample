<template>
  <div>
    <h1>BootstrapVueでフォームを作ってみよう！</h1>
    <b-container fluid>
      <b-row class="my-1" v-for="inputtype in inputtypes" :key="inputtype">
        <b-col sm="2">
          <label :for="`type-${type}`">Type <code>{{ inputtype }}</code>:</label>
        </b-col>
        <b-col sm="5">
          <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
        </b-col>
      </b-row>
      <!-- rowとcolをinputと同じクラスでくくる -->
      <b-row class="my-1">
        <b-col sm="2">
          <!-- ラベルをベタ書きにする -->
          <label>Type<code> textarea</code>:</label>
          <label class="radio">Type<code> radio</code>:</label>
          <label class="check">Type<code> checkbox</code>:</label>
          <label class="select">Type<code> selectbox</code>:</label>
        </b-col>
        <!-- inputと同じ幅で、各コンポーネントを追加する。 -->
        <b-col sm="5">
          <b-form-textarea placeholder="textarea"></b-form-textarea>
          <b-form-group>
            <b-form-radio name="test">A</b-form-radio>
            <b-form-radio name="test">B</b-form-radio>
          </b-form-group>
          <b-form-checkbox>チェックA</b-form-checkbox>
          <b-form-checkbox>チェックB</b-form-checkbox>
          <!-- セレクトボックスのメニューを「options」で定義しているので呼び出す -->
          <b-form-select :options="options"></b-form-select>
          <!-- ボタンもそのまま定義 -->
          <b-button size="lg">キャンセル</b-button>
          <b-button size="lg" variant="primary">送信</b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  export default {
    data(){
      return{
        // セレクトボックスの選択肢
        options: [
          { value: 'null', text:'' },
          { value: 'A', text:'A' },
          { value: 'B', text:'B' },
          { value: 'C', text:'C' }
        ],
        inputtypes:[
          'text',
          'number',
          'email',
          'password',
          'tel',
          'date',
          'time'
        ]
      }
    }
  }
</script>

<style scoped>
  /* ラジオボタンとチェックボックスを並列にする。*/
  .custom-control {
    display: inline;
    padding-right: 10px;
    padding-bottom: 10px;
  } 
  label {
    display: block;
    padding-top: 6px;
  }
  .radio{
    padding-top: 25px;
  }
  /* ボタン幅を調整 */
  button{
    margin: 10px 10px 0 25px;
    width: 200px;
  }
</style>