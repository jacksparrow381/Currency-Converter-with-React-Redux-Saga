import { useSelector } from "react-redux";
import "./Styles.css";
import {
  CContainer,
  CBadge,
  CTable,
  CTableHead,
  CTableBody,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
} from "@coreui/react";


export function CurrencyRates() {
  const users = useSelector((state) => state.myFirstReducer.rates);

  const currencyNames = Object.keys(users);

  return (
    <CContainer className="currencyRatesContainer">
      <CBadge className="currencyRatesHeader">Currency Rates</CBadge>

      <CContainer className="currencyRatesTableContainer">

        <CTable className="currencyRatesTable">
          <CTableHead>
            <CTableRow className="currencyRatesTableHeader">
              <CTableHeaderCell>Sr.no</CTableHeaderCell>
              <CTableHeaderCell style={{ border: "1px solid black", padding:'10px' }}>
                Currency Names
              </CTableHeaderCell>
              <CTableHeaderCell>Rate</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {currencyNames.map((currency, index) => (
              <CTableRow key={currency} style={{ border: "1px solid black", }}>
                <CTableDataCell style={{padding:'8px' }}>{index + 1}</CTableDataCell>
                <CTableDataCell style={{ border: "1px solid black" }}>
                  {currency}
                </CTableDataCell>
                <CTableDataCell>{users[currency]}</CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </CContainer>
    </CContainer>
  );
}
