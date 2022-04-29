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
const index_1 = __importDefault(require("../index"));
exports.default = (payload) => __awaiter(void 0, void 0, void 0, function* () {
    if (!payload.key) {
        return console.log("[key] is required");
    }
    if (!payload.id) {
        return console.log("[key] is required");
    }
    if (!payload.archive) {
        return console.log("[archive] is required");
    }
    const bomboo = new index_1.default(payload.key);
    try {
        const response = yield bomboo.deploy(payload.id, payload.archive);
        return console.log(response);
    }
    catch (error) {
        console.log("something went wrong", error);
    }
});
