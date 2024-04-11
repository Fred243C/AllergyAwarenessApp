$("document").ready(function(){

    $.ajax({
        type: "get",
        url: "/",
        dataType: "json",
        success: function (response) 
        {
            console.log(response);
        }
    });

    $("#btnSearch").click(function(){
        var barcode = $("#barcode").val();
        $.ajax({
            url : 'http://localhost:3000/dbInfo',
            type : 'POST',
            data : {
                'barcode' : barcode
            },
            dataType:'json',
            success : function(data) {              
                alert('Data: '+ data);
            },
            error : function(request,error)
            {
                alert("Request: "+ JSON.stringify(request));
            }
        });
    })
});