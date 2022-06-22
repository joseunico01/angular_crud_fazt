import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title: string = 'Angular_crud';
  msg: string = '';

  employees = [
    { name: 'Fazt', position: 'manager', email: 'emailFazt@gmail.com' },
    { name: 'Juan', position: 'Designer', email: 'emailJuan@gmail.com' },
    { name: 'Pedro', position: 'Programmer', email: 'emailPedro@gmail.com' },
  ];

  model: any = {};
  model2: any = {};

  //creamos esta variable para mostrar el actualizar solo cuando hagan click
  hideUpdate: boolean = true;

  addEmployee(): void {
    this.employees.push(this.model);
    this.msg = 'Campo Agregado';
  }

  deleteEmployee(i: any): void {
    var answer = confirm('Estas seguro de querer eliminar');
    if (answer) {
      //para eliminar un indice del Array
      this.employees.splice(i, 1);
      this.msg = 'Campo eliminado';
    }
  }

  myValue: any;
  editEmployee(i: any): void {
    this.hideUpdate = false;
    this.model2.name = this.employees[i].name;
    this.model2.position = this.employees[i].position;
    this.model2.email = this.employees[i].email;
    this.myValue = 1;
  }

  updateEmployee(): void {
    //tenemos un error solo actualiza la columna nro2
    //para ver si guarda los datos modificads
    this.hideUpdate = true;
    console.log(this.model2);
    let i = this.myValue;
    for (let j = 0; j < this.employees.length; j++) {
      if (i == j) {
        this.employees[i] = this.model2;
        this.msg = 'Campo actualizado';
        this.model2 = {};
      }
    }
  }

  closeAlert(): void {
    this.msg = '';
  }
}
