
let data = [

    {
        "date": "2017-01-01",
        "localName": "Neujahr",
        "name": "New Year's Day",
        "countryCode": "AT",
        "fixed": true,
        "global": true,
        "counties": null,
        "launchYear": 1967,
        "type": "Public"
    },
    {
        "date": "2017-01-06",
        "localName": "Heilige Drei Könige",
        "name": "Epiphany",
        "countryCode": "AT",
        "fixed": true,
        "global": true,
        "counties": null,
        "launchYear": null,
        "type": "Public"
    },
    {
        "date": "2017-04-17",
        "localName": "Ostermontag",
        "name": "Easter Monday",
        "countryCode": "AT",
        "fixed": false,
        "global": true,
        "counties": null,
        "launchYear": 1642,
        "type": "Public"
    },
    {
        "date": "2017-05-01",
        "localName": "Staatsfeiertag",
        "name": "National Holiday",
        "countryCode": "AT",
        "fixed": true,
        "global": true,
        "counties": null,
        "launchYear": 1955,
        "type": "Public"
    },
    {
        "date": "2017-05-25",
        "localName": "Christi Himmelfahrt",
        "name": "Ascension Day",
        "countryCode": "AT",
        "fixed": false,
        "global": true,
        "counties": null,
        "launchYear": null,
        "type": "Public"
    },
    {
        "date": "2017-06-05",
        "localName": "Pfingstmontag",
        "name": "Whit Monday",
        "countryCode": "AT",
        "fixed": false,
        "global": true,
        "counties": null,
        "launchYear": null,
        "type": "Public"
    },
    {
        "date": "2017-06-15",
        "localName": "Fronleichnam",
        "name": "Corpus Christi",
        "countryCode": "AT",
        "fixed": false,
        "global": true,
        "counties": null,
        "launchYear": null,
        "type": "Public"
    },
    {
        "date": "2017-08-15",
        "localName": "Maria Himmelfahrt",
        "name": "Assumption Day",
        "countryCode": "AT",
        "fixed": true,
        "global": true,
        "counties": null,
        "launchYear": null,
        "type": "Public"
    },
    {
        "date": "2017-10-26",
        "localName": "Nationalfeiertag",
        "name": "National Holiday",
        "countryCode": "AT",
        "fixed": true,
        "global": true,
        "counties": null,
        "launchYear": null,
        "type": "Public"
    },
    {
        "date": "2017-11-01",
        "localName": "Allerheiligen",
        "name": "All Saints' Day",
        "countryCode": "AT",
        "fixed": true,
        "global": true,
        "counties": null,
        "launchYear": null,
        "type": "Public"
    },
    {
        "date": "2017-12-08",
        "localName": "Mariä Empfängnis",
        "name": "Immaculate Conception",
        "countryCode": "AT",
        "fixed": true,
        "global": true,
        "counties": null,
        "launchYear": null,
        "type": "Public"
    },
    {
        "date": "2017-12-25",
        "localName": "Weihnachten",
        "name": "Christmas Day",
        "countryCode": "AT",
        "fixed": true,
        "global": true,
        "counties": null,
        "launchYear": null,
        "type": "Public"
    },
    {
        "date": "2017-12-26",
        "localName": "Stefanitag",
        "name": "St. Stephen's Day",
        "countryCode": "AT",
        "fixed": true,
        "global": true,
        "counties": null,
        "launchYear": null,
        "type": "Public"
    }
]

for (let i = 0; i < data.length; i++) {
   let date1 = document.createElement("p");
   date1.textContent = data[i].date;
   document.body.appendChild(date1);

   let localName1 = document.createElement("p");
   localName1.textContent = data[i].localName;
   document.body.appendChild(localName1);

   let name1 = document.createElement("p");
   name1.textContent = data[i].name;
   document.body.appendChild(name1);

   let countryCode1 = document.createElement("p");
   countryCode1.textContent = data[i].countryCode;
   document.body.appendChild(countryCode1);

   let fixed1 = document.createElement("p");
   fixed1.textContent = data[i].fixed;
   document.body.appendChild(fixed1);

   let global1 = document.createElement("p");
   global1.textContent = data[i].global;
   document.body.appendChild(global1);

   let counties1 = document.createElement("p");
   counties1.textContent = data[i].counties;
   document.body.appendChild(counties1);

   let launchYear1 = document.createElement("p");
   launchYear1.textContent = data[i].launchYear;
   document.body.appendChild(launchYear1)

   let type1 = document.createElement("p");
   type1.textContent = data[i].type;
   document.body.appendChild(type1);
}