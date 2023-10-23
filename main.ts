import { Serie } from './serie.js';
import { series } from './data.js';



let seriesTbody: HTMLElement = document.getElementById('series')!; // Nodo tbody que tiene el id="series"
const promSeasons: HTMLElement = document.getElementById("promedio-seasons")!;



renderSeriesInTable(series);

promSeasons.innerHTML = `${getSeasons(series)}`



function renderSeriesInTable(series: Serie[]): void {
  series.forEach(c => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${c.top}</td>
                           <td>${c.name}</td>
                           <td>${c.channel}</td>
                           <td>${c.seasons}</td>
                           `;
    seriesTbody.appendChild(trElement);
  });
}

function getSeasons(series: Serie[]): number {
  let promSeasons: number = 0;
  series.forEach((serie) => promSeasons = promSeasons + serie.seasons);

  const prom :number = promSeasons/series.length
  return prom;


}


