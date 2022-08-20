import formTitleCSS from "../styles/formtitle.module.css";
function FormTitle() {
  return (
    <div className={formTitleCSS.formtitle}>
      <p className={formTitleCSS.register}>Registration</p>
      <p className={formTitleCSS.select}>Select the ProBono Alerts you want</p>
    </div>
  );
}

export default FormTitle;
