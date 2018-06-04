$(document).ready(function () {
    $('#prikaz').click(function () {
        var selektovan = $("#selectGradovi option:selected").text();
        var prognozaFull = "http://www.naslovi.net/vremenska-prognoza/" + selektovan;
        document.getElementById('prognoza').src = prognozaFull;
        $('#prognoza').attr('src', prognozaFull);
    });
});