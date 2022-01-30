/*
  Warnings:

  - Added the required column `access_key` to the `channel` table without a default value. This is not possible if the table is not empty.

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
CREATE TABLE "new_channel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cellphone" TEXT NOT NULL,
    "account_sid" TEXT NOT NULL,
    "auth_token" TEXT NOT NULL,
    "http_verb" TEXT NOT NULL,
    "callback_url" TEXT NOT NULL,
    "access_key" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "messaging_provider_id" INTEGER NOT NULL,
    "chatbot_id" INTEGER NOT NULL,
    CONSTRAINT "channel_messaging_provider_id_fkey" FOREIGN KEY ("messaging_provider_id") REFERENCES "messaging_provider" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "channel_chatbot_id_fkey" FOREIGN KEY ("chatbot_id") REFERENCES "chatbot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_channel" ("account_sid", "auth_token", "callback_url", "cellphone", "chatbot_id", "created_at", "http_verb", "id", "messaging_provider_id", "updated_at") SELECT "account_sid", "auth_token", "callback_url", "cellphone", "chatbot_id", "created_at", "http_verb", "id", "messaging_provider_id", "updated_at" FROM "channel";
DROP TABLE "channel";
ALTER TABLE "new_channel" RENAME TO "channel";
CREATE UNIQUE INDEX "channel_access_key_key" ON "channel"("access_key");
CREATE UNIQUE INDEX "channel_chatbot_id_key" ON "channel"("chatbot_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
