import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { stringify } from 'querystring';

@Component({
  selector: 'app-wealth-test',
  templateUrl: './wealth-test.component.html',
  styleUrls: ['./wealth-test.component.css']
})
export class WealthTestComponent implements OnInit {


  constructor() { }
  
  score: number = 0;
  creditScore: number
  income: number
  expenses: number
  debt: number  
  returns: number
  interest: number
  ratio1: number  
  ratio2: number
  ratio3: number
  advice: string
  grade:string
  testVisable: boolean
  testButtonVisable: boolean = true;
  showScore: boolean;
  
  image: string = "https://media.giphy.com/media/72HahsJD4atSE/giphy.gif"


  ngOnInit() {
    
  }
 
  deactivateTest(){
    this.activateTest();
    //location.reload();
  }

  
  activateTest(){
   
    this.refreshData();
    console.log("in act")
 
    console.log(this.testVisable);
    if(this.testVisable ==true){
      this.testVisable = false;
    }else{
      this.testVisable = true;
    }
    
    console.log(this.testVisable);
    this.testButtonVisable = !this.testVisable;
    this.toggleBackground();
    
 }

  toggleBackground(){
    if(this.testVisable){
    this.image = null;
    }
    else{
    this.image = "https://media.giphy.com/media/72HahsJD4atSE/giphy.gif"
    }
  }
 cleanData(){
   this.advice =""
   this.score = 0;
   this.creditScore =0;
   this.expenses =0;
   this.returns =0;
   this.interest =0;
   this.income =0;
 }
 refreshData(){
  let score;
  let advice;
  let creditScore;
  let expenses;
  let returns;
  let interest;
  let income;
  
  this.advice = advice
  this.score = score;
  this.creditScore =creditScore;
  this.expenses =expenses;
  this.returns =returns;
  this.interest =interest;
  this.income =income;
  this.showScore = false;
 }
   
  calcScore1(returns: number, interest:number){
    console.log("incalc1"); 
    var ratio: number
    if(interest == 0){
    ratio = returns +1/1;
    }else{
      if(returns <= 0){
        returns = 1;
      } 
    ratio= returns/interest;

    if (ratio<-20){
      return 7;
      }
    }
    if (ratio<0 && ratio> -20){ 
     return 7.3;
    }
    
    console.log(ratio)
    if(ratio>=4.25){
      return 10;
    }
    if(ratio>=3.3 && ratio<4.25){
      return 9 + ratio - 3.3;
    }
    if(ratio>=2.5 && ratio<3.3){
      return 8 + ratio - 2.5;
    }
    if(ratio>=1 && ratio<2.5){ 
      if(ratio>= 2 && ratio<2.5){
        return 7.8
      }if(ratio>1.5 && ratio<2){
      return 7.5
    }
      if(ratio>1.3 && ratio<=1.5){
        return 7.3
      } 
      if(ratio>1 && ratio<=1.3){ 
        return 7.2;
      }
      if(ratio=1){
      return 7;   
      }
    }
    if(ratio>0 && ratio<1){
      return 6 + ratio - 0.1;
    }
    console.log("endingcalc1")
  } 
  calcScore2(expenses: number, income:number){
    console.log("incalc2");
    let monthly = income/12; 
    var ratio: number
    if(income == 0){
    return 4;
    }else{
    ratio= expenses/monthly;
    }
    console.log(ratio)
    let wtf= ratio<=0.28 && ratio>0.1
    console.log(wtf);
    if(ratio<=0.28 && ratio>0.1){ 
      console.log("in 9 range")
      if(ratio>=0.20){
       return 9;
      }else{
        return 9.5;
      } 
    }
    if(ratio<0 && ratio<=0.1){
      console.log("in 10 range")
      return 10;
    }
  }
  calcScore6(expenses: number, income:number){
    console.log("incalc2");
    let monthly = income/12; 
    var ratio: number
    if(income == 0){
    return 4;
    }else{
    ratio= expenses/monthly;
    }
    console.log(ratio)
    if(ratio>0 && ratio<=0.23){
      console.log("in 10 range")
      return 10;
    }
    if(ratio<=0.33 && ratio>0.23){ 
      console.log("in 9 range")
      if(ratio>=0.25){
       return 9;
      }else{
        return 9.5;
      } 
    }
    //let wtf = ratio<=0.28 && ratio>0.1
    //console.log(wtf)
    if(ratio>0.72){
      return 5;
    }
    if(ratio<=0.72 && ratio>0.6){
      return 6;
    }
    if(ratio<=0.6 && ratio>0.45){
      if(ratio>=0.5){
       return 7;
      }else{
        return 7.5;
      } 
    }
    if(ratio<=0.45 && ratio>0.33){ 
      if(ratio>=0.38){
       return 8;
      }else{
        return 8.5;
      } 
    }
   
    if(expenses==0){
      if (income<5000){
        return 4;
      }else
      if (income<10000 && income>=5000){
       return 5;
      }
      if (income>=10000 && income<20000){
        return 6;
    }
    if (income>=20000 && income<30000){
      return 7;
    }
    if (income>=30000 && income<40000){
      return 8;
    }
    if (income>=50000 && income<60000){
    return 9;
    }
    if (income>=60000){
    return 10;
    }
      console.log("endingcalc2")
    } 
  }


