fetch("https://jsonplaceholder.typicode.com/users")
  // Converting received data to JSON
  .then((response) => response.json())
  .then((res) => {
    console.log(res);
    let li = `<tr>
			<th>Name</th>
			<th>Email</th>
			<th>City</th>
			</tr>`;

    // Loop through each data and add a table row
    res.map((user) => {
      li += `<tr>
				<td>${user.name} </td>
				<td>${user.email}</td>
				<td>${user.address.city}</td>

			</tr>`;
    });

    // Display result
    document.getElementById("users").innerHTML = li;
  });

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => response.json())
  .then((res) => {
    let h2 = "";
    res.map((user) => {
      h2 += user.name;
    });
    document.getElementById("users").innerHTML = h2;
  });

async function fetchTopFive() {
  const fetchResult = fetch("https://jsonplaceholder.typicode.com/users");
  const res = await fetchResult;
  const jsonData = await res.json();
  console.log(
    jsonData.map((val) => {
      return val.name;
    })
  );
  console.log(jsonData);
}
fetchTopFive();

// POST REQUEST
// fetch("https://reqres.in/api/users",{
//     method:"POST",
//     headers:{
//         "Content-Type":"application/json"
//     },
//     body: JSON.stringify({
//         name:"USer 1"
//     })

// }).then(res=>{
//     if(res.ok){
//         return res.json()
//         console.log("all ok")
//     } else {
//         console.log("not successfull")
//     }
// })

// .then(data=>console.log(data))
// .catch(error=>console.log("error"))
