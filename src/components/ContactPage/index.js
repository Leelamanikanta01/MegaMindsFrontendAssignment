import React from 'react'

const ContactForm = () => {
  return (
    <form>
      <label>Name</label>
      <input type="text" />
      <label>Email</label>
      <input type="email" />
      <label>Message</label>
      <textarea></textarea>
      <button type="submit">Submit</button>
    </form>
  )
}

export default ContactForm
