
document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.querySelector(".dark-mode-toggle");
  const lightModeSvg = document.getElementById("light-mode-svg");
  const darkModeSvg = document.getElementById("dark-mode-svg");
  const countriesGrid = document.getElementById("countries-grid");
  const regionFilter = document.getElementById("region-filter");
  const searchInput = document.getElementById('search-input');

  const apiEndpoint = "/api/worldapi.txt";

  let allCountries = []; 

  async function fetchCountries() {
    try {
document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.querySelector(".dark-mode-toggle");
  const countriesGrid = document.getElementById("countries-grid");
  const regionFilter = document.getElementById("region-filter");
  const searchInput = document.getElementById('search-input');

  const apiEndpoint = "/api/worldapi.txt";

  let allCountries = []; 

  async function fetchCountries() {
    try {
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      allCountries = Object.values(data);
      displayCountries(allCountries);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }

  //grid
  function displayCountries(countries) {
    countriesGrid.innerHTML = '';

    countries.forEach(country => {
      const countryItem = document.createElement("div");
      countryItem.classList.add("country-item");

      const flagImage = document.createElement("img");
      flagImage.src = country.flags.png || 'placeholder.jpg';
      flagImage.alt = `${country.name.common} Flag`;

      const countryName = document.createElement("div");
      countryName.classList.add("country-name");
      countryName.textContent = country.name.common;

      const countryPopulation = document.createElement("div");
      countryPopulation.classList.add("country-info");
      countryPopulation.textContent = `Population: ${country.population.toLocaleString()}`;

      const countryRegion = document.createElement("div");
      countryRegion.classList.add("country-info");
      countryRegion.textContent = `Region: ${country.region}`;

      const countryCapital = document.createElement("div");
      countryCapital.classList.add("country-info");
      countryCapital.textContent = `Capital: ${country.capital[0]}`;

      countryItem.appendChild(flagImage);
      countryItem.appendChild(countryName);
      countryItem.appendChild(countryPopulation);
      countryItem.appendChild(countryRegion);
      countryItem.appendChild(countryCapital);

      countriesGrid.appendChild(countryItem);
    });
  }

  //dark mode
  darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
  });

  //filter
  regionFilter.addEventListener('change', function () {
    const selectedRegion = regionFilter.value;
    if (selectedRegion === 'all') {
      displayCountries(allCountries);
    } else {
      const filteredCountries = allCountries.filter(country => country.region === selectedRegion);
      displayCountries(filteredCountries);
    }
  });

  //search
  searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCountries = allCountries.filter(country => country.name.common.toLowerCase().includes(searchTerm));
    displayCountries(filteredCountries);
  });

  fetchCountries();
});
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      allCountries = Object.values(data);
      displayCountries(allCountries);
    } catch (error) {
      console.error('Error fetching countries:', error);
    }
  }

  //grid
  function displayCountries(countries) {
    countriesGrid.innerHTML = '';

    countries.forEach(country => {
      const countryItem = document.createElement("div");
      countryItem.classList.add("country-item");

      const flagImage = document.createElement("img");
      flagImage.src = country.flags.png || 'placeholder.jpg';
      flagImage.alt = `${country.name.common} Flag`;

      const countryName = document.createElement("div");
      countryName.classList.add("country-name");
      countryName.textContent = country.name.common;

      const countryPopulation = document.createElement("div");
      countryPopulation.classList.add("country-info");
      countryPopulation.innerHTML = `<strong>Population:</strong> ${country.population.toLocaleString()}`;

      const countryRegion = document.createElement("div");
      countryRegion.classList.add("country-info");
      countryRegion.innerHTML = `<strong>Region:</strong> ${country.region}`;

      const countryCapital = document.createElement("div");
      countryCapital.classList.add("country-info");
      countryCapital.innerHTML = `<strong>Capital:</strong> ${country.capital[0]}`;

      countryItem.appendChild(flagImage);
      countryItem.appendChild(countryName);
      countryItem.appendChild(countryPopulation);
      countryItem.appendChild(countryRegion);
      countryItem.appendChild(countryCapital);
      
      countriesGrid.appendChild(countryItem);
    });
  }


  //dark mode
  //   if (document.body.classList.contains("dark-mode")) {
  //   lightModeSvg.style.display = "none";
  //   darkModeSvg.style.display = "block";
  // } else {
  //   lightModeSvg.style.display = "block";
  //   darkModeSvg.style.display = "none";
  // }

  darkModeToggle.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains("dark-mode")) {
      lightModeSvg.style.display = "none";
      darkModeSvg.style.display = "block";
    } else {
      lightModeSvg.style.display = "block";
      darkModeSvg.style.display = "none";
    }

  });

  //filter
  regionFilter.addEventListener('change', function () {
    const selectedRegion = regionFilter.value;
    if (selectedRegion === 'all') {
      displayCountries(allCountries);
    } else {
      const filteredCountries = allCountries.filter(country => country.region === selectedRegion);
      displayCountries(filteredCountries);
    }
  });

  //search
  searchInput.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredCountries = allCountries.filter(country => country.name.common.toLowerCase().includes(searchTerm));
    displayCountries(filteredCountries);
  });

  fetchCountries();
});
