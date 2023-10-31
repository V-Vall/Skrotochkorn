window.onload = function () {
    buildMeny();
};

function buildMeny()
{
    var links = [
        ["Hem", "index.html"], 
        ["Kontakt", "kontakt.html"],
        ["Media", "media.html"], 
        ["Produkter", "produkt.html"]
    ]


    var menyHtml = ""
    for(var i = 0; i < links.length; i = i + 1)
    {
        menyHtml += "<li><a href='" + links[i][1] + "'>" + links[i][0] + "</a></li>"
    }

    document.getElementById("meny").innerHTML = menyHtml
}