import Ussd from "./Ussd";

export default class Bomboo {
  apiKey: string;
  sandbox: boolean;
  private ussd: Ussd;

  constructor(apiKey: string, sandbox = true) {
    this.apiKey = apiKey;
    this.sandbox = sandbox;
    this.ussd = new Ussd(apiKey, sandbox);
  }

  deploy(appId: string, archivePath: string) {
    return this.ussd.deploy(appId, archivePath);
  }
}
