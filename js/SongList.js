//
// 曲名追加
//
function AddSong()
{
  var element = document.getElementById("SongList");
  var text = document.getElementById("SongName");

  // 空白なら何もしない
  if(text.value == ""){return;}

  var li = document.createElement('li');
  li.textContent = text.value;
  document.getElementById('SongList').appendChild(li);

  // テキストボックスを初期化
  text.value = "";
}

//
// 曲名削除
//
function Cancel()
{
  var list_element = document.getElementById("SongList");

  var remove_element = list_element.removeChild(list_element.lastElementChild);
}

//
// 曲名全削除
//
function AllDelete()
{
  const list_element = document.getElementById("SongList");

  // liの数を取得する
  const len = list_element.children.length;

  for ( var i = 0 ; i < len ; i ++ )
  {
    // liを削除する
    list_element.removeChild ( list_element.children [0] ) ;
  }
}