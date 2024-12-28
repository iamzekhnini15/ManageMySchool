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
    it("should not add duplicate teacher", async () => {
        const teacherData = {
            name: "Test Teacher",
            speciality: "Test Speciality",
            qualification: "Test Qualification",
            teaching_preferences: { test: "test" }
        };
        await request(app).post("/api/teachers/addTeacher").send(teacherData);
        const res = await request(app).post("/api/teachers/addTeacher").send(teacherData);
        expect(res.status).toBe(409);
        expect(res.body.message).toBe("Teacher already exists");
    });
    
});