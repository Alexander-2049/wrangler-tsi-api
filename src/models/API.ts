export default class API {
  private base54: string;
  
  constructor(login: string, password: string) {
    this.base54 = btoa(`${login}:${password}`);
  }

  async fetchSchedule() {
    const today = new Date();
    // const currentMonth = today.getMonth() + 1;
    const currentYear = today.getFullYear();
    
    // Set the start date of the study year (September 1st)
    const studyYearStart = new Date(currentYear, 7, 15); // Month is 0-based in JavaScript, so 7 represents August
    
    // If the current date is before the study year starts, adjust the year
    if (today < studyYearStart) {
      studyYearStart.setFullYear(currentYear - 1);
    }
    
    const dt1 = 1;
    const mn1 = 9;
    const yr1 = studyYearStart.getFullYear();
    
    // Set the end date of the study year (August 31st of the next year)
    const studyYearEnd = new Date(studyYearStart);
    studyYearEnd.setFullYear(studyYearStart.getFullYear() + 1);
    studyYearEnd.setMonth(7); // 7 represents August
    
    const dt2 = 14;
    const mn2 = 8;
    const yr2 = studyYearEnd.getFullYear();

    const idStudentGroup = "";
    const idLecturer = "";
    const idApartment = "";

    const body = [
      "------WebKitFormBoundaryOGmPo29ezAImOwtE\r\nContent-Disposition: form-data; name=\"AfterForm\"\r\n\r\n1\r\n------WebKitFormBoundaryOGmPo29ezAImOwtE\r\nContent-Disposition: form-data; ",
      "name=\"dt1\"\r\n\r\n" + dt1 + "\r\n------WebKitFormBoundaryOGmPo29ezAImOwtE\r\nContent-Disposition: form-data; ",
      "name=\"mn1\"\r\n\r\n" + mn1 + "\r\n------WebKitFormBoundaryOGmPo29ezAImOwtE\r\nContent-Disposition: form-data; ",
      "name=\"yr1\"\r\n\r\n" + yr1 + "\r\n------WebKitFormBoundaryOGmPo29ezAImOwtE\r\nContent-Disposition: form-data; ",
      "name=\"dt2\"\r\n\r\n" + dt2 + "\r\n------WebKitFormBoundaryOGmPo29ezAImOwtE\r\nContent-Disposition: form-data; ",
      "name=\"mn2\"\r\n\r\n" + mn2 + "\r\n------WebKitFormBoundaryOGmPo29ezAImOwtE\r\nContent-Disposition: form-data; ",
      "name=\"yr2\"\r\n\r\n" + yr2 + "\r\n------WebKitFormBoundaryOGmPo29ezAImOwtE\r\nContent-Disposition: form-data; ",
      "name=\"idStudentGroup\"\r\n\r\n" + idStudentGroup + "\r\n------WebKitFormBoundaryOGmPo29ezAImOwtE\r\nContent-Disposition: form-data; ",
      "name=\"idLecturer\"\r\n\r\n" + idLecturer + "\r\n------WebKitFormBoundaryOGmPo29ezAImOwtE\r\nContent-Disposition: form-data; ",
      "name=\"idApartment\"\r\n\r\n" + idApartment + "\r\n------WebKitFormBoundaryOGmPo29ezAImOwtE--\r\n",
    ];

    const response = await fetch("https://intra.tsi.lv/root/StudentsDatabase1/?page=4&Lang=en", {
      "method": "POST",
      headers: {
        "Authorization": `Basic ${this.base54}`,
        "content-type": "multipart/form-data; boundary=----WebKitFormBoundaryOGmPo29ezAImOwtE",
      },
      "body": body.join(""),
    });

    if(response.status !== 200) {
      if(response.status === 401) {
        throw new Error("Unauthorized");
      }
      throw new Error("Unknown error");
    }

    return response;
  }
}