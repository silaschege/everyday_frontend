import React , { useState } from "react";
import { Form, Input, Button} from "antd";
import HrLayout from "../../../containers/templates/hr_manager/hrlayout";
import axiosInstance from "../../connection";
import { useHistory } from 'react-router-dom';


const FormItem = Form.Item;


export default function ApplicantCreateForm () {
  
  const history = useHistory();
	const initialFormData = Object.freeze({
    First_Name: '',
    Last_Name: '',
    Other_Names: '',
    Email: '',
    Id_Number: '',
    Phone_Number: '',
    Level_of_Education: '',   
    Course: '',
    Other_Education: '',   
    Previous_Job: '',
    Time_Worked_There: '',   
	});

	const [formData, updateFormData] = useState(initialFormData);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);

		axiosInstance
			.post(`job/Applicant/`, {
    First_Name:formData.First_Name   ,
    Last_Name :formData.Last_Name ,
    Other_Names:formData.Other_Names,
    Email:formData.Email ,
    Id_Number:formData.Id_Number  ,
    Phone_Number:formData.Phone_Number ,
    Level_of_Education:formData.Level_of_Education,
    Course:formData.Course ,
    Other_Education:formData.Other_Education ,
    Previous_Job:formData.Previous_Job,
    Time_Worked_There:formData.Time_Worked_There ,
    
			})
			.then((res) => {
				history.push('/applicant/');
				console.log(res);
				console.log(res.data);
			});
	};

	

    return (
      <div>
          <HrLayout>
        <Form>
       
          <FormItem label="First Name">
            <Input 
            id="First_Name"
            name="First_Name" 
						label="First_Name"
						onChange={handleChange}
            placeholder="Input your first name here" 
            />
          </FormItem>


          <FormItem label="Last Name">
            <Input 
            id="Last_Name"
            name="Last_Name" 
						label="Last_Name"
						onChange={handleChange}
            placeholder="Input a your last name here" 
            />
          </FormItem>

          <FormItem label="Other Names">
            <Input 
            id="Other_Names"
            name="Other_Names" 
						label="Other_Names"
						onChange={handleChange}
            placeholder="Input your other names here" 
            />
          </FormItem>

          <FormItem label="Email">
            <Input 
            	id="Email"
              name="Email" 
             label="Email Address"
             onChange={handleChange}
            placeholder="Input a business email here" 
            />
          </FormItem>

          <FormItem label="Id_Number">
            <Input 
            	id="Id_Number"
              name="Id_Number"
             label="Id_Number"   
             onChange={handleChange}
            placeholder="Input your id number here" 
            />
          </FormItem>

          <FormItem label="Phone Number">
            <Input 
            	id="Phone_Number"
              name="Phone_Number"
             label="Phone_Number"   
             onChange={handleChange}
            placeholder="Input your phone number here" 
            />
          </FormItem>
          
 

          <FormItem label="Level_of_Education">
            <Input 
            	id="Level_of_Education"
              name="Level_of_Education"
             label="Level_of_Education"   
             onChange={handleChange}
            placeholder="Input your Level of Education here" 
            />
          </FormItem>

          <FormItem label="Course">
            <Input 
            	id="Course"
              name="Course"
             label="Course"   
             onChange={handleChange}
            placeholder="Input your Course here" 
            />
          </FormItem>

          <FormItem label="Other_Education">
            <Input 
            	id="Other_Education"
              name="Other_Education"
             label="Other_Education"   
             onChange={handleChange}
            placeholder="Input your Other Education here" 
            />
          </FormItem>

          <FormItem label="Previous_Job">
            <Input 
            	id="Previous_Job"
              name="Previous_Job"
             label="Previous_Job"   
             onChange={handleChange}
            placeholder="Input your Previous Job here" 
            />
          </FormItem>


          <FormItem label="Time_Worked_There">
            <Input 
            	id="Time_Worked_There"
              name="Time_Worked_There"
             label="Time_Worked_There"   
             onChange={handleChange}
            placeholder="Input your Time Worked There here" 
            />
          </FormItem>


          <FormItem>
            <Button 
            type="submit"
						color="Blue"
						onClick={handleSubmit}
            >
            Create
            </Button>
          </FormItem>

        </Form>
        </HrLayout>
      </div>
    );
  
}


