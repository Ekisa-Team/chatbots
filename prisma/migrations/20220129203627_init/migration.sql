-- CreateTable
CREATE TABLE "app" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "chatbot" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "app_id" INTEGER NOT NULL,
    CONSTRAINT "chatbot_app_id_fkey" FOREIGN KEY ("app_id") REFERENCES "app" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "ChatbotMessage" (
    "id" BIGINT NOT NULL PRIMARY KEY,
    "message" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "chatbot_id" INTEGER NOT NULL,
    CONSTRAINT "ChatbotMessage_chatbot_id_fkey" FOREIGN KEY ("chatbot_id") REFERENCES "chatbot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "provider" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "channel" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "account_sid" TEXT NOT NULL,
    "auth_token" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL,
    "providerId" INTEGER NOT NULL,
    "chatbot_id" INTEGER NOT NULL,
    CONSTRAINT "channel_providerId_fkey" FOREIGN KEY ("providerId") REFERENCES "provider" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "channel_chatbot_id_fkey" FOREIGN KEY ("chatbot_id") REFERENCES "chatbot" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
