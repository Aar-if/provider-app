import axios from "axios";
import { create } from "../routes/links";

const uploadApi = async (data) => {
  console.log("Data in upload API");
  console.log(data);

  const title = data.contentName;
  const language = data.language;
  const theme = data.theme;
  const contentType = data.contentType;
  const contentLink = data.contentLink;
  const description = data.description;
  const competency = data.compentencies;

  let result = true;
  await axios
    .post(
      "https://onest-strapi.tekdinext.com/fln-contents",

      {
        title: title,
        description: description,
        language: language,
        link: contentLink,
        contentType: contentType,
        domain: "abc",
        goal: "abc",
        competency: competency,
        theme: theme,
      }
    )
    .then((res) => {
      console.log(res);
      console.log(res.data);

      if (res.status === 200) {
        result = true;
      } else {
        result = false;
      }
    })
    .catch(function (error) {
      console.log(error.response.data.error);
      let err = 0;
      return err;
    });

  return result;
};

export default uploadApi;
