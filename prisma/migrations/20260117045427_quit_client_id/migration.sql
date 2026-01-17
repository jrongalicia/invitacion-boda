/*
  Warnings:

  - You are about to drop the column `clientId` on the `Rsvp` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Rsvp` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Rsvp_clientId_key";

-- AlterTable
ALTER TABLE "Rsvp" DROP COLUMN "clientId",
DROP COLUMN "updatedAt";
