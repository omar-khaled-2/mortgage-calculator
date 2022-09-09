import React, { useEffect, useState } from 'react';

import { Container, Grid, Label, InputContainer, Title } from './App.styles';
import Button from './components/Button';
import Slider from './components/Slider';
import mortgageCalculator from './MortgageCalculator';

function App() {


  const [purchasePrice,setParchasePrice] = useState(450000);

  const [downPayment,setDownPayment] = useState(135000) 
  const [interestRate,setInterestRate] = useState(3) 
  const [repaymentTime,setRepaymentTime] = useState(25) 


  useEffect(() => {
    setDownPayment((value) => Math.min(purchasePrice,value))
  },[purchasePrice])

  console.log(purchasePrice )
  return (
    <Container>
      <Title>Mortgage calulator</Title>
      <Grid>
        <InputContainer>
          <Label>Purchase price: <b>${purchasePrice}</b> </Label>
          <Slider value={purchasePrice} min={0} max={1000000} step={500} onChange={setParchasePrice} onDrag={() => setParchasePrice(0)} />
        </InputContainer>
        <InputContainer>
          <Label>Down payment: <b>${downPayment}</b> </Label>
          <Slider value={downPayment} min={0} max={purchasePrice} step={500} onChange={setDownPayment}/>
        </InputContainer>
        <InputContainer>
          <Label>Repayment time: <b>{repaymentTime} years</b> </Label>
          <Slider value={repaymentTime} min={1} max={30}  onChange={setRepaymentTime}/>
        </InputContainer>
        <InputContainer>
          <Label>Interest rate: <b>{interestRate}%</b> </Label>
          <Slider value={interestRate} min={1} max={10}  onChange={setInterestRate} />
        </InputContainer>
        <InputContainer>
          <Label>Loan amount </Label>
          <b>${purchasePrice - downPayment}</b>
        </InputContainer>
        <InputContainer>
          <Label>Estimated pr. month</Label>
          <b>${mortgageCalculator.mortgagePayment(purchasePrice,downPayment,interestRate,repaymentTime)}</b>
        </InputContainer>
      </Grid>
    </Container>
  );
}

export default App;
