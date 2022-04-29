"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const yaml_1 = __importDefault(require("yaml"));
const configs = yaml_1.default.parse((0, fs_1.readFileSync)((0, path_1.join)(__dirname, "../bomboo.yaml"), "utf8"));
exports.default = (service, sandbox = true) => {
    return sandbox ? configs[service].sandbox : configs[service].live;
};
