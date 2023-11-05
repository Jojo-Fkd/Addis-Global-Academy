/* NEWS */

/* fetch(
  "https://sheet.best/api/sheets/c6d365e1-7d7e-4977-bf99-a842bea5e02c"
).then((response) => {
  response.json().then((data) => {
    data.forEach((obj) => {
      let newPost = {
        image: obj.Image,
        news: obj.News,
        time: obj.Timestamp,
      };
      newsArray.push(newPost);
    });
  });
});
 */

let newsArray = [
  {
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHN8ZW58MHx8MHx8fDA%3D",
    title: "ICT",
    news: "Student are leaning to compute",
    date: "21/02/23",
    phoneNumber: "0978080244",
  },
  {
    image:
      "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3R1ZGVudHN8ZW58MHx8MHx8fDA%3D",
    title: "English",
    news: "Student are learning to communicate",
    date: "22/02/23",
    phoneNumber: "096446350",
  },
  {
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=60&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3R1ZGVudHN8ZW58MHx8MHx8fDA%3D",
    title: "Coding Competition",
    news: "We are organizing a coding competetion",
    date: "23/02/23",
    phoneNumber: "0912600015",
  },
];
