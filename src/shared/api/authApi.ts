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
  connectSid: string;
  handler: Function;
}

export const meAPI = ({ connectSid, handler }: IMeAPI) => {
  axios({
    method: "get",
    url: url + "auth/me",
    headers: {
      ...headers,
      Cookie: connectSid,
    },
  }).then((res) => {
    if (res.status === 200) {
      handler();
    }
  });
};
