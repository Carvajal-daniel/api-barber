import { integer, pgTable, text, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: text("id").primaryKey().unique(),
  name: text("name").notNull(),
  email: text("email").notNull(),
});
