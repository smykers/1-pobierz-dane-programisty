
$('button').click( function(){

    $.ajax({
        url: "https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php",
        dataType: 'json',
        success: function (resultJSON) {
        console.log(resultJSON);
        
        let string = "";

        $.each( resultJSON, function(index, element) {
            console.log(element);
            string += index + ": " + element + "<br>";
        });

        let dane = $('body').append('<div id="dane-programisty">' + string + '</div>');
        

        },
        onerror: function (msg) {
        console.log(msg);
        }
        });
});

