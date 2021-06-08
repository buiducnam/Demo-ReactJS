import './TodoList.css';
import classnames from "classnames";
const TodoList = (props) => {
    const {item, onClick} = props;
    
    return(
        <div className= {classnames('TodoList', {"TodoList-Complete" : item.isComplete})}>
            <i onClick={onClick} className="fas fa-check-circle" style={ item.isComplete !== true ? {color: 'black'} : {color: 'green'}}></i>
            <p>{item.title}</p>
        </div>
    );
}

export default TodoList;