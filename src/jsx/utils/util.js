

/** Func Returns dayOfWeek, numDayOfWeek, time
 * @param {number} number dt
 * @example
 * getDayAndTime(1713949200) //return { dayOfWeek: "Wednesday", numDayOfWeek: "Apr 24", time: "15:00" };
 */

const getDayAndTime = (dt) => {
    const date = new Date(dt * 1000);
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' });
    const time = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const numDayOfWeek = date.toLocaleDateString('en-US', { day: 'numeric', month: 'short' });
    return { dayOfWeek, numDayOfWeek, time };
};

/** Func Returns Toggle Celsius and Fahrenheit (def Celsius)
 * @param {boolean,number} state, temp 
 * @example
 * convertTemperature(12) //isCelsius=true return '12°C' or isCelsius=false return '53,6°F';
 */
const convertTemperature = (isCelsius,temperature) => {
    if (isCelsius) {
      return `${temperature}°C`
    } else {
      return `${((temperature * 9/5) + 32).toFixed(2)}°F`;
    }
  }

/** Func Returns city in format 
 * @param {string} city 
 * @example
 * capitalizeFirstLetter(kYIV)  return 'Kyiv';
 *  
 * */
  function capitalizeFirstLetter(string) {
    return string.toLowerCase().replace(/(^|\s)\S/g, function(firstLetter) {
        return firstLetter.toUpperCase();
    });
}
  

module.exports = {
     getDayAndTime,convertTemperature,capitalizeFirstLetter
};

