const mock = {
  email: "roman@gmail.com",
  password: "roman1994",
  name: "Роман",
  surname: "Захарян"
};

export const api = {
  login: async data =>
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (mock.email === data.email && mock.password === data.password) {
          resolve(mock);
        }
        resolve(false);
      }, 2000);
    })
};
