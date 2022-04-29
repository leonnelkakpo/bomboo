import { readFileSync } from "fs";
import { join } from "path";

import YAML from "yaml";

const configs = YAML.parse(
  readFileSync(join(__dirname, "../bomboo.yaml"), "utf8")
);

export default (service: string, sandbox = true) => {
  return sandbox ? configs[service].sandbox : configs[service].live;
};
