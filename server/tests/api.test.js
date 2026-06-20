import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import request from "supertest";
import { afterAll, afterEach, beforeAll, describe, expect, it } from "vitest";
import app from "../src/app.js";
import ContactMessage from "../src/models/ContactMessage.js";

let mongo;

beforeAll(async () => {
  mongo = await MongoMemoryServer.create({ instance: { ip: "127.0.0.1" } });
  await mongoose.connect(mongo.getUri());
  process.env.JWT_SECRET = "test-secret-that-is-long-enough";
  process.env.ADMIN_EMAIL = "admin@example.com";
  process.env.ADMIN_PASSWORD_HASH = await bcrypt.hash("strong-password", 4);
});

afterEach(async () => {
  await ContactMessage.deleteMany({});
});

afterAll(async () => {
  await mongoose.disconnect();
  if (mongo) await mongo.stop();
});

describe("contact API", () => {
  it("rejects invalid contact data", async () => {
    const response = await request(app).post("/api/contact").send({
      name: "",
      email: "invalid",
      subject: "",
      message: "short",
    });

    expect(response.status).toBe(400);
    expect(response.body.success).toBe(false);
  });

  it("stores a valid contact message", async () => {
    const response = await request(app).post("/api/contact").send({
      name: "Ada Lovelace",
      email: "ada@example.com",
      subject: "Project enquiry",
      message: "I would like to discuss a full-stack product.",
    });

    expect(response.status).toBe(201);
    expect(await ContactMessage.countDocuments()).toBe(1);
  });
});

describe("admin API", () => {
  it("logs in with configured admin credentials", async () => {
    const response = await request(app).post("/api/admin/login").send({
      email: "admin@example.com",
      password: "strong-password",
    });

    expect(response.status).toBe(200);
    expect(response.body.token).toBeTruthy();
  });

  it("updates a message status through a protected route", async () => {
    const login = await request(app).post("/api/admin/login").send({
      email: "admin@example.com",
      password: "strong-password",
    });
    const message = await ContactMessage.create({
      name: "Grace Hopper",
      email: "grace@example.com",
      subject: "Hello",
      message: "This is a sufficiently long test message.",
    });

    const response = await request(app)
      .patch(`/api/admin/messages/${message.id}/status`)
      .set("Authorization", `Bearer ${login.body.token}`)
      .send({ status: "replied" });

    expect(response.status).toBe(200);
    expect(response.body.message.status).toBe("replied");
  });
});
