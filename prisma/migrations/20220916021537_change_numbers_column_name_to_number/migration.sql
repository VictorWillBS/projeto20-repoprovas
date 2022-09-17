/*
  Warnings:

  - You are about to drop the column `numbers` on the `terms` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[number]` on the table `terms` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `number` to the `terms` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "terms_numbers_key";

-- AlterTable
ALTER TABLE "terms" DROP COLUMN "numbers",
ADD COLUMN     "number" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "terms_number_key" ON "terms"("number");
