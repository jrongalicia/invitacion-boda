/*
  Warnings:

  - A unique constraint covering the columns `[clientId]` on the table `Rsvp` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `clientId` to the `Rsvp` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `Rsvp` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Rsvp" ADD COLUMN     "clientId" TEXT NOT NULL,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Rsvp_clientId_key" ON "Rsvp"("clientId");
