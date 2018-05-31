(function () {var _53code=document.createElement("script");
    _53code.src = '//tb.53kf.com/code/code/10176958/1';
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(_53code, s);
    window.onload = function () {
        if(document.querySelector('#KFLOGO .Lelem')){
            document.querySelectorAll('.kefu').forEach(function (value){
                value.onclick = document.querySelector('#KFLOGO .Lelem').onclick;
            });
        }
        if (document.querySelector('#mobile_icon_div')){
            document.querySelectorAll('.kefu').forEach(function (value){
                value.onclick = document.querySelector('#mobile_icon_div').children[0].onclick;
            });

        }
        document.querySelector('.c-btn').onclick = function () {
            var val = document.querySelector('.c-search').value || '';
            location.href = 'http://47.100.224.80/search/?q=' + val;
        }
    }
})();