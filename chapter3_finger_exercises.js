var empty_object = {};
    
var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};

var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
	IATA: "SYD",
	time: "2004-09-22 14:55",
	city: "Sydney"
    },
    arrival: {
	IATA: "LAX",
	ttime: "2004-09-10:42",
	city: "Los Angeles"
    }
};

document.writeln(stooge["first-name"]);
document.writeln(flight.departure.IATTA);

document.writeln(stooge["middle-name"]);
document.writeln(flight.status);
document.writeln(stooge["first-name"]);

var middle = stooge["middle-name"] || "(none)";
document.writeln(middle);

var status = flight.status || "unknown";
document.writeln(status);

flight.equipment;
// flight.equipment.model // Throws a TypeError
flight.equipment && flight.equipment.model;

stooge["first-name"] = 'Jerome';
