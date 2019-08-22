$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip({
        trigger : 'hover',
    }) 
    if(isTouchDevice()===false) {
        $("[rel='tooltip']").tooltip();
    } 
});