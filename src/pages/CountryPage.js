import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import TableRow from '../components/TableRow';

const CountryPage = () => {
  const location = useLocation();
  let idMain;
  let dateMain;
  let flagMain;
  if (location.data) {
    idMain = location.data.id;
    dateMain = location.data.date;
    flagMain = location.flag;
    localStorage.setItem(
      'idState',
      JSON.stringify([idMain, dateMain, flagMain]),
    );
  } else {
    const idState = JSON.parse(localStorage.getItem('idState'));
    const [id, date, flag] = idState;
    idMain = id;
    dateMain = date;
    flagMain = flag;
  }

  let state = useSelector((state) => state.covid19Data);
  state = Array.isArray(state) ? state : [];
  const data = state.filter((item) => item.id === idMain)[0];
  return (
    <div className="country-container">
      <h1 className="country-header">Country Cases</h1>
      <h1 className="country-header h-heading">
        {new Date(dateMain).toDateString()}
      </h1>
      <div className="world-wide-country">
        <div className="globe-icon-container">
          <img className="country-image" src={flagMain} alt="national flag" />
        </div>
        <div className="world-wide">
          <span className="cases name">{data && data.name}</span>
          <span className="cases">Total</span>
          <span>{data && data.today_confirmed.toLocaleString()}</span>
        </div>
      </div>
      <span className="break-down">Country Data Breakdown</span>
      <table className="country-table">
        {data && (
          <tbody className="coutry-tbody">
            <TableRow param="Cases Today" value={data.today_new_confirmed} />
            <TableRow param="Total Deaths" value={data.today_deaths} />
            <TableRow param="Deaths Today" value={data.today_new_deaths} />
            <TableRow param="Open Cases" value={data.today_open_cases} />
            <TableRow param="Total Recovery" value={data.today_recovered} />
            <TableRow param="Recovery Today" value={data.today_new_recovered} />
          </tbody>
        )}
      </table>
      <div className="source">
        Source:
        {data && data.source}
      </div>
    </div>
  );
};

export default CountryPage;
