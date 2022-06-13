import { Component } from '@angular/core';
import { FormControl,FormBuilder,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Forms';
  suruForm:FormGroup ;
  constructor(private formbuild:FormBuilder)
  {
    this.suruForm=this.formbuild.group({
      aa:["",[Validators.required,Validators.maxLength(5)]],
       bb:new FormControl(),
        cc:new FormControl(),
        dd:["",this.validatenum]
    })
  }
  
validatenum(dd:FormControl)
{
  if(dd.value>100)
  {
    return null;
  }
  else{
    return {err:{error:"nice"}}
  }

}

  submit()
  {
    console.log(this.suruForm);
  }
}
