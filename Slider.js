//
// 曲名フォントサイズ変更
//
$('#SongName_FontSizeSlider').on('input', function()
{
  let val = $(this).val();
  val += 'px';

  //サイズを表示する要素
  $('#FontSize').html(val);

  //サイズを変更される要素
  $('#SongList').css({'font-size':val});
});


//
// 縁取りサイズ変更
//
$('#SongName_BorderingSizeSlider').on('input', function()
{
  let val = $(this).val();
  val += 'px';

  //サイズを表示する要素
  $('#BorderingSize').html(val);

  //サイズを変更される要素
  $('#SongList').css({'text-stroke':val});

  // text-strokeを更新すると自動的に黒になるのでtext-stroke-colorも更新
  $('#SongList').css({'text-stroke-color':$('#SongName_Bordering_ColorDialog').val()});
});