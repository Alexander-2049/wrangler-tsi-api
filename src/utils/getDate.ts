export default function getDate(input: string): Date | null {
  const [day, month, year] = input.split('.').map((item) => parseInt(item));
  if(!day || !month || !year) return null;
  if(day < 0 || day > 31) return null;
  if(month < 0 || month > 12) return null;
  if(year < 1920) return null;
  return new Date(year, month - 1, day);
}
