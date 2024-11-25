-- CreateTable
CREATE TABLE "Login" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAT" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "loginEmail" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Login_loginEmail_key" ON "Login"("loginEmail");
