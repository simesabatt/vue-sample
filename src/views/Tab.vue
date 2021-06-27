<template>
  <div>
    <b-tabs fill>
      <b-tab title="Tooltip">
        <p>ツールチップを表示させるタブ</p>
        <b-button variant="danger" v-b-tooltip.hover title="Tooltip directive content">
          ツールチップ
        </b-button>
      </b-tab>
      <b-tab title="Popover">
        <p>ポップオーバーを表示させるタブ</p>
        <!-- ポップオーバーを表示させます。表示する方向もここで指定できます。--> 
        <!--表示方法をhoverにしたり、表示方向を変えることもできます。-->
        <b-button variant="info" v-b-popover.@click.right="'内容表示欄'" title="タイトル表示欄">
          ポップオーバー
        </b-button>
      </b-tab> 
    </b-tabs>
  </div>
</template>