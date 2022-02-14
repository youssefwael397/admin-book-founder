import React, { useState } from "react";
import CarouselComp from "./../Carousel/CarouselComp";
import EnglishBooks from "./../EnglishBooks/EnglishBooks";
import ArabicBooks from "./../ArabicBooks/ArabicBooks";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

function Home() {
  const [lang, setLang] = useState("en");

  return (
    <div>
      <CarouselComp />

      <div className="d-flex justify-content-center">
        <FormControl className="mx-auto text-center">
          <RadioGroup
            className="mx-auto"
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
          >
            <FormControlLabel
              value="ar"
              control={<Radio />}
              label="Ar"
              onClick={() => setLang("ar")}
            />
            <FormControlLabel
              value="en"
              control={<Radio />}
              label="En"
              onClick={() => setLang("en")}
              defaultChecked
            />
          </RadioGroup>
        </FormControl>
      </div>
      {/* <div className="gender-details">
                <input
                    defaultChecked
                    type="radio"
                    name="lang"
                    value="en"
                    id="dot-1"
                    onClick={() => setLang('en')}
                />
                <input
                    type="radio"
                    name="lang"
                    value="ar"
                    id="dot-2"
                    onClick={() => setLang('ar')}

                />
                <span className="gender-title">Language</span>
                <div className="category">
                    <label htmlFor="dot-1">
                        <span className="dot one"></span>
                        <span className="gender">En</span>
                    </label>
                    <label htmlFor="dot-2">
                        <span className="dot two"></span>
                        <span className="gender">Ar</span>
                    </label>
                </div>
            </div> */}
      {lang === "en" ? (
        <>
          <div className="alert alert-info">
            <h3 className="text-center">English books and novels.</h3>
          </div>
          <EnglishBooks />
        </>
      ) : (
        <>
          <div className="alert alert-info arabic">
            <h3 className="text-center">كتب وروايات عربية.</h3>
          </div>
          <ArabicBooks />
        </>
      )}
    </div>
  );
}

export default Home;
