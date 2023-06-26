// Add your code here
const submitData = (name, email) => {
  const data = {
    name: name,
    email: email,
  };

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then((resp) => resp.json())
    .then((data) => {
      document.querySelector("body").textContent = data.id;
    })
    .catch((err) => {
      document.querySelector("body").textContent = err.message;
    });
};
