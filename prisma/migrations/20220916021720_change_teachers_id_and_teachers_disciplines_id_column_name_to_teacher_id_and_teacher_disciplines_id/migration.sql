/*
  Warnings:

  - You are about to drop the column `teachersId` on the `teachersDisciplines` table. All the data in the column will be lost.
  - You are about to drop the column `teachersDisciplinesId` on the `test` table. All the data in the column will be lost.
  - Added the required column `teacherId` to the `teachersDisciplines` table without a default value. This is not possible if the table is not empty.
  - Added the required column `teacherDisciplinesId` to the `test` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "teachersDisciplines" DROP CONSTRAINT "teachersDisciplines_teachersId_fkey";

-- DropForeignKey
ALTER TABLE "test" DROP CONSTRAINT "test_teachersDisciplinesId_fkey";

-- AlterTable
ALTER TABLE "teachersDisciplines" DROP COLUMN "teachersId",
ADD COLUMN     "teacherId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "test" DROP COLUMN "teachersDisciplinesId",
ADD COLUMN     "teacherDisciplinesId" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "teachersDisciplines" ADD CONSTRAINT "teachersDisciplines_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "test" ADD CONSTRAINT "test_teacherDisciplinesId_fkey" FOREIGN KEY ("teacherDisciplinesId") REFERENCES "teachersDisciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
