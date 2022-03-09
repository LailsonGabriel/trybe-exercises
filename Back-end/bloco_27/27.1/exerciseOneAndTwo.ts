class School {
  name: string;
  tests: number[];
  works: number[];
  grades: number;

  constructor(n: string, tests: number[], works: number[]) {
    this.name = n;
    this.tests = tests;
    this.works = works;
    this.grades = 0;
  }

  sumGrades(): number {
    const grades = this.tests.concat(this.works);
    const total = grades.reduce((prev, current) => prev + current, 0);
    this.grades = total;
    return total;
  }

  average(): void {
    const totalGrades = this.tests.length + this.works.length;
    console.log(`A média do aluno ${this.name} é: ${this.grades / totalGrades}`);
  }
}

const person1 = new School('Junin', [5, 7, 5, 9], [8, 9, 10]);
person1.sumGrades();
person1.average();
