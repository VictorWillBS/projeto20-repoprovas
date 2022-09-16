-- CreateTable
CREATE TABLE "teachersDisciplines" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "disciplineId" INTEGER NOT NULL,
    "teachersId" INTEGER NOT NULL,

    CONSTRAINT "teachersDisciplines_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "teachersDisciplines_name_key" ON "teachersDisciplines"("name");
