import style from "./style.module.scss";
import { Button } from "@features/smartButton";
import { useStore } from "@shared/model";
import { loginAPI } from "@shared/api/authApi";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { meAPI } from "@shared/api/authApi";

export function Authorization() {
  const [login, setLogin] = useState("test_player_try");
  const [password, setPassword] = useState("test_player_try");
  const { popup, togglePopup, error, setError, setAuth, auth, setStatePanel } =
    useStore((state) => state);
  useEffect(() => {
    meAPI({
      handler: () => {
        setAuth(true);
        setStatePanel({ title: "Сделайте ставку", text: "" });
      },
    });
  }, []);
  return (
    <>
      {popup && !auth && (
        <form
          className={style.wrap}
          onSubmit={(e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setError(false);
            if (login === "demo" && password === "demo") {
              setAuth(true);
              setStatePanel({ title: "Сделайте ставку", text: "" });
              togglePopup();
            } else if (
              login.match(/[0-9a-zA-Z!@#$%^&*]{4,}/) &&
              password.match(/[0-9a-zA-Z!@#$%^&*]{4,}/)
            ) {
              loginAPI({
                login,
                password,
                handler: () => {
                  setAuth(true);
                  setStatePanel({ title: "Сделайте ставку", text: "" });
                  togglePopup();
                },
              });
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
