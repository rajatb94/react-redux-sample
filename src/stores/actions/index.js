
export const changeColor = function(content){
    return {
        type: "CHANGE_COLOR",
        payload: {
            color: content.color
        }
    }
}


// export const changeColor = content => ({
//     type: ADD_TODO,
//     payload: {
//       id: ++nextTodoId,
//       content
//     }
//   });
  
