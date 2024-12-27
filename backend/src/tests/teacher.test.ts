import request from "supertest";
import app from "../app";
import { AppDataSource } from "../config/data-sources";

beforeAll(async () => {
    await AppDataSource.initialize();
});

afterAll(async () => {
    await AppDataSource.destroy();
});

describe("Teacher API", () => {
    it("should get all teachers", async () => {
        const res = await request(app).get("/api/teachers");
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });
});