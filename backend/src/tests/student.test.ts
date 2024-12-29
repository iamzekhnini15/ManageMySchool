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

    it("should create a student", async () => {
        const res = await request(app).post("/api/students/create").send({
            email: "mail3@gmail.com",
            first_name: "John3",
            last_name: "Doe3",
            password: "password",
            roleId: "6ad0fc70-9d6c-45a6-b8e8-260d7c6b0dc2",
        });
    });

});