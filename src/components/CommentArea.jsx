import CommentsList from "./CommentsList";
import AddComment from "./AddComment";
import { useEffect, useState } from "react";

const CommentArea = props => {
  const [comments, setComments] = useState([]);

  const fetchComments = async () => {
    try {
      const response = await fetch("https://striveschool-api.herokuapp.com/api/comments/" + props.asin, {
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDE0MmUxMmY4MWI0MjAwMTM5YjI3ZGYiLCJpYXQiOjE2ODA1NDEwNDIsImV4cCI6MTY4MTc1MDY0Mn0.L5J7Y5LishXNCh2OsEziUEQsbMLc5EiNqP2mltaNmg8",
        },
      });

      if (response.ok) {
        const commentsArr = await response.json();

        setComments(commentsArr);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchComments();
  }, [props.asin]);

  return (
    <div>
      <AddComment asin={props.asin} fetchComments={fetchComments} />
      <CommentsList comments={comments} />
    </div>
  );
};

export default CommentArea;
