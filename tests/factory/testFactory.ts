import { faker } from "@faker-js/faker";
export function testAllowed(){
const name = faker.random.words();
const url = faker.internet.url();
const category = 'teste';
const discipline = 'React';
const teacher = "Diego Pinho";
return{
  name,
  url,
  category: "Projeto",
  discipline: "React",
  teacher: "Diego Pinho"
}
}
export function testNotAllowed(){
  const name = faker.random.words();
  const url = faker.internet.url();
  const category = faker.random.words();
  const discipline = faker.random.words();
  const teacher =  faker.random.words();
  return{
    name,
    url,
    category,
    discipline,
    teacher,
  }
  }