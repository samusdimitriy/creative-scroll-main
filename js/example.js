// Налаштування
const recordCollection = {
  2548: {
    albumTitle: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: ["Let It Rock", "You Give Love a Bad Name"],
  },
  2468: {
    albumTitle: "1999",
    artist: "Prince",
    tracks: ["1999", "Little Red Corvette"],
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [],
  },
  5439: {
    albumTitle: "ABBA Gold",
  },
};

// Змініть код лише під цим рядком
function updateRecords(records, id, prop, value) {
  if (value !== "") {
    if (prop === "tracks") {
      if (!records[id].hasOwnProperty("tracks")) {
        records[id][prop] = [value];
      } else {
        records[id][prop].push(value);
      }
    } else {
      records[id][prop] = value;
    }
  } else {
    if (prop === "tracks" && records[id].hasOwnProperty("tracks")) {
      delete records[id][prop];
    } else {
      delete records[id][prop];
    }
  }

  return records;
}

updateRecords(recordCollection, 5439, "artist", "ABBA");
