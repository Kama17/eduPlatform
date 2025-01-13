/*
  Warnings:

  - The `autoShipDate` column on the `userDetails` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- DropIndex
DROP INDEX "userDetails_firstName_key";

-- AlterTable
ALTER TABLE "userDetails" ALTER COLUMN "firstName" DROP NOT NULL,
ALTER COLUMN "lastName" DROP NOT NULL,
DROP COLUMN "autoShipDate",
ADD COLUMN     "autoShipDate" TIMESTAMP(3),
ALTER COLUMN "telegramName" DROP NOT NULL;
