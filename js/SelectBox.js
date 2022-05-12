//
// 曲名フォント太さ
//
$('#SongName_FontWeightSelect').on('input', function()
{
  let val = $(this).val();

  console.log("フォント太さ："+val);

  $('#SongList').css({'font-weight':val});
});