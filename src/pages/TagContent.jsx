import styles from "../styles/tagContent.module.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import RegisterSchema from "../schema/RegisterSchema";
import uploadApi from "../api/uploadapi";
import { useEffect } from "react";
import axios from "axios";
const TagContent = () => {
  useEffect(() => {
    axios({
      method: "get",
      url: "https://sunbirdsaas.com/api/framework/v1/read/ncffsfw",
      responseType: "stream",
    }).then(function (response) {
      console.log(response.data);

      const obj = JSON.parse(response.data);
      console.log(obj.result.framework);
      console.log(obj.result.framework.categories[0].terms);
    });
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(RegisterSchema) });

  const onSubmit = async (data) => {
    console.log(data);
    const result = await uploadApi(data);

    if (result == true) {
      alert("Registration Successful.");
    } else {
      alert("Registeration failed");
    }
  };

  return (
    <>
      <div className={styles.outerdiv}>
        <h1>Tag Content</h1>
      </div>
      <div className={styles.innerDiv}>
        <div className={styles.tagContentForm}>
          <form onSubmit={handleSubmit(onSubmit)} autoComplete="off">
            <div>
              <div className={styles.formHeading}>
                <h3>Tag your content</h3>
              </div>

              <div className={styles.formFieldDiv}>
                <div className={styles.formFieldInput}>
                  <input
                    type="text"
                    name="contentName"
                    id="contentName"
                    placeholder="Name of the content"
                    {...register("contentName")}
                  ></input>
                  {errors.contentName && <p>{errors.contentName.message}</p>}
                </div>
              </div>

              <div className={styles.formFieldDiv}>
                <div className={styles.formFieldInput}>
                  <select
                    name="language"
                    id="language"
                    {...register("language")}
                  >
                    <option value="">Language</option>
                    <option value="English">English</option>
                    <option value="Hindi">Hindi</option>
                    <option value="Gujarati">Gujarati</option>
                    <option value="Assamese">Assamese</option>
                    <option value="Tamil">Tamil</option>
                    <option value="Marathi">Marathi</option>
                    <option value="Kannada">Kannada</option>
                  </select>
                  {errors.language && <p>{errors.language.message}</p>}
                </div>
              </div>

              <div className={styles.formFieldDiv}>
                <div className={styles.formFieldInput}>
                  <select name="theme" id="theme" {...register("theme")}>
                    <option value="">Theme</option>
                    <option value="Animals">Animals</option>
                    <option value="Birds">Birds</option>
                    <option value="Vegetables">Vegetables</option>
                    <option value="Nature">Nature</option>
                    <option value="Relations">Relations</option>
                    <option value="Food">Food</option>
                    <option value="Others">Others</option>
                  </select>
                  {errors.theme && <p>{errors.theme.message}</p>}
                </div>
              </div>

              <div className={styles.formFieldDiv}>
                <div className={styles.formFieldInput}>
                  <select
                    name="contentType"
                    id="contentType"
                    {...register("contentType")}
                  >
                    <option value="">Type of content</option>
                    <option value="Video">Video</option>
                    <option value="Read Along">Read Along</option>
                    <option value="Read">Read</option>
                    <option value="Audio">Audio</option>
                    <option value="Sign Language">Sign Language</option>
                  </select>
                  {errors.contentType && <p>{errors.contentType.message}</p>}
                </div>
              </div>
              <div className={styles.formFieldDiv}>
                <div className={styles.formFieldInput}>
                  <select
                    name="contentType"
                    id="contentType"
                    {...register("contentType")}
                  >
                    <option value="">Domain</option>
                    <option value="Socio-Emotional and Ethical Development">
                      Socio-Emotional and Ethical Development
                    </option>
                    <option value="Cognitive Development">
                      Cognitive Development
                    </option>
                    <option value="Language and Literacy Development">
                      Language and Literacy Development
                    </option>
                    <option value="Aesthetic and Cultural Development">
                      Aesthetic and Cultural Development
                    </option>
                    <option value="Positive Learning Habits">
                      Positive Learning Habits
                    </option>
                  </select>
                  {errors.contentType && <p>{errors.contentType.message}</p>}
                </div>
              </div>
              <div className={styles.formFieldDiv}>
                <div className={styles.formFieldInput}>
                  <select
                    name="contentType"
                    id="contentType"
                    {...register("contentType")}
                  >
                    <option value="">Goal</option>
                    <option value="Children develop emotional intelligence">
                      Children develop emotional intelligence
                    </option>
                    <option value="Children develop a positive attitude towards productive work and service or ‘Seva’">
                      Children develop a positive attitude towards productive
                      work and service or ‘Seva’
                    </option>
                    <option value="Children make sense of world around through observation and logical thinking">
                      Children make sense of world around through observation
                      and logical thinking
                    </option>
                  </select>
                  {errors.contentType && <p>{errors.contentType.message}</p>}
                </div>
              </div>

              {/* <div className={styles.formFieldDiv}>
                <div className={styles.formFieldInput}>
                  <input
                    type="text"
                    name="ageGroup"
                    id="ageGroup"
                    placeholder="Age group relevant to"
                    {...register("age")}
                  ></input>
                  {errors.age && <p>{errors.age.message}</p>}
                </div>
              </div> */}

              <div className={styles.formFieldDiv}>
                <div className={styles.formFieldInput}>
                  <input
                    type="text"
                    name="contentLink"
                    id="contentLink"
                    placeholder="Link to the content"
                    {...register("contentLink")}
                  ></input>
                  {errors.contentLink && <p>{errors.contentLink.message}</p>}
                </div>
              </div>

              <div className={styles.formFieldDiv}>
                <div className={styles.formFieldInput}>
                  <textarea
                    placeholder="Description"
                    name="contentDescription"
                    id="contentDescription"
                    {...register("description")}
                  ></textarea>
                  {errors.description && <p>{errors.description.message}</p>}
                </div>
              </div>
              <div className={styles.footerheading}>
                <h3>Competencies</h3>
              </div>
              <div className={styles.footer}>
                <div className={styles.formFieldInline}>
                  <select
                    name="competencies"
                    id="competencies"
                    {...register("compentencies")}
                    style={{
                      border: "2px solid rgb(185, 185, 185)",
                      height: "40px",
                    }}
                  >
                    <option value=""></option>
                    <option value="Starts recognising ‘self’ as an individual belonging to a family and community">
                      Starts recognising ‘self’ as an individual belonging to a
                      family and community
                    </option>
                    <option value="Recognises different emotions and makes deliberate effort to regulate them appropriately">
                      Recognises different emotions and makes deliberate effort
                      to regulate them appropriately
                    </option>
                    <option value="Interacts comfortably with other children and adults">
                      Interacts comfortably with other children and adults
                    </option>
                    <option value="Understands and responds positively to social norms in the classroom and school">
                      Understands and responds positively to social norms in the
                      classroom and school
                    </option>
                    <option value="Shows cooperative behaviour with other children">
                      Shows cooperative behaviour with other children
                    </option>
                    <option value="Shows kindness and helpfulness to others (including animals, plants) when they are in need">
                      Shows kindness and helpfulness to others (including
                      animals, plants) when they are in need
                    </option>
                  </select>
                  {errors.compentencies && (
                    <p>{errors.compentencies.message}</p>
                  )}
                </div>
                <div className={styles.formFieldInline}>
                  <a href="/">Click here to know about competencies</a>
                </div>
              </div>
              <div className={styles.formbutton}>
                <div className={styles.submit}>
                  <button className={styles.submitbutton}>Submit</button>
                </div>
                <div>
                  <button className={styles.submitbutton}>Bulk tag</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default TagContent;
