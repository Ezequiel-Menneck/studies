// async function f() {
//   return 1;
// }

// // f().then(alert); // Estoura o pop up de alerta na tela

// async function w() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Done");
//     }, 1000);
//   });
//   console.log("antes");
//   let result = await promise;
//   console.log("dps");

//   // alert(result);
// }

// async function j() {
//   let promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Feito");
//     }, 1000);
//   });

//   return promise;
// }

// async function robinho() {
//   let resolveWithAwait = await j();

//   console.log(resolveWithAwait);
// }

// robinho();

// w();

async function e() {
  let userName = "Ezequiel-Menneck";
  try {
    let result = await fetch(`https://api.github.com/users/${userName}`);
    let gitInfos = await result.json();

    return gitInfos;
  } catch (e) {
    throw new Error("Ops, Error: " + e);
  }
}

async function k() {
  let resolvedInK = await e();
  console.log(resolvedInK);
}

console.log(k());

function loadJson(url) {
  return fetch(url).then((response) => {
    if (response.status == 200) {
      return response.json();
    } else {
      throw new Error(response.status);
    }
  });
}

loadJson("https://javascript.info/no-such-user.json").catch(alert); // Error: 404

async function loadJson2(url) {
  let resp = await fetch(url);

  if (resp.status == 200) {
    let json = await resp.json();
    return json;
  }

  throw new Error(resp.status);
}
