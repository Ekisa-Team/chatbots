/*
  Warnings:

  - The primary key for the `template_message` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `template_message` table. The data in that column could be lost. The data in that column will be cast from `BigInt` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_template_message" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
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
