import React, { useRef, useCallback } from "react"
import querystring from "querystring"

const ContactForm = () => {
  const formInstance = useRef()
  const handleSubmit = useCallback(event => {
    event.preventDefault()
    let data = {}
    const formData = new FormData(formInstance.current)
    formData.append("to", "dlondonom@gmail.com")
    formData.append("redirect", "https://hysshogar.com/")
    formData.append("site", "https://hysshogar.com/")
    formData.append(
      "token",
      "CEF9C71A28828143719CDE8D531A7FB8F70E653946DDED6519E0328F45E6A757"
    )
    formData.append(
      "key",
      "143719A7FB8F70E653946DDED6519E0328F45E6A757CDE8D531CEF9C71A28828"
    )
    formData.append("action", "contact_us")
    formData.forEach((value, key) => {
      data = { ...data, [key]: value }
    })
    fetch("https://l6kg4l50gi.execute-api.us-east-1.amazonaws.com/send-forms", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: querystring.stringify(data),
    })
  }, [])

  return (
    <form
      onSubmit={handleSubmit}
      ref={formInstance}
      className="home-contact--form"
    >
      <input
        className="home-contact--form__input"
        type="text"
        name="name"
        placeholder="Nombre completo"
        required
      />
      <input
        className="home-contact--form__input"
        type="text"
        name="company"
        placeholder="Empresa"
        required
      />
      <input
        className="home-contact--form__input"
        type="text"
        name="telephone"
        placeholder="Celular"
        required
      />
      <input
        className="home-contact--form__input"
        type="email"
        name="email"
        placeholder="Correo electrónico"
        required
      />
      <button className="btn btn-outline-main text-uppercase margin-top-15">
        Enviar
      </button>
    </form>
  )
}

export default ContactForm
