document.addEventListener("DOMContentLoaded", function () {
  const darkModeToggle = document.querySelector(".dark-mode-toggle");
  const countriesGrid = document.getElementById("countries-grid");
  const regionFilter = document.getElementById("region-filter");

  // Replace 'YOUR_API_ENDPOINT' with the actual API endpoint
  const apiEndpoint = "https://restcountries.com/v3.1/all";

  // Fetch countries data from the API
  async function fetchCountries() {
    try {
      const response = await fetch(apiEndpoint);
      const data = await response.json();
      displayCountries(data);
    } catch (error) {
      console.error("Error fetching countries:", error);
    }
  }

  // Display countries in the grid
  function displayCountries(countries) {
    countriesGrid.innerHTML = "";

    countries.forEach((country) => {
      const countryItem = document.createElement("div");
      countryItem.classList.add("country-item");

      const flagImage = document.createElement("img");
      flagImage.src = country.flag;
      flagImage.alt = `${country.name} Flag`;

      const countryName = document.createElement("div");
      countryName.classList.add("country-name");
      countryName.textContent = country.name;

      const countryPopulation = document.createElement("div");
      countryPopulation.classList.add("country-info");
      countryPopulation.textContent = `Population: ${country.population.toLocaleString()}`;

      const countryRegion = document.createElement("div");
      countryRegion.classList.add("country-info");
      countryRegion.textContent = `Region: ${country.region}`;

      const countryCapital = document.createElement("div");
      countryCapital.classList.add("country-info");
      countryCapital.textContent = `Capital: ${country.capital}`;

      countryItem.appendChild(flagImage);
      countryItem.appendChild(countryName);
      countryItem.appendChild(countryPopulation);
      countryItem.appendChild(countryRegion);
      countryItem.appendChild(countryCapital);

      countriesGrid.appendChild(countryItem);
    });
  }

  // Event listener for dark mode toggle
  darkModeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });

  // Event listener for region filter
  regionFilter.addEventListener("change", function () {
    const selectedRegion = regionFilter.value;
    if (selectedRegion === "all") {
      fetchCountries();
    } else {
      // Filter countries based on the selected region
      const filteredCountries = countries.filter(
        (country) => country.region === selectedRegion
      );
      displayCountries(filteredCountries);
    }
  });

  // Initial fetch to load all countries
  fetchCountries();
});
