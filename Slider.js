//
// 曲名フォントサイズ
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
// 段組み
//
$('#ColumnsSlider').on('input', function()
{
  let val = $(this).val();

  // 段組みを変更する要素
  $('#SongList').css({'column-count':val});

  val += '段';
  //段組みを表示する要素
  $('#Columns').html(val);
});