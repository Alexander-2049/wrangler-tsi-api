export default class API {
  private base54: string;
  
  constructor(login: string, password: string) {
    this.base54 = btoa(`${login}:${password}`);
  }

  async fetchSchedule() {
    const today = new Date();
    const dt1 = today.getDate();
    const mn1 = today.getMonth() + 1;
    const yr1 = today.getFullYear();

    const yearForward = new Date();
    yearForward.setFullYear(today.getFullYear() + 1);
    const dt2 = yearForward.getDate();
    const mn2 = yearForward.getMonth() + 1;
    const yr2 = yearForward.getFullYear();

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