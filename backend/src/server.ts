import "reflect-metadata";
import { AppDataSource } from "./config/data-sources";
import app from "./app";
import { seedRoles } from "./seedRoles";

const PORT = process.env.PORT || 5000;


AppDataSource.initialize()
  .then(async () => {
    console.log("Data Source has been initialized!");
    await seedRoles();
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error during Data Source initialization", err);
  });


