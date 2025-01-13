/*
  Warnings:

  - You are about to drop the column `progressEducation` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `progressPlatform` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "progressEducation",
DROP COLUMN "progressPlatform";
