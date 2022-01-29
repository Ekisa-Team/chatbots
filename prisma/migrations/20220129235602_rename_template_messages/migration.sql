/*
  Warnings:

  - You are about to drop the `chatbot_message` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name]` on the table `messaging_provider` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cellphone` to the `channel` table without a default value. This is not possible if the table is not empty.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "chatbot_message";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "template_message" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "message" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "chatbot_id" INTEGER NOT NULL,
    CONSTRAINT "template_message_chatbot_id_fkey" FOREIGN KEY ("chatbot_id") REFERENCES "chatbot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_channel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cellphone" TEXT NOT NULL,
    "account_sid" TEXT NOT NULL,
    "auth_token" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "messaging_provider_id" INTEGER NOT NULL,
    "chatbot_id" INTEGER NOT NULL,
    CONSTRAINT "channel_messaging_provider_id_fkey" FOREIGN KEY ("messaging_provider_id") REFERENCES "messaging_provider" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "channel_chatbot_id_fkey" FOREIGN KEY ("chatbot_id") REFERENCES "chatbot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_channel" ("account_sid", "auth_token", "chatbot_id", "created_at", "id", "messaging_provider_id", "updated_at") SELECT "account_sid", "auth_token", "chatbot_id", "created_at", "id", "messaging_provider_id", "updated_at" FROM "channel";
DROP TABLE "channel";
ALTER TABLE "new_channel" RENAME TO "channel";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "messaging_provider_name_key" ON "messaging_provider"("name");
