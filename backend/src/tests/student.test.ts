import request from "supertest";
import app from "../app";
import { AppDataSource } from "../config/data-sources";

beforeAll(async () => {
    await AppDataSource.initialize();
});

afterAll(async () => {
    await AppDataSource.destroy();
});

describe("Student API", () => {
    it("should get all students", async () => {
        const res = await request(app).get("/api/students");
        expect(res.status).toBe(200);
        expect(Array.isArray(res.body)).toBeTruthy();
    });
});