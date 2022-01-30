/*
  Warnings:

  - You are about to drop the column `name` on the `chatbot` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `app` will be added. If there are existing duplicate values, this will fail.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_chatbot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "app_id" INTEGER NOT NULL,
    CONSTRAINT "chatbot_app_id_fkey" FOREIGN KEY ("app_id") REFERENCES "app" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_chatbot" ("app_id", "created_at", "id", "updated_at") SELECT "app_id", "created_at", "id", "updated_at" FROM "chatbot";
DROP TABLE "chatbot";
ALTER TABLE "new_chatbot" RENAME TO "chatbot";
CREATE TABLE "new_template_message" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "message" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "chatbot_id" INTEGER NOT NULL,
    CONSTRAINT "template_message_chatbot_id_fkey" FOREIGN KEY ("chatbot_id") REFERENCES "chatbot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_template_message" ("chatbot_id", "created_at", "id", "message", "updated_at") SELECT "chatbot_id", "created_at", "id", "message", "updated_at" FROM "template_message";
DROP TABLE "template_message";
ALTER TABLE "new_template_message" RENAME TO "template_message";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "app_name_key" ON "app"("name");
