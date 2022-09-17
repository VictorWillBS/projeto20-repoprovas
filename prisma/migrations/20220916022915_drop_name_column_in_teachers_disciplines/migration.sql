/*
  Warnings:

  - You are about to drop the column `name` on the `teachersDisciplines` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "teachersDisciplines_name_key";

-- AlterTable
ALTER TABLE "teachersDisciplines" DROP COLUMN "name";
