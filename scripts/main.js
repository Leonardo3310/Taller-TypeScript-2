import { series } from './data.js';
var seriesTbody = document.getElementById('series'); // Nodo tbody que tiene el id="series"
var promSeasons = document.getElementById("promedio-seasons");
renderSeriesInTable(series);
promSeasons.innerHTML = "".concat(getSeasons(series));
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.top, "</td>\n                           <td>").concat(c.name, "</td>\n                           <td>").concat(c.channel, "</td>\n                           <td>").concat(c.seasons, "</td>\n                           ");
        // Añadir evento de clic
        trElement.addEventListener('click', function () { return showSeriesDetails(c); });
        seriesTbody.appendChild(trElement);
    });
}
function getSeasons(series) {
    var promSeasons = 0;
    series.forEach(function (serie) { return promSeasons = promSeasons + serie.seasons; });
    var prom = promSeasons / series.length;
    return prom;
}
function showSeriesDetails(serie) {
    var detailsCard = document.getElementById('details-card');
    var seriesImage = document.getElementById('series-image');
    var seriesName = document.getElementById('series-name');
    var seriesDescription = document.getElementById('series-description');
    var seriesLink = document.getElementById('series-link');
    seriesImage.src = serie.img;
    console.log(serie.img);
    seriesImage.alt = serie.name;
    seriesName.textContent = serie.name;
    seriesDescription.textContent = serie.description;
    seriesLink.href = serie.link;
    seriesLink.textContent = "Go to " + serie.name;
    detailsCard.style.display = "block";
}
