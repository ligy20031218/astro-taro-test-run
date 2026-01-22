export type ZodiacSign =
  | "Aries" | "Taurus" | "Gemini" | "Cancer" | "Leo" | "Virgo"
  | "Libra" | "Scorpio" | "Sagittarius" | "Capricorn" | "Aquarius" | "Pisces";

const ranges: Array<{ sign: ZodiacSign; start: [number, number]; end: [number, number] }> = [
  { sign: "Capricorn", start: [12, 22], end: [1, 19] },
  { sign: "Aquarius", start: [1, 20], end: [2, 18] },
  { sign: "Pisces", start: [2, 19], end: [3, 20] },
  { sign: "Aries", start: [3, 21], end: [4, 19] },
  { sign: "Taurus", start: [4, 20], end: [5, 20] },
  { sign: "Gemini", start: [5, 21], end: [6, 20] },
  { sign: "Cancer", start: [6, 21], end: [7, 22] },
  { sign: "Leo", start: [7, 23], end: [8, 22] },
  { sign: "Virgo", start: [8, 23], end: [9, 22] },
  { sign: "Libra", start: [9, 23], end: [10, 22] },
  { sign: "Scorpio", start: [10, 23], end: [11, 21] },
  { sign: "Sagittarius", start: [11, 22], end: [12, 21] }
];

export function getZodiacFromDate(date: Date): ZodiacSign {
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  for (const r of ranges) {
    const [sm, sd] = r.start;
    const [em, ed] = r.end;
    
    if (sm <= em) {
      if ((month > sm || (month === sm && day >= sd)) && 
          (month < em || (month === em && day <= ed))) {
        return r.sign;
      }
    } else {
      if ((month === sm && day >= sd) || (month === em && day <= ed) ||
          (month > sm) || (month < em)) {
        return r.sign;
      }
    }
  }
  
  return "Capricorn";
}

