<template>
  <div>
    <!-- モーダルを起動するボタン 「.id名」で紐付けが出来ます。-->
    <b-button v-b-modal.my-modal>モーダルを起動する</b-button>
    <!-- モーダルの本体 -->
    <b-modal id="my-modal"><h3>入力フォーム</h3>
      <b-row class="my-1" v-for="inputtype in inputtypes" :key="inputtype">
        <!-- sm="4"に変更します。 -->
        <b-col sm="4">
          <label :for="`type-${type}`">Type <code>{{ inputtype }}</code>:</label>
        </b-col>
        <!-- sm="7"に変更します。 -->
        <b-col sm="7">
          <b-form-input :id="`type-${type}`" :type="type"></b-form-input>
        </b-col>
      </b-row>
      <!-- rowとcolをinputと同じクラスでくくる -->
      <b-row class="my-1">
        <!-- sm="4"に変更します。 -->
        <b-col sm="4">
          <label>Type<code> textarea</code>:</label>
          <label class="radio">Type<code> radio</code>:</label>
          <label class="check">Type<code> checkbox</code>:</label>
          <label class="select">Type<code> selectbox</code>:</label>
        </b-col>
        <!-- sm="7"に変更します。 -->
        <b-col sm="7">
          <b-form-textarea placeholder="textarea"></b-form-textarea>
          <b-form-group>
            <b-form-radio name="test">A</b-form-radio>
            <b-form-radio name="test">B</b-form-radio>
          </b-form-group>
          <!-- 「b-form-group」で囲みます -->
          <b-form-group>
            <b-form-checkbox>チェックA</b-form-checkbox>
            <b-form-checkbox>チェックB</b-form-checkbox>
          </b-form-group>
          <b-form-select class="test" :options="options"></b-form-select>
        </b-col>
      </b-row>
    </b-modal>
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
  /* 見出しの位置調整 */
  h3{
    text-align: center;
  }
</style>