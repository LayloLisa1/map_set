let countries = new Set([
    { Russian: 9 },
    { English: 91 },
    { French: 45 },
    { Spanish: 24 },
    { Portuguese: 9 },
    { Dutch: 8 },
    { German: 7 },
    { Arabic: 25 },
    { Chinese: 5 },
    { Swahili: 4 },
    { Serbian: 4 }
  ]);
  
  function mostSpokenLanguages(countries, n) {
    const countryArray = Array.from(countries);
    const languages = countryArray.map(country => {
      return Object.keys(country)[0];
    });
    const spokenLanguages = countryArray.map(country => {
      return country[Object.keys(country)[0]];
    });
    const sortedLanguages = languages.sort((a, b) => {
      return spokenLanguages[languages.indexOf(b)] - spokenLanguages[languages.indexOf(a)];
    });
    const mostSpoken = [];
    for (let i = 0; i < n; i++) {
      mostSpoken.push({ [sortedLanguages[i]]: spokenLanguages[languages.indexOf(sortedLanguages[i])] });
    }
    return mostSpoken;
  }
  console.log(mostSpokenLanguages(countries, 3));
  