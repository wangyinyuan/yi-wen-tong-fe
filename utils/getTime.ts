export function getTime(date: Date | undefined) {
  if (!date) return "";
  const pad = (number: number) => (number < 10 ? "0" + number : number);

  let year = date.getFullYear();
  let month = pad(date.getMonth() + 1); // 月份从0开始
  let day = pad(date.getDate());
  let hours = pad(date.getHours());
  let minutes = pad(date.getMinutes());
  let seconds = pad(date.getSeconds());

  // 处理时区偏移
  let timezoneOffset = date.getTimezoneOffset();
  let offsetHours = pad(Math.abs(Math.floor(timezoneOffset / 60)));
  let offsetMinutes = pad(Math.abs(timezoneOffset % 60));
  let offsetSign = timezoneOffset > 0 ? "-" : "+";

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}${offsetSign}${offsetHours}:${offsetMinutes}`;
}
