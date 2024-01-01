import React, { useState, useEffect } from "react";
import StyleLogin from "../../styles/Login.module.css";
import ReCAPTCHA from "react-google-recaptcha";

import Link from "next/link";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { onSubmit } from "../tools/Security";
import { HideShowPassword } from "../tools/functiones";
function LoginComponents() {
  const [CaptChacheck, setCaptChacheck] = useState(false);
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Campo de usuario obligatorio"),
    password: Yup.string().required("Campo de contraseña obligatorio"),
    captchaValidate: Yup.string().required(
      "Debe seleccionar el recaptcha para iniciar sesión"
    ),
  });
  const formOptions = { resolver: yupResolver(validationSchema) };
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  const onchange = async (captchaCode) => {
    if (!captchaCode) {
      setCaptChacheck(false);
      return;
    }

    try {
      const response = await fetch("/api/CaptchatCheck", {
        method: "POST",
        body: JSON.stringify({ captcha: captchaCode }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        // If the response is ok than show the success alert
        setCaptChacheck(true);
      } else {
        // Else throw an error with the message returned
        // from the API
        setCaptChacheck(false);
        const error = await response.json();
        throw new Error(error.message);
      }
    } catch (error) {
      alert(error?.message || "Something went wrong");
      setCaptChacheck(false);
    }
  };

  useEffect(() => {
    document
      .getElementById("formAuthentication")
      .addEventListener("submit", function (evt) {
        if (!CaptChacheck) {
          //reCaptcha not verified
          evt.preventDefault();
          return false;
        }
        //captcha verified
        //do the rest of your validations here
      });

  }, []);

  return (
    <>
      <div className="container-xxl">
        <div
          className={`${StyleLogin.authentication_wrapper} ${StyleLogin.authentication_basic} container-p-y`}
        >
          <div className={`${StyleLogin.authentication_inner}`}>
            {/*--------------Registro--------------------------------------*/}
            <div className={`${StyleLogin.card} card`}>
              <div className="card-body">
                {/*-------------------logo--------------------------------------*/}
                <div
                  className={`${StyleLogin.app_brand} app-brand justify-content-center`}
                >
                  <Link href="/" className="app-brand-link gap-2">
                    <span className="app-brand-logo demo">
                      <img src="/img/Logo_VenParadaiseSpa192x192.webp"></img>
                    </span>
                  </Link>
                </div>
                {/*-------------------/logo--------------------------------------*/}
                <h4 className="mb-2">Bienvenido a VENParadaise-SPA🔥</h4>
                <p className="mb-4">Inicia sesión en tu cuenta...</p>

                <form
                  onSubmit={handleSubmit(onSubmit)}
                  id="formAuthentication"
                  className="mb-3"
                >
                  <div className="mb-3">
                    <label htmlFor="username" className="form-label">
                      Usuario
                    </label>
                    <input
                      type="text"
                      {...register("username")}
                      className={`form-control ${
                        errors.username ? StyleLogin.is_invalid : ""
                      }`}
                      id="username"
                      name="username"
                      placeholder="Ingrese su correo o CI"
                      autoFocus
                    />
                    <div className={StyleLogin.invalid_feedback}>
                      {errors.username?.message}
                    </div>
                  </div>
                  <div className="mb-3 form-password-toggle">
                    <div className="d-flex justify-content-between">
                      <label className="form-label" htmlFor="password">
                        Contraseña
                      </label>
                      <Link href="#">
                        <small>¿Olvidaste tu contraseña?</small>
                      </Link>
                    </div>
                    <div className="input-group input-group-merge">
                      <input
                        {...register("password")}
                        type="password"
                        id="password"
                        className={`form-control ${
                          errors.password ? StyleLogin.is_invalid : ""
                        }`}
                        name="password"
                        placeholder="&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;&#xb7;"
                        aria-describedby="password"
                      />
                      <span
                        onClick={() => HideShowPassword()}
                        className={`input-group-text cursor-pointer ${
                          errors.password ? StyleLogin.is_invalidRestante : ""
                        }`}
                      >
                        <i className="bx bx-hide"></i>
                      </span>
                    </div>
                    <div className={StyleLogin.invalid_feedback}>
                      {errors.password?.message}
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        id="remember-me"
                      />
                      <label className="form-check-label" htmlFor="remember-me">
                        {" "}
                        Recordarme
                      </label>
                    </div>
                  </div>
                  <div className="mb-3">
                    <ReCAPTCHA
                      sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                      onChange={onchange}
                    />
                    <div className={StyleLogin.invalid_feedback}>
                      {errors.captchaValidate?.message}
                    </div>
                    <br></br>
                    <button
                      className="btn btn-primary d-grid w-100"
                      type="submit"
                    >
                      Iniciar sesión
                    </button>
                  </div>
                </form>
                <p className="text-center">
                  <span>¿Eres nuev@ en nuestra plataforma? </span>
                  <Link href="#">
                    <span>Crea una cuenta nueva</span>
                  </Link>
                </p>
              </div>
            </div>
            {/* -----------------------/Register--------------------------- */}
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginComponents;
