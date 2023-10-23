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
    // Añadir evento de clic
    trElement.addEventListener('click', () => showSeriesDetails(c));
    seriesTbody.appendChild(trElement);
  });
}

function getSeasons(series: Serie[]): number {
  let promSeasons: number = 0;
  series.forEach((serie) => promSeasons = promSeasons + serie.seasons);

  const prom :number = promSeasons/series.length
  return prom;


}

function showSeriesDetails(serie: Serie): void {
  const detailsCard = document.getElementById('details-card')!;
  const seriesImage = <HTMLImageElement>document.getElementById('series-image');

  const seriesName = document.getElementById('series-name')!;
  const seriesDescription = document.getElementById('series-description')!;
  const seriesLink = <HTMLAnchorElement>document.getElementById('series-link');


  seriesImage.src = serie.img;
  seriesImage.alt = serie.name;
  seriesName.textContent = serie.name;
  seriesDescription.textContent = serie.description;
  seriesLink.href = serie.link;
  seriesLink.textContent = "Go to " + serie.name;

  detailsCard.style.display = "block";
}

