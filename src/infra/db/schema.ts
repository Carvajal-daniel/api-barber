import { pgTable, text, timestamp, boolean, numeric, integer } from "drizzle-orm/pg-core";

// --- Tabela de Usuários ---
// Armazena informações sobre os usuários do sistema.
export const usersTable = pgTable("users", {
  id: text("id").primaryKey(), 
  name: text("name").notNull(),
  email: text("email").notNull().unique(), 
  password: text("password").notNull(),
  cpf: text("cpf").notNull().unique(),
  phone: text("phone").notNull().unique(),
  is_admin: boolean("is_admin").default(false).notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
});

// --- Tabela de Serviços ---
// Armazena os serviços principais oferecidos. Ex: "Corte de Cabelo", "Manicure".
export const serviceTable = pgTable("services", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  slug: text("slug").notNull().unique(), 
  created_at: timestamp("created_at").defaultNow().notNull(), 
})

// --- Tabela de Variações de Serviço ---
// Descreve as diferentes opções para um serviço. Ex: "Corte Masculino", "Corte Feminino".
export const serviceVariationTable = pgTable("service_variation", {
  id: text("id").primaryKey(),
  service_id: text("service_id").notNull().references(() => serviceTable.id), // Chave estrangeira referenciando a tabela de serviços.
  name: text("name").notNull(),
  price: numeric("price").notNull(), 
  description: text("description").notNull(),
  duration: integer("duration").notNull(), // Duração em minutos
  img_url: text("img_url").notNull(),
  slug: text("slug").notNull().unique(),
  is_active: boolean("is_active").default(false).notNull(),
  created_at: timestamp("created_at").defaultNow().notNull(),
})