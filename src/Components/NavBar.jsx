import { useState, useEffect } from "react";
import React from "react";
import { CNav, CFormSelect, CContainer } from "@coreui/react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getNames } from "../Store/Actions";
import { AiOutlineHome } from "react-icons/ai";
import { RiFileList2Line } from "react-icons/ri";

export default function NavBar() {
  const [selectCurrency, setSelectCurrency] = useState("USD");
  const [showLink, setShowLink] = useState(true);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: getNames, data: selectCurrency });

  }, []);

  useEffect(() => {
    dispatch(getNames(selectCurrency));

  }, [selectCurrency]);

  const handleChange = (e) => {
    const target = e.target.value;
    setSelectCurrency(target);
  };

  const users = useSelector((state) => state.myFirstReducer.rates);

  useEffect(() => {
    localStorage.setItem("CurrencyNames", JSON.stringify(users));
  }, [users]);

  const currencyNames = Object.keys(users);

  // setting the currency name to local storage

  useEffect(() => {
    localStorage.setItem("base", selectCurrency);
  }, [selectCurrency]);

  return (
    <CNav className="NavBar">
      <CContainer>
        <Link
          className="NavBarLink" to="/" onClick={() => setShowLink(true)}
        >
          <AiOutlineHome />  Home
        </Link>

        <Link
          className="NavBarLink" to="/rate" onClick={() => setShowLink(false)}
        >
          <RiFileList2Line />  Rates List
        </Link>

      </CContainer>

      <CFormSelect
        className="NavBarSelect" value={selectCurrency} onChange={handleChange} >
        <option value="">Select Currency</option>
        {currencyNames.map((currency) => (
          <option key={currency} value={currency}>
            {currency}
          </option>
        ))}
      </CFormSelect>




    </CNav>
  );
}
