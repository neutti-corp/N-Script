var _NScripts = ["n-object","n-form"]
window.N = (function(){
    var option = {
        //
    }
    var _this = jQuery.extend({
        objects : []
    },option)
    return _this
}());
(function(){for(var i in _NScripts){jQuery.ajax({url: "js/" + _NScripts[i] + ".js", dataType: 'script', async: false})}}());