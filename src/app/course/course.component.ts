import { Component, ContentChild, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { CourseModel } from './course.model'

//import { CourseModel } from './course.model';
import { ApiService2 } from '../service/api.service.course';


@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {


  //output decorator
  @Output()
  newMessageEvent = new EventEmitter<string>();
  courseArray: any[];




  public courseForm !: FormGroup;

  courseModelObj: CourseModel = new CourseModel();
  courseData !: any; //get

  showAdd !: boolean;
  showUpdate !: boolean;

  constructor(private formbuilder: FormBuilder,
    private api2: ApiService2) {
    console.log("Child Constructor!")
  }



  ngOnInit(): void {
    this.courseForm = this.formbuilder.group({
      num: [''],
      course: [''],
      duration: [''],
      fees: ['']


    })
    console.log("Child ngOnInit woks!")
    this.getAllCourse();
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    console.log("Child ngOnChanges woks!")
  }

  clickAddCourse() {
    this.courseForm.reset();
    this.showAdd = true;
    this.showUpdate = false;
  }


  //post
  postCourseDetails() {
    this.courseModelObj.num = this.courseForm.value.num;
    this.courseModelObj.course = this.courseForm.value.course;
    this.courseModelObj.duration = this.courseForm.value.duration;
    this.courseModelObj.fees = this.courseForm.value.fees;

    this.api2.postCourse(this.courseModelObj)
      .subscribe(res => {
        console.log(res);
        alert("Course Added Successfully")
        let ref = document.getElementById('cancel')
        ref?.click();
        this.courseForm.reset();
        this.getAllCourse();
      },
        err => {
          alert("Something went wrong")
        }

      )
  }


  //get all
  getAllCourse() {
    this.courseArray = [];  //@output decorator
    this.api2.getCourse()
      .subscribe(res => {
        this.courseData = res;

        this.courseData.forEach(courseData => {  //@output decorator
          if (courseData) {
            this.courseArray.push(courseData.course);
          }
        })
        console.log(this.courseArray);
      })
  }

  //@output decorator
  sentMessage(courseArray) {
    this.newMessageEvent.emit(courseArray)
  }

  //Delete Student
  deleteCourse(row: any) {
    this.api2.deleteCourse(row.id)
      .subscribe(res => {
        alert("Course Deleted");
        this.getAllCourse();
      })
  }


  onEdit1(row: any) {

    this.showAdd = false;
    this.showUpdate = true;

    this.courseModelObj.id = row.id;
    this.courseForm.controls['num'].setValue(row.num);
    this.courseForm.controls['course'].setValue(row.course);
    this.courseForm.controls['duration'].setValue(row.duration);
    this.courseForm.controls['fees'].setValue(row.fees);
  }


  //update
  updateCourseDetails() {
    // this.studentsModelObj.number=this.formValue.value.number;

    this.courseModelObj.num = this.courseForm.value.num;
    this.courseModelObj.course = this.courseForm.value.course;
    this.courseModelObj.duration = this.courseForm.value.duration;
    this.courseModelObj.fees = this.courseForm.value.fees;


    this.api2.updateCourse(this.courseModelObj, this.courseModelObj.id)
      .subscribe(res => {
        alert("Update Successfully");
        let ref = document.getElementById('cancel')
        ref?.click();
        this.courseForm.reset();
        this.getAllCourse();
      })
  }


}