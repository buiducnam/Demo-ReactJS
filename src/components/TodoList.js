import './TodoList.css';
import classnames from "classnames";
const TodoList = (props) => {
    const {item} = props;
    return(
        <div className= {classnames('TodoList', {"TodoList-Complete" : item.isComplete})}>
            <p>{item.title}</p>
        </div>
    );
}

export default TodoList;