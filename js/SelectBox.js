//
// 曲名フォント太さ
//
$('#SongName_FontWeightSelect').on('input', function()
{
  let val = $(this).val();

  console.log("フォント太さ："+val);

  $('#SongList').css({'font-weight':val});
});


//
// 曲名フォント
//
$('#SongName_FontNameSelect').on('input', function()
{
  let val = $(this).val();

  console.log("フォント："+val);

  $('#SongList').css({'font-family':val});
});