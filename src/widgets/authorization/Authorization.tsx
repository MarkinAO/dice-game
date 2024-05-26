import style from "./style.module.scss";
import Button from "@shared/ui/button/Button";
import { useStore } from "@app/store";
import { loginAPI } from "@shared/api/authApi";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { meAPI } from "@shared/api/authApi";
import cookie from "react-cookies";

export default function Authorization() {
  const [login, setLogin] = useState("demo");
  const [password, setPassword] = useState("demo");
  const { popup, togglePopup, error, setError, setAuth, auth, setStatePanel } =
    useStore((state) => state);
  const isAuth = cookie.load("connect.sid") ? true : false;
  useEffect(() => {
    if (isAuth) {
      const connectSid = cookie.load("connect.sid");
      meAPI({
        connectSid,
        handler: () => {
          setAuth(isAuth);
          setStatePanel({ title: "Сделайте ставку", text: "" });
        },
      });
    }
  }, []);
  return (
    <>
      {popup && !auth && (
        <form
          className={style.wrap}
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setError(false);
            if (
              login.match(/[0-9a-zA-Z!@#$%^&*]{4,}/) &&
              password.match(/[0-9a-zA-Z!@#$%^&*]{4,}/)
            ) {
              if (login === "demo" && password === "demo") {
                setAuth(true);
                setStatePanel({ title: "Сделайте ставку", text: "" });
              } else {
                loginAPI({
                  login,
                  password,
                  handler: () => {
                    setAuth(isAuth);
                    setStatePanel({ title: "Сделайте ставку", text: "" });
                  },
                });
              }
            } else {
              setError(true);
            }
          }}
        >
          <div className={style.container}>
            <div className={style.cross} onClick={() => togglePopup()}></div>
            <div className={style.col}>
              <input
                className={`${style.input} ${error && style.inputError}`}
                type="text"
                placeholder="Login"
                value={login}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setLogin(e.target.value)
                }
              />
              <div>
                <input
                  className={`${style.input} ${error && style.inputError}`}
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setPassword(e.target.value)
                  }
                />
                {error && <div className={style.error}>Error</div>}
              </div>
              <Button text="Войти" isActive={false} />
            </div>
          </div>
        </form>
      )}
    </>
  );
}
