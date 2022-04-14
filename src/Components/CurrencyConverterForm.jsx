import React, { useState } from "react";
import "./Styles.css";
import CurrencyConverter from "../CurrencyConverter.png";

import {
  CFormSelect,
  CContainer,
  CForm,
  CFormInput,
  CFormLabel,
  CButton,
  CImage,
} from "@coreui/react";

export function CurrencyConverterForm() {
  const [currencyAmount, setCurrencyAmount] = useState("");
  const [baseCurrencyName, setBaseCurrencyName] = useState("");
  const [targetCurrencyName, setTargetCurrencyName] = useState("");
  const [baseCurrencyRate, setBaseCurrencyRate] = useState("");
  const [targetCurrencyRate, setTargetCurrencyRate] = useState("");
  const [result, setResult] = useState("");
  const [currencyNameResult, setCurrencyNameResult] = useState("");

  // getting the data from the store

  const users = JSON.parse(localStorage.getItem("CurrencyNames")); //TODO

  // setting data to local storage

  const currencyNames = Object.keys(users);
  console.log(currencyNames);

  const handleChangeBaseCurrency = (e) => {
    setBaseCurrencyName(e.target.value);
    setBaseCurrencyRate(users[e.target.value]);
  };

  const handleChangeTargetCurrency = (e) => {
    setTargetCurrencyName(e.target.value);
    setTargetCurrencyRate(users[e.target.value]);
  };

  const handleConvert = () => {
    const getResult = (currencyAmount / baseCurrencyRate) * targetCurrencyRate;
    setResult(getResult.toFixed(2));
    setCurrencyNameResult(targetCurrencyName);
  };

  return (
    <CContainer className="MainContainer">
      <CContainer className="SectionContainer">
        <CContainer style={{ marginLeft: "4rem" }}>
          <CImage
            src={CurrencyConverter}
            alt="Currency Converter"
            style={{ borderRadius: "10%" }}
            width={200}
            height={200}
          />
        </CContainer>

        <CForm
          className="FormContainer"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <CContainer className="FormSection">
            <CFormLabel className="FormLabel">Amount:</CFormLabel>
            <CFormInput
              className="FormInput"
              type="number"
              value={currencyAmount}
              onChange={(e) => {
                setCurrencyAmount(e.target.value);
              }}
            />
          </CContainer>
          <CContainer>
            <CFormSelect
              className="FormSelect"
              value={baseCurrencyName}
              onChange={handleChangeBaseCurrency}
            >
              <option>Base Currency</option>
              {currencyNames.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </CFormSelect>
          </CContainer>

          <CContainer>
            <CFormSelect
              className="FormSelect"
              value={targetCurrencyName}
              onChange={handleChangeTargetCurrency}
            >
              <option value="TARGETCURRENCY">Target Currency</option>
              {currencyNames.map((currency) => (
                <option key={currency} value={currency}>
                  {currency}
                </option>
              ))}
            </CFormSelect>
          </CContainer>

          <CContainer className="Result">
            Result: {result} {currencyNameResult}
          </CContainer>

          <CButton className="FormButton" onClick={handleConvert}>
            Convert
          </CButton>
        </CForm>
      </CContainer>
    </CContainer>
  );
}
