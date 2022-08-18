function MainForm() {
    return ( 
        <form className="mainform">
            <div className="checkboxes">
            <div>
                        <input type="checkbox" name="administration_and_strategy" id="administration_and_strategy"></input>
                        <label for="administration_and_strategy">ADMIISTRATION & STRATEGY</label>
                    </div>
                    <div>
                        <input type="checkbox" name="creativity_and_design" id="creativity_and_design"></input>
                        <label for="creativity_and_design">CREATIVITY & DESIGN</label>
                    </div>
                    <div>
                        <input type="checkbox" name="coaching_and_mentoring" id="coaching_and_mentoring"></input>
                        <label for="coaching_and_mentoring">COACHING & MENTORING</label>
                    </div>
                    <div>
                        <input type="checkbox" name="marketing_and_fundraising" id="marketing_and_fundraising"></input>
                        <label for="marketing_and_fundraising">MARKETING & FUNDRAISING</label>
                    </div>
                    <div>
                        <input type="checkbox" name="technology_and_digital" id="technology_and_digital"></input>
                        <label for="technology_and_digital">TECHNOLOGY & DIGITAL</label>
                    </div>

                    <div>
                        <input type="checkbox" name="all" id="all"></input>
                        <label for="all">ALL</label>
                    </div>
            </div>
            <div className="textinputandsubmitbutton">
                <div>
                <input type="text" name="cause_name" id="cause_name" placeholder="Cause Name"></input>
                </div>
                <div>
                <input type="email" name="email_address" id="email_address" placeholder="Email Address"></input>
                </div>
                <div>
                <input type="submit" value="Register" id="submit"></input>
                </div>
            </div>
        </form>
     );
}

export default MainForm;