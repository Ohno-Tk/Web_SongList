//
// 背景色
//
$('#background_ColorDialog').on('change', function()
{
  let val = $(this).val();

  console.log("背景色："+val);

  // 色を変更する要素
  $('body').css({'background-color':val});
});


//
// 曲名 文字色
//
$('#SongName_ColorDialog').on('change', function()
{
  let val = $(this).val();

  console.log("曲名文字色："+val);

  // 色を変更する要素
  $('#SongList').css({'color':val});
});
