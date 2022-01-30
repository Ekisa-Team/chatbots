/*
  Warnings:

  - You are about to drop the `ChatbotMessage` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `provider` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the column `providerId` on the `channel` table. All the data in the column will be lost.
  - Added the required column `messaging_provider_id` to the `channel` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "ChatbotMessage";
PRAGMA foreign_keys=on;

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "provider";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "chatbot_message" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "message" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "chatbot_id" INTEGER NOT NULL,
    CONSTRAINT "chatbot_message_chatbot_id_fkey" FOREIGN KEY ("chatbot_id") REFERENCES "chatbot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "messaging_provider" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_channel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "account_sid" TEXT NOT NULL,
    "auth_token" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "messaging_provider_id" INTEGER NOT NULL,
    "chatbot_id" INTEGER NOT NULL,
    CONSTRAINT "channel_messaging_provider_id_fkey" FOREIGN KEY ("messaging_provider_id") REFERENCES "messaging_provider" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "channel_chatbot_id_fkey" FOREIGN KEY ("chatbot_id") REFERENCES "chatbot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_channel" ("account_sid", "auth_token", "chatbot_id", "created_at", "id", "updated_at") SELECT "account_sid", "auth_token", "chatbot_id", "created_at", "id", "updated_at" FROM "channel";
DROP TABLE "channel";
ALTER TABLE "new_channel" RENAME TO "channel";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
