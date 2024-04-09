document.addEventListener("DOMContentLoaded", function () {
  // show newsletter subs
  function displaySubscriptions() {
    let subscriptions = JSON.parse(localStorage.getItem("newsletterSubscriptions")) || [];
    let subscriptionList = document.getElementById("subscriptionList");
    subscriptionList.innerHTML = "";
    subscriptions.forEach(function (email) {
      let li = document.createElement("li");
      li.textContent = email;
      let deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function () {
        removeSubscription(email);
        displaySubscriptions(); // Refresh the list after deletion
      });
      li.appendChild(deleteButton);
      subscriptionList.appendChild(li);
    });
  }

  // to remove subscription
  function removeSubscription(email) {
    let subscriptions = JSON.parse(localStorage.getItem("newsletterSubscriptions")) || [];
    let index = subscriptions.indexOf(email);
    if (index !== -1) {
      subscriptions.splice(index, 1);
      localStorage.setItem("newsletterSubscriptions", JSON.stringify(subscriptions));
    }
  }

  
  displaySubscriptions();
});