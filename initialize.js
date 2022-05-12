//
// 初期化処理
//
$(window).on('load', function() {
  console.log("load");

  // 背景色
  $('body').css({'background-color':$('#background_ColorDialog').val()});

  // フォントサイズ
  const DefaultFontSize = $('#SongName_FontSizeSlider').val() + "px";
  // フォントサイズを表示する要素
  $('#FontSize').html(DefaultFontSize);
  // フォントサイズを変更される要素
  $('#SongList').css({'font-size':DefaultFontSize});

  // フォント色
  $('#SongList').css({'font-size':DefaultFontSize});
  $('#SongList').css({'color':$('#SongName_ColorDialog').val()});

  // 段組みを変更する要素
  $('#SongList').css({'column-count':$('#ColumnsSlider').val()});

  //段組みを表示する要素
  $('#Columns').html($('#ColumnsSlider').val() + '段');
});