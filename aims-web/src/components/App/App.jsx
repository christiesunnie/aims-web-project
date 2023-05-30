import React from 'react';

import DayViewCalendar from '../Calendars/DayViewCalendar';

function App() {
  return (
    <div className="max-w-[1200px] mx-auto h-[100vh]">
      <header className="uppercase text-xl text-green-800 font-bold tracking-wide bg-gray-200 mt-10 py-6 text-center">
        <p>Welcome to AIMS project!</p>
      </header>
      <DayViewCalendar />
    </div>
  );
}

export default App;
