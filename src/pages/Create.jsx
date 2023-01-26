import { useState } from "react";

import { Link } from "react-router-dom";
import { useBookContext } from "../store/ContextProvider";

export const Create = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [cover, setCover] = useState("");
  const [intro, setIntro] = useState("");
  const [completed, setCompleted] = useState(false);
  const [review, setReview] = useState("");
  const store =  useBookContext()



  const hadleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    switch (name) {
      case "title":
        setTitle(value);
        break;
      case "author":
        setAuthor(value);
        break;
      case "intro":
        setIntro(value);
        break;
      case "completed":
        setCompleted(e.target.checked);
        break;
      case "review":
        setReview(value);
        break;
      default:
    }
  };

const handlesumit = (e) => {
    e.preventDefault();
    const newbook = {
      id: crypto.randomUUID(),
      title,
      author,
      cover,
      intro,
      completed,
      review,
    };
    store.createItem (newbook);
    console.log(newbook);
};

const handleOnChangeFile = (e) => {
  const element = e.target;
  const file = element.files[0];
  const reader = new FileReader();

  reader.readAsDataURL(file);
  reader.onload = () => {
    setCover(reader.result.toString());
  }
}

  return (
    <div>
      <Link to="/">
      Home
      </Link>
      <form onSubmit={handlesumit}>
        <div>
          <div>Title</div>
          <input
            type="text"
            name="title"
            onChange={hadleChange}
            value={title}
          />
          {title}
        </div>
        <div>
          <div>Author</div>
          <input
            type="text"
            name="author"
            onChange={hadleChange}
            value={author}
          />
          {author}
        </div>
        <div>
          <div>Cover</div>
          <input
            type="file"
            name="cover"
            onChange={handleOnChangeFile}
          />
          <div>
            {!!cover ? <img src={cover} alt="cover" with="200px" height="200px" /> : "" }
          </div>
        </div>
        <div>
          <div>Intro</div>
          <input
            type="text"
            name="intro"
            onChange={hadleChange}
            value={intro}
          />
          {intro}
        </div>
        <div>
          <div>completed</div>
          <input
            type="checkbox"
            name="completed"
            onChange={hadleChange}
            value={completed}
          />
          {completed}
        </div>
        <div>
          <div>review</div>
          <input
            type="text"
            name="review"
            onChange={hadleChange}
            value={review}
          />
          {review}
        </div>
        <input type="submit" value="Register Book" />
      </form>
    </div>
  );
};

export default Create;
