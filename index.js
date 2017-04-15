import { argv } from "yargs";
import jsonfile from "jsonfile";
import path from "path";

import dataminer from "./src/dataminer";

const dataSource = path.resolve("./src/data.json");

function start(cliArguments) {
  jsonfile.readFile(dataSource, (err, data) => {
    if (err) {
      throw err;
    }

    let content = [];

    if (cliArguments.latin) {
      content = data.map(datum => dataminer.getLatin(datum));
      dataminer.save(path.resolve("./src/data-latin.json"), content);
    }
    if (cliArguments.api) {
      content = data.map(datum => dataminer.getLatin(datum));
      dataminer.save(path.resolve("./src/data-API.json"), content);
    }
    if (cliArguments.arabic) {
      content = data.map(datum => dataminer.getLatin(datum));
      dataminer.save(path.resolve("./src/data-arabic.json"), content);
    }
  });
}

start(argv);
