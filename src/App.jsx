import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import Card from "./components/card";
// import SideNav from "./components/sidenav";
import header from "./assets/header.jpg";
import supabase from "./config/client";
import { Link, useNavigate } from "react-router-dom";
function App() {
  const navigate = useNavigate();
  console.log(supabase);
  const [count, setCount] = useState(0);
  const [fetchError, setFetchedError] = useState(null);
  const [searchInput, setSearchInput] = useState("");
  const [filteredResults, setFilteredResults] = useState([]);
  const [sortPostbyid,setSortbyid] = useState(true);
  const [sortPostbydate,setSortbydate] = useState(true);
  const ACCESS_KEY = import.meta.env.VITE_APP_SUPABASE_URL;
  const key = import.meta.env;
  const [post, setPost] = useState("");

  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSignUp = async (event) => {
    event.preventDefault()

    setLoading(true)
    const { error } = await supabase.auth.signUp({ email, password })

    if (error) {
      alert(error.error_description || error.message)
    } else {
      navigate("/login")
    
    }
    setLoading(false)
  }
  const PageRoute = () => {
    navigate("/login")
}


  useEffect(() => {
    const fetchpost = async () => {
      const { data, error } = await supabase.from("post").select();

      if (error) {
        setFetchedError("could not fetch the srewmates");
        setPost(null);
        console.log(error);
      }
      if (data) {
        setPost(data);
        setFetchedError(null);
      }
    };
    fetchpost();
  }, []);

  const searchItems = async(inputString, columns) => {
    console.log();
    setSearchInput(inputString);
  
    if (columns == "title") {
      const { data, error } =
      await supabase.from('post').select().textSearch('title', `${inputString}`)
       console.log(data)

       setFilteredResults(data)
    }
  };


  const sortPost= async(e) => {
    console.log(e.target.id);

    if(e.target.id == "sid"){
      const { data, error } = await supabase.from('post')
      .select()
      .order('id',  { ascending: false });
    console.log(data)
    setPost(data)
    }

    if(e.target.id == "sdate"){
      const { data, error } = await supabase.from('post')
      .select()
      .order('created_at',  { ascending: false });
    console.log(data)
    setPost(data)
    }
    // setSearchInput(inputString);
    // await supabase.from('post').select().textSearch('title', `${inputString}`)
    // console.log(data)
  
  
  };
  
  return (
    <div className="App homepage">
      {/* <SideNav />
     */}
      <h1> Art Forum </h1>
      <div className="col-6 form-widget">
        <p className="description">Sign Up</p>
        <form className="form-widget" onSubmit={handleSignUp}>
          <div>
            <input
              className="inputField"
              type="email"
              placeholder="Your email"
              value={email}
              required={true}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <input
              className="inputField"
              type="password"
              placeholder="Your password"
              value={password}
              required={true}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <button className={'button block'} disabled={loading}>
              {loading ? <span>Loading</span> : <span>Sign up</span>}
            </button>

           
            <button className={'button block'} onClick={PageRoute}>
             Login
            </button>
          </div>
        </form>
      </div>
{/*                     
      {fetchError && <p>{fetchError}</p>}

      <button id= "sid" onClick={sortPost}> Sort by id </button>
          <button id = "sdate" onClick={sortPost}> Sort by date </button>
      {post && (
        <div className="crewmates">
          <input
            type="text"
            placeholder="Search..."
            onChange={(inputString) =>
              searchItems(inputString.target.value, "title")
            }
          />

          <div className="crewmates-grid">

            {searchInput.length > 0 ? (
              filteredResults.map((data) => (
                <>
                  {post.map((data) => (
                    <Card key={post.id} post={post} />
                  ))}

                  {console.log(filteredResults)}
                  </>
              ))
            ) : (
              <>
                {post.map((post) => (
                  <Card key={post.id} post={post} />
                ))}
              </>
            )}
          </div>
        </div>
      )} */}
    </div>
  );
}

export default App;
