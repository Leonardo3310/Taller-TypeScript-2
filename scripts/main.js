import { series } from './data.js';
var seriesTbody = document.getElementById('series'); // Nodo tbody que tiene el id="series"
var promSeasons = document.getElementById("promedio-seasons");
renderSeriesInTable(series);
promSeasons.innerHTML = "".concat(getSeasons(series));
function renderSeriesInTable(series) {
    series.forEach(function (c) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(c.top, "</td>\n                           <td>").concat(c.name, "</td>\n                           <td>").concat(c.channel, "</td>\n                           <td>").concat(c.seasons, "</td>\n                           ");
        seriesTbody.appendChild(trElement);
    });
}
function getSeasons(series) {
    var promSeasons = 0;
    series.forEach(function (serie) { return promSeasons = promSeasons + serie.seasons; });
    var prom = promSeasons / series.length;
    return prom;
}
