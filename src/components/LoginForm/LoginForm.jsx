import css from "./LoginForm.module.css";
export default function LoginForm() {
  return (
    <form>
      <lable>
        Email
        <input type="email" name="email" />
      </lable>
      <lable>
        Password
        <input type="password" name="password" />
      </lable>
      <button type="submit">Log In</button>
    </form>
  );
}
