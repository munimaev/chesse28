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
            b.setAttribute('style', 'width:20px;height:20px;vertical-align:bottom;inline-height:20px;display:inline-block;background-color:#' + ( bg == 'FFF' ? (bg = 'CCC') : (bg = 'FFF')));
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
