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

  it("should not add duplicate class", async () => {
    const ClasseData = {
      teacherId: "ad335405-cb56-4c28-bbc7-c1b2d4897e93",
      name: "Test Class",
      level: "Test Qualification",
      speciality: "Test Speciality",
      academic_year: "Test Academic Year",
      max_students: 50
    };

    await request(app).post("/api/classes/addClass").send(ClasseData);
    const res = await request(app).post("/api/classes/addClass").send(ClasseData);
    expect(res.status).toBe(409);
    expect(res.body.message).toBe("Class already exists");
  });

  /* it("should update a class", async () => {
    const updatedClass = {
      id: "bac7aae3-066d-42cc-97c6-3252c4343330",
      teacherId: "ad335405-cb56-4c28-bbc7-c1b2d4897e93",
      name: "Updated Class",
      level: "Updated Level",
      speciality: "Updated Speciality",
      academic_year: "Updated Academic Year",
      max_students: 100
    };

    const updateRes = await request(app).post("/api/classes/updateClass").send(updatedClass);
    expect(updateRes.status).toBe(200);
    expect(updateRes.body).toHaveProperty("id", updatedClass.id);
    expect(updateRes.body).toHaveProperty("name", updatedClass.name);
    expect(updateRes.body).toHaveProperty("level", updatedClass.level);
    expect(updateRes.body).toHaveProperty("speciality", updatedClass.speciality);
    expect(updateRes.body).toHaveProperty("academic_year", updatedClass.academic_year);
    expect(updateRes.body).toHaveProperty("max_students", updatedClass.max_students);
  });

  it("should get a class by id", async () => {
    const id = "0fffa331-5c30-4cb6-b76b-3b9fb95d624b";
    const res = await request(app).get(`/api/classes/${id}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id", id);
  });

  it("should delete a class", async () => {
    const id = "922a9786-0e7c-47f4-bc41-bbe931855d9d";
    console.log("id " + id);
    const res = await request(app).post("/api/classes/deleteClass").send({ id });
    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Class deleted");
  }); */

});