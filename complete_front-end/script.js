$(document).ready(function(){
    
    $('#append, #prepand, #replace').on("click", function(e){
        var el = $(e.currentTarget);
        var attibute = el.attr('id');
        var content = $('#text').val();
        var mainContent = $('#main')
        if (attibute == 'append'){
            mainContent.append(content);
        }else if (attibute == 'prepand'){
            mainContent.prepend(content);
        }else if (attibute == 'replace'){
            mainContent.html(content);
        }
    })
    $('[href="https://www.google.com"]').on('click',function(e){
        e.preventDefault();
    })

});