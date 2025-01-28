"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
require("dotenv/config");
require("reflect-metadata");
const path_1 = __importDefault(require("path"));
const typeorm_1 = require("typeorm");
const dataSourceConfig = () => {
    const entitiePath = path_1.default.join(__dirname, "./entities/**.{ts,js}");
    const migrationsPath = path_1.default.join(__dirname, "./migrations/**.{ts,js}");
    const nodeEnv = process.env.NODE_ENV;
    if (nodeEnv === "test") {
        return {
            type: "sqlite",
            database: ":memory:",
            synchronize: true,
            entities: [entitiePath],
        };
    }
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl)
        throw new Error("Env var DATABASE_URL does not exists");
    return {
        type: "postgres",
        url: dbUrl,
        synchronize: false,
        logging: true,
        migrations: [migrationsPath],
        entities: [entitiePath],
    };
};
const AppDataSource = new typeorm_1.DataSource(dataSourceConfig());
exports.AppDataSource = AppDataSource;
