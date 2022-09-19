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


// módulos do curso
INSERT INTO terms ("number") VALUES (1);
INSERT INTO terms ("number") VALUES (2);
INSERT INTO terms ("number") VALUES (3);
INSERT INTO terms ("number") VALUES (4);
INSERT INTO terms ("number") VALUES (5);
INSERT INTO terms ("number") VALUES (6);

// tipos de provas
INSERT INTO categories ("name") VALUES ('Projeto');
INSERT INTO categories ("name") VALUES ('Prática');
INSERT INTO categories ("name") VALUES ('Recuperação');

// professores(as)
INSERT INTO teachers ("name") VALUES ('Diego Pinho');
INSERT INTO teachers ("name") VALUES ('Bruna Hamori');

// disciplinas
INSERT INTO disciplines ("name", "termId") VALUES ('HTML e CSS', 1);
INSERT INTO disciplines ("name", "termId") VALUES ('JavaScript', 2);
INSERT INTO disciplines ("name", "termId") VALUES ('React', 3);
INSERT INTO disciplines ("name", "termId") VALUES ('Humildade', 1);
INSERT INTO disciplines ("name", "termId") VALUES ('Planejamento', 2);
INSERT INTO disciplines ("name", "termId") VALUES ('Autoconfiança', 3);

// professores(as) e disciplinas
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 1);
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 2);
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (1, 3); 
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 4);
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 5);
INSERT INTO "teachersDisciplines" ("teacherId", "disciplineId") VALUES (2, 6);