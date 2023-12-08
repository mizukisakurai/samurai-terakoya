$(function() {
   // 読み込み完了したら
   $('window').on('load', () => {});
     console.log('loadイベントが発生しましたた');
   });
  
  $('window').on(scroll, () => {});
  console.log('scrollイベントが発生しました');
