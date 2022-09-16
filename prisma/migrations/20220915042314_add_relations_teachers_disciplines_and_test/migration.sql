-- AddForeignKey
ALTER TABLE "test" ADD CONSTRAINT "test_teachersDisciplinesId_fkey" FOREIGN KEY ("teachersDisciplinesId") REFERENCES "teachersDisciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
