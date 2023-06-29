import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'
import { StudentsModel } from './students.model';
import { ApiService } from '../service/api.service.student';
import { Router } from '@angular/router';

@Component({  //not changes
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

 //output
  message=[]

//outut
reciveMessage(newMessage: string) {
  this.message.push(newMessage);
}

  //validation
  formdata = { number: "", registerNo: "", firstName: "", lastName: "" ,email: "" ,dob: "" ,phone: "" }
  submit = false;


  isChild = false;
  channelName = '';


  formValue !: FormGroup; //angForm

  submitted = false;
  studentsModelObj: StudentsModel = new StudentsModel();
  studentsData !: any; //get

  //********** */
  showAdd !: boolean;
  showUpdate !: boolean;

  //formbuilder
  //post
  constructor(private formbuilder: FormBuilder,
    private api: ApiService, private router: Router) {
    this.ngOnInit;
  }


  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      number: ['', [Validators.required, Validators.minLength(10)]],
      registerNo: ['', [Validators.required, Validators.maxLength(15), Validators.pattern("^[a-zA-Z]+$")]],
      firstName: ['', [Validators.email, Validators.required]],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      dob: ['', Validators.required],
      phone: ['', Validators.required]

    })
    console.log("Parent ngOnInit woks!")
    this.getAllStudents();
  }



  ngOnChanges(): void {
    console.log("Parent ngOnChanges woks!")
  }


  clickAddStudent() {
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;

  }

  //post
  postStudentDetails() {
    //this.studentsModelObj.number=this.formValue.value.number;
    this.studentsModelObj.number = this.formValue.value.number;
    this.studentsModelObj.registerNo = this.formValue.value.registerNo;
    this.studentsModelObj.firstName = this.formValue.value.firstName;
    this.studentsModelObj.lastName = this.formValue.value.lastName;
    this.studentsModelObj.email = this.formValue.value.email;
    this.studentsModelObj.dob = this.formValue.value.dob;
    this.studentsModelObj.phone = this.formValue.value.phone;
    this.api.postStudent(this.studentsModelObj)

      .subscribe(res => {
        console.log(res);
        alert("Student Added Successfully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllStudents();
      },
        err => {
          alert("Something went wrong")
        }

      )
  }

  //get all
  getAllStudents() {
    this.api.getStudent()
      .subscribe(res => {
        this.studentsData = res;
      })
  }

  //Delete Student
  deleteStudent(row: any) {
    this.api.deleteStudent(row.id)
      .subscribe(res => {
        alert("Student Deleted");
        this.getAllStudents();
      })
  }

  onEdit(row: any) {

    this.showAdd = false;
    this.showUpdate = true;

    this.studentsModelObj.id = row.id;
    // this.formValue.controls['number'].setValue(row.number);
    this.formValue.controls['number'].setValue(row.number);
    this.formValue.controls['registerNo'].setValue(row.registerNo);
    this.formValue.controls['firstName'].setValue(row.firstName);
    this.formValue.controls['lastName'].setValue(row.lastName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['dob'].setValue(row.dob);
    this.formValue.controls['phone'].setValue(row.phone);

  }


  //update
  updateStudentDetails() {
    // this.studentsModelObj.number=this.formValue.value.number;
    this.studentsModelObj.number = this.formValue.value.number;
    this.studentsModelObj.registerNo = this.formValue.value.registerNo;
    this.studentsModelObj.firstName = this.formValue.value.firstName;
    this.studentsModelObj.lastName = this.formValue.value.lastName;
    this.studentsModelObj.email = this.formValue.value.email;
    this.studentsModelObj.dob = this.formValue.value.dob;
    this.studentsModelObj.phone = this.formValue.value.phone;

    this.api.updateStudent(this.studentsModelObj, this.studentsModelObj.id)
      .subscribe(res => {
        alert("Update Successfully");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.formValue.reset();
        this.getAllStudents();
      })
  }

  toggleChild() {
    this.isChild = !this.isChild;
  }

  onSubmit() {
    console.log(this.formdata);
  }

}

