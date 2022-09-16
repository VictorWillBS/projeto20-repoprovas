-- AddForeignKey
ALTER TABLE "test" ADD CONSTRAINT "test_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
