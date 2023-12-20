const notificationBtnEl = document.querySelector(".notify");

const requestPermission = function () {
  if (!("Notification" in window)) {
    throw new Error("Browser doesn't support notification");
  }

  Notification.requestPermission().then((permission) => {
    const notification = new Notification("Test", {
      body: "This is a test notification",
      icon: "./notification.png",
    });
  });
};

notificationBtnEl.addEventListener("click", requestPermission);
