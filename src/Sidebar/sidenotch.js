import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faChartPie, faClock, faCalendarAlt, faNewspaper, faBlog } from '@fortawesome/free-solid-svg-icons';
import './sidebar.css';

function Sidebar({ onLinkClick }) {
  return (
    <div className="sidebarnav w-64 bg-gray-800 text-white">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-4">Weather App</h2>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Weather</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-blue-300" onClick={() => onLinkClick('graph')}>
              <FontAwesomeIcon icon={faChartLine} className="mr-2" />
              Graph
            </li>
            <li className="cursor-pointer hover:text-blue-300" onClick={() => onLinkClick('chart')}>
              <FontAwesomeIcon icon={faChartPie} className="mr-2" />
              Chart
            </li>
            <li className="cursor-pointer hover:text-blue-300" onClick={() => onLinkClick('pie-chart')}>
              <FontAwesomeIcon icon={faChartPie} className="mr-2" />
              Pie-Chart
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Forecasts</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-blue-300" onClick={() => onLinkClick('hour-forecast')}>
              <FontAwesomeIcon icon={faClock} className="mr-2" />
              Hour Forecast
            </li>
            <li className="cursor-pointer hover:text-blue-300" onClick={() => onLinkClick('daily-forecast')}>
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              Daily Forecast
            </li>
            <li className="cursor-pointer hover:text-blue-300" onClick={() => onLinkClick('weekly-forecast')}>
              <FontAwesomeIcon icon={faCalendarAlt} className="mr-2" />
              Weekly Forecast
            </li>
          </ul>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">Weather-Info</h3>
          <ul className="space-y-2">
            <li className="cursor-pointer hover:text-blue-300" onClick={() => onLinkClick('weather-news')}>
              <FontAwesomeIcon icon={faNewspaper} className="mr-2" />
              Weather News
            </li>
            <li className="cursor-pointer hover:text-blue-300" onClick={() => onLinkClick('weather-blog')}>
              <FontAwesomeIcon icon={faBlog} className="mr-2" />
              Weather Blog
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
