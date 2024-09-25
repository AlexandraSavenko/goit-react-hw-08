import css from "./RegisterForm.module.css";
export default function RegisterForm() {
  return (
    <form>
      <lable>
        Usarname
        <input type="text" name="usarname" />
      </lable>
      <lable>
        Email
        <input type="email" name="email" />
      </lable>
      <lable>
        Password
        <input type="password" name="password" />
      </lable>
      <button type="submit">Register</button>
    </form>
  );
}
