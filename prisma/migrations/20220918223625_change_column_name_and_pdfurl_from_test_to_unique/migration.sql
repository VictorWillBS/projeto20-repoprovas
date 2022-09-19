/*
  Warnings:

  - A unique constraint covering the columns `[name,pdfUrl,teacherDisciplinesId]` on the table `test` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "test_name_key";

-- DropIndex
DROP INDEX "test_pdfUrl_key";

-- CreateIndex
CREATE UNIQUE INDEX "test_name_pdfUrl_teacherDisciplinesId_key" ON "test"("name", "pdfUrl", "teacherDisciplinesId");
