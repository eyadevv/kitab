const Register = () => {
  return (
        <fieldset className="flex flex-col gap-3 w-full max-w-sm h-full  " >
            <label htmlFor="username">username</label>
            <input type="text" required name="username" id="username" autoComplete="username" />

            <label htmlFor="password">password</label>
            <input type="password" required name="password" id="password" autoComplete="new-password" />

            <label htmlFor="repeatedpassword">repeat password</label>
            <input type="password" required name="repeatedpassword" id="repeatedpassword" autoComplete="new-password" />

        </fieldset>
   )
}
export default Register