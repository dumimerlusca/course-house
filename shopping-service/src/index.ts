import { app } from "./app";
import { prisma } from "./prisma-client";

const startServer = async () => {
  try {
    await prisma.$connect();
    console.log("Connected to database");
    app.listen(3004, () => {
      console.log("Server listening on port 3004");
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
