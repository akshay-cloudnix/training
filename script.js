
// <!-- Hellofddfhfdh -->
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip({
        trigger : 'hover',
    }) 
    // if(isTouchDevice()===false) {
    //     $("[rel='tooltip']").tooltip();
    // } 
});




var responseJSON = null;

$(document).ready(function(){
    $.ajax({
    	url: "data.json", 
    	success: function(result){
	    //console.log(JSON.parse(result));
	    responseJSON = JSON.stringify(result);
	    responseJSON = JSON.parse(responseJSON);
	    // console.log(responseJSON);
	    // Get the element with id="defaultOpen" and click on it
		document.getElementById("defaultOpen").click();	
	  }
	});
	$('.tab').on('click', function () {
		$(this).addClass('active').siblings().removeClass('active');
	});
});

function openContent(param){
	var selectedChat = param;
	console.log(param);
	if(responseJSON['data'][selectedChat]){
		var currentChatArray = responseJSON['data'][selectedChat];
		// $("#info").html('');

		// $("#topic").html(param);
		console.log(currentChatArray);
		var topic = currentChatArray[0]['topic']['name'];
		var info = currentChatArray[0]['detail']['info'];
		console.log(topic);
		console.log(info);
		//content needs to add into html
		// $("#topic").html(topic);
		// $("#info").html(info);
		document.getElementById("topic").innerHTML = topic;
		document.getElementById("topic").innerHTML = info;
		$("#topic").text(topic).show();
		$("#info").text(info).show();
	} 

}
