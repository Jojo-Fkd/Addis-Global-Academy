fetch("https://sheet.best/api/sheets/c6d365e1-7d7e-4977-bf99-a842bea5e02c")
  .then((response) => response.json())
  .then((data) => {
    let newsArray = [];
    data.forEach((item) => {
      let newsItem = {
        image: item.Image,
        title: item.Title,
        news: item.News,
        date: item.Date,
        phoneNumber: item.Phone,
      };
      newsArray.push(newsItem);
    });
    createNewsArticles(newsArray);
  });

const createNewsArticles = (newsArray) => {
  for (let i = 0; i <= newsArray.length - 1; i++) {
    let newsPost = newsArray[i];
    const article = document.createElement("article");
    article.innerHTML = `
          <h3>
            <img width="60px" src="icons/logo.png" />
          </h3>
          <figure class="news_post">
            <img src="${newsPost.image}" />
            <figcaption class="news_information">
              <h2>${newsPost.title}</h2>
              <ul>
                <p class="main_news">${newsPost.news}</p>
                <li class="call">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style="fill: var(--FONT-COLOR)"
                  >
                    <path
                      d="M16.57 22a2 2 0 0 0 1.43-.59l2.71-2.71a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0l-1.6 1.59a7.55 7.55 0 0 1-3-1.59 7.62 7.62 0 0 1-1.59-3l1.59-1.6a1 1 0 0 0 0-1.41l-4-4a1 1 0 0 0-1.41 0L2.59 6A2 2 0 0 0 2 7.43 15.28 15.28 0 0 0 6.3 17.7 15.28 15.28 0 0 0 16.57 22zM6 5.41 8.59 8 7.3 9.29a1 1 0 0 0-.3.91 10.12 10.12 0 0 0 2.3 4.5 10.08 10.08 0 0 0 4.5 2.3 1 1 0 0 0 .91-.27L16 15.41 18.59 18l-2 2a13.28 13.28 0 0 1-8.87-3.71A13.28 13.28 0 0 1 4 7.41zM20 11h2a8.81 8.81 0 0 0-9-9v2a6.77 6.77 0 0 1 7 7z"
                    ></path>
                    <path d="M13 8c2.1 0 3 .9 3 3h2c0-3.22-1.78-5-5-5z"></path>
                  </svg>
                  <span>${newsPost.phoneNumber}</span>
                </li>
                <li class="date">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    viewBox="0 0 24 24"
                    style="fill: var(--FONT-COLOR)"
                  >
                    <path
                      d="M19.875 3H4.125C2.953 3 2 3.897 2 5v14c0 1.103.953 2 2.125 2h15.75C21.047 21 22 20.103 22 19V5c0-1.103-.953-2-2.125-2zm0 16H4.125c-.057 0-.096-.016-.113-.016-.007 0-.011.002-.012.008L3.988 5.046c.007-.01.052-.046.137-.046h15.75c.079.001.122.028.125.008l.012 13.946c-.007.01-.052.046-.137.046z"
                    ></path>
                    <path
                      d="M6 7h6v6H6zm7 8H6v2h12v-2h-4zm1-4h4v2h-4zm0-4h4v2h-4z"
                    ></path>
                  </svg>
                  <span>${newsPost.date}</span>
                </li>
              </ul>
            </figcaption>
          </figure>
  `;
    if (i === newsArray.length - 1) {
      document
        .querySelector(".news_content .article_container")
        .appendChild(article);
      let latestTag = document.createElement("div");
      let h3 = document.querySelector("h3");
      latestTag.innerText = "Latest";
      h3.appendChild(latestTag);
    } else {
      document
        .querySelector(".sub_news_content .article_container")
        .appendChild(article);
    }
  }
};

/* EVENTS */

fetch("https://sheet.best/api/sheets/fef22b13-7c2f-4371-8b97-f867caacda6b")
  .then((response) => response.json())
  .then((data) => {
    let eventsArray = [];

    data.forEach((item) => {
      console.log(item);
      let eventItem = {
        event: item.event,
        date: item.time,
      };
      eventsArray.push(eventItem);
    });
    updateEvent(eventsArray);
  });

const monthDisplay = document.querySelector("tr.month td h1");
const calendarDates = document.querySelectorAll("#calendar table td");
const eventDisplay = document.querySelector(".event ul");
let dayArray = [];
const updateEvent = (monthlyEventsObj) => {
  monthlyEventsObj.forEach((occasion) => {
    let day = occasion.date;
    let dayIndex = day.indexOf("/");
    let dayLastIndex = day.lastIndexOf("/");
    let finalDay = day.slice(dayIndex + 1, dayLastIndex);
    dayArray.push(finalDay);
    const li = document.createElement("li");
    li.innerHTML = `
                <span class="event_date">${finalDay}</span> -
                <span class="event_info">${occasion.event}</span>
               
  `;
    eventDisplay.appendChild(li);
    calendarDates.forEach((date) => {
      date.className = "";
      dayArray.forEach((day) => {
        if (date.innerText == day) {
          date.className = "set";
        }
      });
    });
  });
};
