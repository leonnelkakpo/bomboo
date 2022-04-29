"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const ServiceConfig_1 = __importDefault(require("./ServiceConfig"));
const form_data_1 = __importDefault(require("form-data"));
const fs_1 = require("fs");
const SERVICE_NAME = "ussd";
class Ussd {
    constructor(apiKey, sandbox = true) {
        this.apiKey = apiKey;
        this.sandbox = sandbox;
    }
    deploy(appId, archivePath) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const ussdConfigs = (0, ServiceConfig_1.default)(SERVICE_NAME, this.sandbox);
            if (!(0, fs_1.existsSync)(archivePath)) {
                return `[error]: archive not found at the path: ${archivePath}`;
            }
            const data = new form_data_1.default();
            data.append("app", (0, fs_1.createReadStream)(archivePath));
            const config = {
                url: `${ussdConfigs.baseUrl}/apps/${appId}/${ussdConfigs.path}`,
                method: "PUT",
                headers: Object.assign({ api_key: this.apiKey }, data.getHeaders()),
                data,
                timeout: 30000,
            };
            try {
                const httpResponse = yield (0, axios_1.default)(config);
                return httpResponse.data;
            }
            catch (error) {
                if (axios_1.default.isAxiosError(error)) {
                    return (_a = error.response) === null || _a === void 0 ? void 0 : _a.data;
                }
                throw error;
            }
        });
    }
}
exports.default = Ussd;
