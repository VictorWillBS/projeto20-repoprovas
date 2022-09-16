-- CreateTable
CREATE TABLE "terms" (
    "id" SERIAL NOT NULL,
    "numbers" TEXT NOT NULL,

    CONSTRAINT "terms_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "terms_numbers_key" ON "terms"("numbers");
