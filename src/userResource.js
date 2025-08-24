const BASE_URL = "http://localhost:3000";

export async function getUsersApi() {
  return fetch(`${BASE_URL}/users`).then((res) => res.json());
}

export async function getUserByIdApi(id) {
  return fetch(`${BASE_URL}/users/` + id).then((res) => res.json());
}

export async function createUserApi(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      fetch(`${BASE_URL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then(resolve)
        .catch(reject);
    }, 3000);
  });
}

export async function deleteUserApi(id) {
  return fetch(`${BASE_URL}/users/` + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
}

export async function updateUserApi(id, data) {
  return fetch(`${BASE_URL}/users/` + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((res) => res.json());
}

export async function loginUserApi(email, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ successful: true });
      // reject({ failed: true });
    }, 3000);
  });
}
