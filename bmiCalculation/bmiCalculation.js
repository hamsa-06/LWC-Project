import { LightningElement } from 'lwc';

export default class BmiCalculation extends LightningElement {
    height = ' ';
    weight = ' ' ;
    HeightLabel = 'Height(CM)';
    WeightLabel = 'Weight(KG)';
    handleHeightChange(event){
        this.height = event.target.value;
    }
    handleWeightChange(event){
        this.weight = event.target.value;
    }
   handlebmi(){
        this.height = Number(this.height);
        this.weight = Number(this.weight);
        if(this.height && this.weight){
            const heightInMeters = this.height / 100;
            let bmi = this.weight / (heightInMeters * heightInMeters);  
            this.height = bmi;
            this.HeightLabel = 'Your BMI Value is';
            this.WeightLabel = 'So You are :'
            let bmiresult;
            if(bmi < 18.5){
                bmiresult= 'UnderWeight';
                this.weight = bmiresult;
            }
            else if((bmi > 18.5) && (bmi < 24.9)){
                bmiresult = 'Normal';
                this.weight = bmiresult;
            }
            else if((bmi > 25) && (bmi < 29.9)){
                bmiresult = 'Overweight';
                this.weight = bmiresult;
            }
            else{
                bmiresult = 'Obese';
                this.weight = bmiresult;
            }
            //console.log(this.we);
            
        }
        else{
            alert('Enter Height and Weight!!')
        }
        
   }


}