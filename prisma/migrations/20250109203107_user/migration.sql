/*
  Warnings:

  - You are about to drop the `Content` table. If the table is not empty, all the data it contains will be lost.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "active" TEXT NOT NULL DEFAULT 'no';

-- DropTable
DROP TABLE "Content";

-- CreateTable
CREATE TABLE "userDetails" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "autoShipDate" TEXT NOT NULL,
    "telegramName" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "userDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userDetails_firstName_key" ON "userDetails"("firstName");

-- AddForeignKey
ALTER TABLE "userDetails" ADD CONSTRAINT "userDetails_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
