const main = document.querySelector('#main-image');
const thumbs = document.querySelectorAll('.thumb');
const text = document.querySelector('#caption');

// 確認
//console.log(main);
//console.log(thumbs);
//↑constを使って、HTMLの要素を定数（箱）に格納しています。
//以前の作例で使った、getElementById や getElementsByClassName などは、idか、classか…など種類によって使い分ける必要がありますが、querySelector では、idもclassも一緒に扱うことができます。
//CSSでの書き方と同じように「#（idの場合）」「.（classの場合）」で区別できるので、視覚的にもidとclassが区別しやすいです。
//1つのみ取得するときは、querySelector、全て取得するときはquerySelectorAllを使います。「.thumb」クラスは、複数ありますので、querySelectorAllを使っています。


//thumbs.forEach(function(item, index) {
  //item.onclick = function() {
   // console.log(this.dataset.image);
  //  main.src = this.dataset.image;
 // }
//});
//クリックすると、コンソール上に、dataset-imageの内容が出力されます。

// マウスオーバー
thumbs.forEach(function(item, index) {
  item.onmouseover = function() {
    main.src = this.dataset.image;
    text.textContent = this.title;
  }
});

