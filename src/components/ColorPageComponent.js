//import logo from './logo.svg';
//import './App.css';
import { connect } from "react-redux";
import {changeTextColor, changeBackgroundColor} from '../stores/actions/colors';
import { addPost, fetchPosts } from '../stores/actions/posts';

function ColorPage(props) {
    let {backColor, fontColor, posts} = props

    const changeBackgroundColor = ()=>{
      props.changeBackgroundColor({color: "red"})
    }
    const addPost = ()=>{
      props.addPost({
        post: {
          title: "I am a good person."
        }
      })
    }
    
    return (
      <div >
          <div style={{backgroundColor: backColor, minHeight: "300px", fontSize: "2em"}}>
            <ul>
              {
                posts.map((post, index)=>{
                  return <li key={index} style={{color: fontColor}}>{post.title}</li>
                })
              }
            </ul>
          </div>
          <button onClick={changeBackgroundColor}>changeToRed</button>
          <button onClick={addPost}>addPost</button>
          <button onClick={props.fetchPosts}>fetchPost</button>
      </div>
    );
  }
  
  function mapStateToProps(state){
    return {
      backColor: state.ColorsReducer.backgroundColor,
      fontColor: state.ColorsReducer.textColor,
      posts: state.PostsReducer.posts
    }
  }

  export default connect(mapStateToProps, { changeBackgroundColor, changeTextColor, addPost, fetchPosts })(ColorPage);