  calcScore3(creditScore: number) {
    console.log("incalc3");
    console.log(creditScore);
    if(creditScore>=800){
      return 10;
    }
    if(creditScore>=760 && creditScore<800){
      return 9;
    }
    if(creditScore>=700 && creditScore<760){
      if(creditScore>=730){
       return 8.5;
      }
      else{
        return 8;
      } 
    }
    if(creditScore>=650 && creditScore<700){
      if(creditScore>=675){
      return 7.5;
      }
     else{
       return 7;
     } 
    }
    if(creditScore>=600 && creditScore<650){
      if(creditScore>=625){
      return 6.5;
      }
     else{
       return 6;
     } 
    }
     if(creditScore<600) {
      return 5;
     }
  }

  getScore1(){      
     console.log("in getScore");
     let score = this.calcScore1(this.returns, this.interest);
     console.log(score);
     return score
  }
  getScore2(){      
    console.log("in getScore");
    console.log(this.expenses, this.income)
    let score = this.calcScore6(this.expenses, this.income);
    console.log(score);
    return score;
 }
 getScore3(){      
  console.log("in getScore");
  let score = this.calcScore3(this.creditScore);
  console.log(score);
  return score;
}

calcAverage(){
  console.log("inavg")
  let score1 = this.getScore1();
  let score2 = this.getScore2();
  let score3 = this.getScore3();

  let weighted1 = 2.3*score1;
  let weighted2 = 1.7*score2;
  let weighted3 = 1*score3;

  let sum = weighted1 + weighted2 + weighted3;
  let avg = sum/5.0;
  console.log(avg);
  this.score= avg*10;
  this.setGrade();
  this.advice = this.getAdvice(score1,score2,score3);
  this.testVisable = false;
  this.showScore= true;
}


getAdvice(score1:number,score2:number,score3:number){
  let advice = "";
  console.log(this.returns)
  if(this.returns<0){ 
    let str = "You've got an investors mindset even though your investments aren't yet profitable, that does not mean you're not "
    + "praticing the right habits, consider lowering risk of your endeavors and keep learning how to make smart and safe investments! "
    + "You can do it!"
   advice = advice.concat(str);
  }
  if(this.returns==0){
    let str = "You are not currently investing right now which is impacting your score and potential to be wealthy, "
    + "Find out how safe ways to start investing extra cash, I reccomend CD's, bonds, mutual funds and stocks even purchasing a home. "
    + " Get creative! Don't have a too late mindset start now! "
    advice = advice.concat(str);
  }
  if(this.returns>0){
  let str ="You understand the concept of investing and you pratice it well keep looking for ways to make capital gains! "
  advice = advice.concat(str);
  }
  if(score1>=8){
  
    let str = "Your investments are making you a higher return than the interest on your debt. This means you have what called good debt. "
    + "Good debt is how the wealthiest people leverage other peoples capital to acquire wealth for themselves "
    + "Keep it up! "
    advice = advice.concat(str);
  }
  if(score1<8 && score1>7){
    let str = "Your investments are making you a higher return than the interest on your debt. This means you have whats called 'good debt'. "
    + "Good debt is how the wealthiest people leverage other peoples capital to acquire wealth for themselves "
    + "Keep it up! "
    advice = advice.concat(str);
  }
  if(score1==7){
  let str = "You have almost created good debt, keep investing to make your returns larger than your interest! "
  advice = advice.concat(str);
  }
 if(score1>=6.5 && score1<7){
  let str = "You have almost created good debt, keep investing to make your returns larger than your interest! "
  advice = advice.concat(str);
  }
  if(score1>=6 && score1<6.5){
  let str = "You have almost created good debt, keep investing to make your returns larger than your interest! " 
  advice = advice.concat(str);  
  }
  if(score2>=8){

    let str= "You have an above avergage level of disposable income which greatly contributed to your score, "
    + "to take full advantage of this you must learn about more ways to make your capital gain equity in order to acquire wealth. "
    advice =  advice.concat(str);
  }
  if(score2<8 && score2>7){
    let str= "You have an above avergage level of disposable income which greatly contributed to your score, "
    + "to take full advantage of this you must learn about more ways to gain capital in order to acquire wealth. "
    advice = advice.concat(str);
  }
  if(score2==7){

    let str= "You have an avergage level of disposable income "
    + "try to find ways to cut down on your unnecessary expenses. "
    advice = advice.concat(str);
  }

  if(score2==6){
    let str= "You have a below avergage level of disposable income which greatly contributed to your score "
    + "you must learn about ways to better budget or increase income. "
    advice = advice.concat(str);
  }
  if(score2==5){
    let str= "You have a below avergage level of disposable income which greatly contributed to your score "
    + "if you cannot better budget or increase income then continue to raise your credit score in order to "
    + "gain access to capital."
    advice = advice.concat(str);
  }
 if(score2==4){
  let str= "You have a very below avergage level of disposable income which greatly contributed to your score "
  + "to take full advantage of this you must learn about ways to better budget or increase income. "
  advice = advice.concat(str);
  }

  if(score3==9||score3==10){

    let str = "You have perfect credit, you get lowest interest rates, the best terms and the most capital from the banks which drastically affected your score.";
    if(score1>7.5){
    str.concat("Keep investing and exploring new oppurtunities to make passive income") 
    }else{
    str.concat(" In order to take advantage of this you must leverage this captial on investing oppurtunities.")
    }
    advice = advice.concat(str);
  }
  if(score3==8){
    let str = "You have good credit you almost at the point of the most ideal terms from the banks "
    + "Dont let it go to waste and use this credit as a leverage to make more money. "
    advice = advice.concat(str);
  }
  if(score3==7){
    let str = "You have average credit but they say thats all a good investor needs! "
    advice =  advice.concat(str);
  }

  if(score3==6){
     let str = "Your credit isn't that good, therefore you may have to be a little more creative when it comes to accessing captial, try a personal loan. "
     advice = advice.concat(str);

  }
 if(score3==5){
    let str = "Your credit isn't that good, therefore you may have to be a little more creative when it comes to accessing captial, try a personal loan. "
    advice = advice.concat(str);
  }

 console.log(advice);
  return advice;
}

setGrade(){
  if(this.score>97){
    this.grade = "A+"
  }
  if(this.score<=97 && this.score>94){
    this.grade = "A"
  }
  if(this.score<=94 && this.score>=90){
    this.grade = "A-"
  }
  if(this.score<90 && this.score>86){
    this.grade = "B+"
  }
  if(this.score<86 && this.score>=84){
    this.grade = "B"
  }
  if(this.score<84 && this.score>=80){
    this.grade = "B-"
  }
  if(this.score<80 && this.score>=76){
    this.grade = "C+"
  }
  if(this.score<76 && this.score>=74){
    this.grade = "C"
  }
  if(this.score<74 && this.score>=70){
    this.grade = "C-"
  }
  if(this.score<70 && this.score>=60){
    this.grade = "D"
  }
  if(this.score<60){
    this.grade = "F"
  }
}

isNotZero(){
  if (this.score == 0){
    return false;
  }else
  return true;
  }
}
