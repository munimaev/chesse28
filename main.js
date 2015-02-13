<script>
   var bg, a = {'A7':'F','B7':'F', 'C7':'F','D7':'F','E7':'F','F7':'F','G7':'F','H7':'F',
                'A8':'C','B8':'E', 'C8':'D','D8':'B','E8':'A','F8':'D','G8':'E','H8':'C',
                'A2':'9','B2':'9', 'C2':'9','D2':'9','E2':'9','F2':'9','G2':'9','H2':'9',
                'A1':'6','B1':'8', 'C1':'7','D1':'5','E1':'4','F1':'7','G1':'8','H1':'6' };
   (function f(){
       document.body.innerHTML = '';
       for (var i = 8; i>=1; i--) {
        for (var k in l = ['A','B','C', 'D', 'E', 'F','G','H']) {
            var b = document.createElement('span');
            b.id = l[k]+i;
            b.setAttribute('style', 'width:20px;height:20px;display:inline-block;background-color:#' + ( bg == 'FFF' ? (bg = 'CCC') : (bg = 'FFF')));
            b.onclick = function(){
                     if (document.getElementsByClassName('active').length > 0) {
                         a[this.id] = a[document.getElementsByClassName('active')[0].id];
                         a[document.getElementsByClassName('active')[0].id] = null;
                         f();
                     }
                     else {
                         this.style.color = 'red';
                         this.className = 'active';
                     }
                 }
                 b.innerHTML =((l[k]+i) in a && a[l[k]+i]!=null ? String.fromCharCode('0x265' + a[l[k]+i]): '<br>');
            document.body.appendChild(b);
        }
        bg = bg == 'FFF' ? 'CCC' : 'FFF' ;
        document.body.appendChild(document.createElement('br'));
        }
   })();
</script>

<?
//Index.php
session_start();
if (!empty($_GET['user_id']) && !empty($_GET['access_token'])  ) {
  $_SESSION['user_id'] = $_GET['user_id'];
  $_SESSION['access_token'] = $_GET['access_token'];
  header('Location: index.php');
  // print_r($_SESSION);
  die();
}
if ( empty($_SESSION['user_id']) ) {
  header('Location: enter.php');
  // print_r($_SESSION);
  die();
}

require 'php/vkapi.class.php';

$post_url = 'https://api.vk.com/method/groups.getMembers ';
$queryArray = array('group_id' => '19072119', 'fields' => 'photo_50');

$res = Send_Post($post_url, $queryArray,'http://paysys.sovbank.ru/vk/index.php');


// enter.php
session_start();
if (empty($_GET['access_token']) ||  empty($_SESSIOM['vkid'])) {
  header("Location: https://oauth.vk.com/authorize?"
       . "client_id=4772837&"
       . "scope=groups&"
       . "redirect_uri=http://paysys.sovbank.ru/Wiki/TFE/app/entered.php?&"
       . "display=page&"
       . "v=5.28&"
       . "response_type=token");  
  die();
}

// entered.php
?>

<?
session_start();
?>
<!DOCTYPE html>
<html lang="en" > 
<head>
  <meta charset="utf-8">
  <title>My AngularJS App</title>
</head>
<body>
<p>Авторизация успешно пройдкна</p>
<p id="enter"></p><?

//<a href="index.php">Main</a>
// print_r($_HEADER);
// echo '<hr>';
// $url = "http://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
// echo $url.'<hr>';
// $parts = parse_url($url);
// echo '<hr>';
// parse_str($parts['query'], $query);
// print_r( $query);
?>
</body>
<script type="text/javascript">
  var href = location.href;
  var queryStringStart = href.indexOf( '#' );
  var queryString = href.substring(queryStringStart+1);


  var enter = document.getElementById('enter');
  console.log(enter)
  var link = document.createElement("a");
  console.log(link)
  link.setAttribute("href", "index.php?"+queryString);
  link.innerHTML ='home';
  console.log(link)
  enter.appendChild(link)
  console.log(enter)
</script>
</html>
