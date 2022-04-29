#!/usr/bin/env node

import * as yargs from "yargs";
import * as yargsHelpers from "yargs/helpers";
import DeployUssdArchiveCommand from "./Commands/DeployUssdArchive";
const { hideBin } = yargsHelpers;

yargs
  .command(
    "ussd:deploy [key] [id] [archive] [sandbox]",
    "deploy ussd archive",
    {},
    async ({ key, id, archive, sandbox = true }: any) => {
      //

      await DeployUssdArchiveCommand({
        key,
        id,
        archive,
        sandbox,
      });
    }
  )
  .option("verbose", {
    alias: "v",
    type: "boolean",
    description: "Run with verbose logging",
  })
  .parse();
