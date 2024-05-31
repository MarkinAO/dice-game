import axios from "axios";

const url = import.meta.env.VITE_API_URL;

interface ILogin {
  login: string;
  password: string;
  handler: Function;
}

const headers = {
  Accept: "application/json, text/plain, */*",
  "Accept-Language": "en-RU,en;q=0.9,ru-RU;q=0.8,ru;q=0.7,he;q=0.6",
  "Cache-Control": "no-cache",
  Connection: "keep-alive",
  credentials: "include",
};

export const loginAPI = ({ login, password, handler }: ILogin) => {
  axios({
    method: "post",
    url: url + "client-login",
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
    data: { login, password },
  }).then((res) => {
    if (res.status === 200) {
      handler();
    }
  });
};

interface IMeAPI {
  handler: Function;
}

export const meAPI = ({ handler }: IMeAPI) => {
  axios({
    method: "get",
    url: url + "auth/me",
    withCredentials: true,
    headers: {
      ...headers,
      Cookie:
        "connect.sid=s%3A-Q3Y7krzCl71e0oIaegd-vd98jj6RrGb.jh4hAa%2BoXuzWHt2mii0X%2BXjBul4YoP3F7WNVFFa%2BZjw",
    },
  }).then((res) => {
    if (res.status === 200) {
      handler();
    }
  });
};
