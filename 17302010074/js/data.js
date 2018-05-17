const countries = [
  { name: "Canada", continent: "North America", cities: ["Calgary","Montreal","Toronto"], photos: ["canada1.jpg","canada2.jpg","canada3.jpg"] },
  { name: "United States", continent: "North America", cities: ["Boston","Chicago","New York","Seattle","Washington"], photos: ["us1.jpg","us2.jpg"] },
  { name: "Italy", continent: "Europe", cities: ["Florence","Milan","Naples","Rome"], photos: ["italy1.jpg","italy2.jpg","italy3.jpg","italy4.jpg","italy5.jpg","italy6.jpg"] },
  { name: "Spain", continent: "Europe", cities: ["Almeria","Barcelona","Madrid"], photos: ["spain1.jpg","spain2.jpg"] }
];


show();
function show(){
  for(let i = 0; i < countries.length; i++){
    let num = countries[i];
    outputCountry(num.name,num.continent,num.cities,num.photos);
  }
  let parentNode = document.getElementsByClassName("flex-container justify")[0];
  let nodes = document.getElementsByClassName('item');
  for (let i = 0; i < nodes.length; i++) {
    parentNode.appendChild(nodes[i]);
  }
}
function outputCountry(name, continent, cities, photos){
  document.write('<div class="item" >');
  document.write('<h2>' + name + '</h2>');
  document.write('<p>' + continent + '</p>');
  // Cities
  document.write('<div class="inner-box">');
  document.write('<h3>Cities</h3>');
  document.write('<ul>');
  for (let i = 0; i < cities.length; i++) {
    document.write('<li>' + cities[i] + '</li>');
  }
  document.write('</ul>');
  document.write('</div>');
  // Photos
  document.write('<div class="inner-box">');
  document.write('<h3>Popular Photos</h3>');
  for (let i = 0; i < photos.length; i++) {
    document.write('<img src="images/' + photos[i] + '" class="photo">');
  }
  document.write('</div>');
  // Button
  document.write('<button>Visit</button>');
  document.write('</div>');
}
