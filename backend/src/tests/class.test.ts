import request from "supertest";
import app from "../app";
import { AppDataSource } from "../config/data-sources";

beforeAll(async () => {
  await AppDataSource.initialize();
});

afterAll(async () => {
  await AppDataSource.destroy();
});

describe("Classes API", () => {
  it("should get all classes", async () => {
    const res = await request(app).get("/api/classes");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBeTruthy();
  });
  it("should add a class", async () => {
    const res = await request(app).post("/api/classes/addClass")
    expect(res.status).toBe(201);
  });
});
