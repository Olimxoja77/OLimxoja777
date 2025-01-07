let btn = document.querySelector("div");

fetch("https://fakestoreapi.com/products?limit=10")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((item) => {
      console.log(data);
      let userDiv = document.createElement("div");
      userDiv.className = "user";
      userDiv.innerHTML = `
            <img src=${item.image}>
            <h3>${item.name}</h3>
            <p><strong>id:</strong> ${item.button}</p>
            <p><strong>Number:</strong> ${item.prise}</p>
          `;
      btn.appendChild(userDiv);
    });
  })
  .catch((error) => console.error("Xatolik yuz berdi:", error));

 