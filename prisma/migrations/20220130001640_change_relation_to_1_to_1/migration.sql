/*
  Warnings:

  - A unique constraint covering the columns `[chatbot_id]` on the table `channel` will be added. If there are existing duplicate values, this will fail.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
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
CREATE UNIQUE INDEX "channel_chatbot_id_key" ON "channel"("chatbot_id");
