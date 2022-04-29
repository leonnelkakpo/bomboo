"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Ussd_1 = __importDefault(require("./Ussd"));
class Bomboo {
    constructor(apiKey, sandbox = true) {
        this.apiKey = apiKey;
        this.sandbox = sandbox;
        this.ussd = new Ussd_1.default(apiKey, sandbox);
    }
    deploy(appId, archivePath) {
        return this.ussd.deploy(appId, archivePath);
    }
}
exports.default = Bomboo;
