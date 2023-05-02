import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Outlet, Link } from "react-router-dom";
import SideNav from "../components/sidenav";
import supabase from "../config/client";
import white from "../assets/white.png";
import black from "../assets/black.png";
import blue from "../assets/blue.png";
import red from "../assets/red.png";

const Info = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [commentsect, setCommentsect] = useState([]);
  const [comments, setComment] = useState([]);
  const { id } = useParams();
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const [formError, setformError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log(value);

    const { data, error } = await supabase
      .from("post")
      .update({ comments: [...comments, value] })
      .eq('id', id)
      
      ;

    if (error) {
      console.log(error);
    }
    if (data) {
      console.log(data);
      setformError(null);
    }
    if (!error) {
      navigate("/");
    }
  };

  useEffect(() => {
    const fetchcrewmate = async () => {
      const { data, error } = await supabase
        .from("post")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        // navigate('/', {replace : true})
      }
      if (data) {
        setTitle(data.title);
        setImage(data.image);
        setDescription(data.description);
        setComment(data.comments);
        console.log("update", data);
      }
    };
    fetchcrewmate();
  }, [id]);
  return (
    <div>
   
      <div className="row container">
        <div class="column">
          <h4> Name</h4>
          <h4> description</h4>
        </div>
        <div class="column">
          <p className="label">{title}</p>
          <p className="label">{description} mph</p>
        </div>
        comments section
        <div></div>
      </div>
      comments section
      {comments ? (

        <>
    {    comments.map((data) => (
          <>
            <div className="comments">
           {console.log("Data", data)}
             
            { data}
            </div>
          </>
        ))}
        <form onSubmit={handleSubmit}>
                <div>
                  <label> comment below </label>
                  <input
                    type="text"
                    id="comment"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>

                <button> Submit</button>
                {formError && <p className="error"> {formError}</p>}
              </form>
        </>
      ) : (
        <>
          {/* {post.map((post) => (
                  <Card key={post.id} post={post} />
                ))} */}
          <div>no comment be the first to comment</div>
          <form onSubmit={handleSubmit}>
                <div>
                  <label> comment below </label>
                  <input
                    type="text"
                    id="comment"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                  />
                </div>

                <button> Submit</button>
                {formError && <p className="error"> {formError}</p>}
              </form>
        </>
      )}
    </div>
  );
};

export default Info;
