
const formattedMonth = dateObj.toLocaleString('default', { month: monthLength });


let dayOfMonth = dateObj.getDate();
if (dateSuffix) {
  if (dayOfMonth % 10 === 1 && dayOfMonth !== 11) {
    dayOfMonth += 'st';
  } else if (dayOfMonth % 10 === 2 && dayOfMonth !== 12) {
    dayOfMonth += 'nd';
  } else if (dayOfMonth % 10 === 3 && dayOfMonth !== 13) {
    dayOfMonth += 'rd';
  } else {
    dayOfMonth += 'th';
  }
}

const formattedTime = dateObj.toLocaleString('default', { hour: 'numeric', minute: '2-digit', hour12: true });


  module.exports = (timestamp, { monthLength = 'short', dateSuffix = true } = {}) => {
    const dateObj = new Date(timestamp);
    const options = { hour: 'numeric', minute: '2-digit', hour12: true };
    const formattedMonth = dateObj.toLocaleString('default', { month: monthLength });
    const formattedTime = dateObj.toLocaleString('default', options);
    let dayOfMonth = dateObj.getDate();
    if (dateSuffix) {
      if (dayOfMonth % 10 === 1 && dayOfMonth !== 11) {
        dayOfMonth += 'st';
      } else if (dayOfMonth % 10 === 2 && dayOfMonth !== 12) {
        dayOfMonth += 'nd';
      } else if (dayOfMonth % 10 === 3 && dayOfMonth !== 13) {
        dayOfMonth += 'rd';
      } else {
        dayOfMonth += 'th';
      }
    }
    const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${dateObj.getFullYear()} at ${formattedTime}`;
    return formattedTimeStamp;
  };
  
  // module.exports = (timestamp, { monthLength = 'short', dateSuffix = true } = {}) => {
  //   const dateObj = new Date(timestamp);
  //   const options = { hour: 'numeric', minute: '2-digit', hour12: true };
  //   const formattedMonth = dateObj.toLocaleString('default', { month: monthLength });
  //   const formattedTime = dateObj.toLocaleString('default', options);
  //   let dayOfMonth = dateObj.getDate();
  //   if (dateSuffix) {
  //     if (dayOfMonth % 10 === 1 && dayOfMonth !== 11) {
  //       dayOfMonth += 'st';
  //     } else if (dayOfMonth % 10 === 2 && dayOfMonth !== 12) {
  //       dayOfMonth += 'nd';
  //     } else if (dayOfMonth % 10 === 3 && dayOfMonth !== 13) {
  //       dayOfMonth += 'rd';
  //     } else {
  //       dayOfMonth += 'th';
  //     }
  //   }
  //   const formattedTimeStamp = `${formattedMonth} ${dayOfMonth}, ${dateObj.getFullYear()} at ${formattedTime}`;
  //   return formattedTimeStamp;
  // };
  