var d = new Date ();
var hours, minutes,sd=1;
var days = ["Hétfő", "Kedd", "Szerda", "Csütörtök", "Péntek", "Szombat"];


days.forEach(function(entry) {
    
    var days_1 = $('<tr>');
    days_1.append( '<th colspan="10%" scope="col">' + entry + '</th>' );
	for(var i=1; i<=9;i++)
	 days_1.append( $('<td colspan="10%" scope="col" class="drop_2">') );	

	$('#t_body').append(days_1);
});


	
$(document).ready(function(){

        var max_fields       = 20;
        var wrapper          = $(".subject_wrapper");
        var add_subject      = $(".add_subject");

        var x = 1;
        $(add_subject).click(function(e){
            e.preventDefault();
            if(x < max_fields){
                x++;
                var $item = $(' <div class="col-md-6 subject_crumbs" id="s_code'+ x +'" style="z-index:99; border:1px solid lightgray; padding: 8px 5px;height: 40px;border-radius: 5px;background-color: dodgerblue;color:white;"><span style=" width:99%;  overflow: hidden;white-space: nowrap;display: block;text-overflow: ellipsis;" >'+ $("#subject_title").val() +'</span></div>');
                $item.draggable({ revert: true, cancel: false,appendTo: "body",zindex:9999});
                $('.subject_wrapper').append($item);
                 $("#subject_title").val('');
            }
	        else
	        {
	          alert('You Reached the limits')
	        }
        });

	 
	     $( ".drop_2" ).droppable( {
	     	accept:".subject_crumbs", 
            drop :function(event, ui) 
        	{ 	   			
        		$(this).text( $("#" + ui.draggable.prop('id')).text() );
        	} 
        } ); 
   $('#step').click(function(){
        $('#hozzaad').css('display','block');					
   });
});